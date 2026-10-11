import { useEffect, useRef, useState } from "react";
import { papers, products, projects } from "./data";

type Kind = "paper" | "project" | "product";
type Hub = { id: string; label: string; x: number; y: number };
type Node = {
  kind: Kind;
  label: string;
  href: string;
  hub: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  phase: number;
};

// Hub positions are fractions of the canvas; every node is tied only to the
// category it already has in data.ts, so the map shows nothing we made up.
const HUBS: Hub[] = [
  { id: "Core AI", label: "Core AI", x: 0.44, y: 0.33 },
  { id: "Healthcare", label: "Healthcare", x: 0.8, y: 0.6 },
  { id: "Education", label: "Education", x: 0.24, y: 0.8 },
];

const KIND_LABEL: Record<Kind, string> = {
  paper: "Paper",
  project: "Project",
  product: "Product",
};

function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function buildNodes(): Node[] {
  const rand = seeded(1453);
  const hubIndex = (id: string) => HUBS.findIndex((hub) => hub.id === id);
  const make = (kind: Kind, label: string, href: string, hub: number, r: number): Node => ({
    kind,
    label,
    href,
    hub,
    x: HUBS[hub].x + (rand() - 0.5) * 0.3,
    y: HUBS[hub].y + (rand() - 0.5) * 0.3,
    vx: 0,
    vy: 0,
    r,
    phase: rand() * Math.PI * 2,
  });
  return [
    ...papers.map((paper) => make("paper", paper.short, `/papers/${paper.slug}/`, 0, 7)),
    ...projects.map((project) => make("project", project.title, project.href, hubIndex(project.category), 5)),
    ...products.map((product) => make("product", product.name, product.href, hubIndex(product.category), 9)),
  ];
}

export default function ResearchMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hover, setHover] = useState<{ node: Node; x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = buildNodes();
    const style = getComputedStyle(canvas);
    const ink = style.getPropertyValue("--ink").trim() || "#16120f";
    const coral = style.getPropertyValue("--coral").trim() || "#cf5b43";
    const paper = style.getPropertyValue("--paper").trim() || "#f6f1e8";

    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;
    let running = true;
    let hovered: Node | null = null;
    const pointer = { x: -1, y: -1, inside: false };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const step = (t: number) => {
      const scale = Math.min(width, height);
      for (const node of nodes) {
        const hub = HUBS[node.hub];
        node.vx += (hub.x - node.x) * 0.008;
        node.vy += (hub.y - node.y) * 0.008;
        for (const other of nodes) {
          if (other === node) continue;
          const dx = (node.x - other.x) * width;
          const dy = (node.y - other.y) * height;
          const distSq = dx * dx + dy * dy + 0.01;
          const min = (node.r + other.r) * 6.5 + 14;
          if (distSq < min * min) {
            const push = (min - Math.sqrt(distSq)) / min;
            node.vx += (dx / width) * push * 0.06;
            node.vy += (dy / height) * push * 0.06;
          }
        }
        if (!reduced) {
          node.vx += Math.cos(t * 0.0004 + node.phase) * 0.00006;
          node.vy += Math.sin(t * 0.0005 + node.phase) * 0.00006;
        }
        if (pointer.inside) {
          const dx = node.x * width - pointer.x;
          const dy = node.y * height - pointer.y;
          const dist = Math.hypot(dx, dy);
          if (dist < scale * 0.14 && dist > 0.1) {
            const f = (1 - dist / (scale * 0.14)) * 0.0009;
            node.vx += (dx / dist) * f;
            node.vy += (dy / dist) * f;
          }
        }
        node.vx *= 0.86;
        node.vy *= 0.86;
        node.x += node.vx;
        node.y += node.vy;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const px = (node: { x: number }) => node.x * width;
      const py = (node: { y: number }) => node.y * height;

      // spokes from hub to each member
      ctx.lineWidth = 1;
      for (const node of nodes) {
        const hub = HUBS[node.hub];
        const active = hovered && hovered.hub === node.hub;
        ctx.strokeStyle = active ? coral : ink;
        ctx.globalAlpha = active ? 0.45 : 0.1;
        ctx.beginPath();
        ctx.moveTo(px(hub), py(hub));
        ctx.lineTo(px(node), py(node));
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      const scale = Math.min(width, height);
      ctx.setLineDash([2, 5]);
      ctx.strokeStyle = ink;
      ctx.globalAlpha = 0.18;
      for (const hub of HUBS) {
        for (const ring of [0.12, 0.2]) {
          ctx.beginPath();
          ctx.arc(px(hub), py(hub), scale * ring, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
      ctx.setLineDash([]);
      ctx.globalAlpha = 1;
      for (const hub of HUBS) {
        ctx.fillStyle = ink;
        ctx.beginPath();
        ctx.arc(px(hub), py(hub), 3.5, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const node of nodes) {
        const x = px(node);
        const y = py(node);
        const isHover = node === hovered;
        ctx.lineWidth = 1.5;
        if (node.kind === "paper") {
          ctx.fillStyle = isHover ? coral : ink;
          ctx.beginPath();
          ctx.arc(x, y, node.r + (isHover ? 3 : 0), 0, Math.PI * 2);
          ctx.fill();
        } else if (node.kind === "project") {
          ctx.strokeStyle = isHover ? coral : ink;
          ctx.fillStyle = isHover ? coral : "transparent";
          ctx.beginPath();
          ctx.arc(x, y, node.r + (isHover ? 3 : 0), 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        } else {
          const s = node.r + (isHover ? 3 : 0);
          ctx.fillStyle = coral;
          ctx.fillRect(x - s, y - s, s * 2, s * 2);
        }
      }

      // labels last so nothing is drawn over them
      const chip = (text: string, x: number, y: number, color: string, font: string) => {
        ctx.font = font;
        const w = ctx.measureText(text).width;
        ctx.fillStyle = paper;
        ctx.globalAlpha = 0.92;
        ctx.fillRect(x - 4, y - 12, w + 8, 17);
        ctx.globalAlpha = 1;
        ctx.fillStyle = color;
        ctx.fillText(text, x, y);
      };
      for (const node of nodes) {
        if (node.kind === "product") {
          chip(node.label, px(node) + node.r + 8, py(node) + 4, ink, "500 13px 'Manrope', system-ui, sans-serif");
        }
      }
      for (const hub of HUBS) {
        chip(hub.label.toUpperCase(), px(hub) - 30, py(hub) - scale * 0.2 - 8, coral, "500 11px 'JetBrains Mono', ui-monospace, monospace");
      }
    };

    const loop = (t: number) => {
      if (running) {
        step(t);
        draw();
      }
      frame = requestAnimationFrame(loop);
    };

    const pick = (x: number, y: number) => {
      let best: Node | null = null;
      let bestDist = 22;
      for (const node of nodes) {
        const d = Math.hypot(node.x * width - x, node.y * height - y);
        if (d < bestDist) {
          best = node;
          bestDist = d;
        }
      }
      return best;
    };

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.inside = true;
      hovered = pick(pointer.x, pointer.y);
      canvas.style.cursor = hovered ? "pointer" : "default";
      setHover(hovered ? { node: hovered, x: hovered.x * width, y: hovered.y * height } : null);
      if (reduced) draw();
    };
    const onLeave = () => {
      pointer.inside = false;
      hovered = null;
      setHover(null);
      if (reduced) draw();
    };
    const onClick = () => {
      if (!hovered) return;
      if (hovered.href.startsWith("http")) window.open(hovered.href, "_blank", "noopener");
      else window.location.href = hovered.href;
    };

    resize();
    if (reduced) {
      for (let i = 0; i < 400; i += 1) step(0);
      draw();
    } else {
      frame = requestAnimationFrame(loop);
    }

    const observer = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting;
    });
    observer.observe(canvas);
    const onResize = () => {
      resize();
      draw();
    };
    window.addEventListener("resize", onResize);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);
    canvas.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      canvas.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <figure className="research-map">
      <canvas ref={canvasRef} aria-hidden="true" />
      {hover && (
        <div className="map-tooltip" style={{ left: hover.x, top: hover.y }}>
          <span>{KIND_LABEL[hover.node.kind]}</span>
          <strong>{hover.node.label}</strong>
        </div>
      )}
      <figcaption>
        <span>
          <i className="key key-paper" /> {papers.length} papers
        </span>
        <span>
          <i className="key key-project" /> {projects.length} projects
        </span>
        <span>
          <i className="key key-product" /> {products.length} products
        </span>
      </figcaption>
    </figure>
  );
}
