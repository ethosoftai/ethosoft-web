## 1. Proje Tanımı ve Amaç

Bu proje, yüksek enerjili çarpışma verilerini — özellikle CERN’de elde edilen proton‑proton çarpışmaları verileri — ve Monte Carlo simülasyonlarını kullanarak aşağıdaki hedefleri gerçekleştirmeyi amaçlamaktadır:

- Standart Model (SM) kapsamında kuark‑gluon etkileşimleri (QCD) analizleri yapmak.
    
- Higgs boson sinyallerini tanımlamak ve niceliksel/kalitatif analizler gerçekleştirmek.
    
- Standart Model’in ötesinde potansiyel sinyaller arayarak dark matter adayı parçacıkların üretim ihtimalini ve izlerini aramak; özellikle “missing energy / transverse momentum imbalance (MET / (E_T^{\rm miss}))” sinyalleri üzerinden dark matter potansiyeli tespit etmek. ([arXiv](https://arxiv.org/abs/1109.4398?utm_source=chatgpt.com "Missing Energy Signatures of Dark Matter at the LHC"))
    
- Simülasyon altyapısı ile gerçek veri analiz sonuçlarını karşılaştırmak; model doğrulama ve testlerini Monte Carlo tabanlı “event generator + detector simulation + reconstruction” ile yapmak. ([lup.lub.lu.se](https://lup.lub.lu.se/student-papers/record/8932453/file/8932470.pdf?utm_source=chatgpt.com "Monte Carlo production of proton-proton collision events ..."))
    

Bu sayede, hem bilinen fizik süreçlerinin (QCD, Higgs) analizi hem de keşfedilmemiş / BSM (Beyond Standard Model) fizik olasılıklarının araştırılması hedeflenmektedir.

---

## 2. Temel Kavramsal Çerçeve

### 2.1 Standart Model & QCD / Higgs

- QCD — kuark ve gluon etkileşimlerini açıklayan kuvvet teorisidir; hadron çarpışmalarında kuark/gluon bazlı süreçlerin analizi yapılır.
    
- Higgs bozonu, parçacık fiziğinde kütle kazanımı mekanizmasında kilit rol oynar; yüksek enerjili çarpışmalarda Higgs üretim ve bozunma kanalları analiz edilerek keşif ve niceliksel çalışmalar yapılır. ([Vikipedi](https://en.wikipedia.org/wiki/Compact_Muon_Solenoid?utm_source=chatgpt.com "Compact Muon Solenoid"))
    

### 2.2 Dark Matter & Missing Energy Yaklaşımı

- Dark matter: elektromanyetik etkileşimde bulunmayan, doğrudan gözlemlenemeyen; varlığı gözlemlenebilir madde üzerindeki kütleçekimsel/ivme etkilerinden ve astrofizik gözlemlerden çıkarılan varsayımsal madde türüdür. Evrendeki toplam madde‑enerji içeriğinin önemli bir kısmını oluşturduğu kabul edilmektedir. ([Vikipedi](https://tr.wikipedia.org/wiki/Karanl%C4%B1k_madde?utm_source=chatgpt.com "Karanlık madde"))
    
- Tuzaktan kaçan (görünmeyen) parçacıklar “invisible” oldukları için dedektörlerde doğrudan görüntülenemezler; ancak olayda **transvers momentum dengesi bozulması** — yani “missing transverse energy (MET)” — gözlemlenirse, bu durum dark matter üretiminin dolaylı bir kanıtı olabilir. Bu yöntem, collider dark matter arayışlarında önemli bir analiz stratejisidir. ([arXiv](https://arxiv.org/abs/1109.4398?utm_source=chatgpt.com "Missing Energy Signatures of Dark Matter at the LHC"))
    

---

## 3. Veri & Simülasyon Altyapısı

### 3.1 Gerçek Veri — CERN / LHC

- Proton–proton çarpışmaları: SM süreçleri (QCD, electroweak, Higgs vb.) ve potansiyel BSM olayları içeren veri setleri kullanılır. Örneğin, CMS ve ATLAS dedektörlerinden elde edilmiş veri setleri analiz edilebilir. ([Vikipedi](https://en.wikipedia.org/wiki/Compact_Muon_Solenoid?utm_source=chatgpt.com "Compact Muon Solenoid"))
    
- Bu veriler, dedektör kayıtları, çarpışma enerjileri, momentum‑enerji ölçümleri, jeti, lepton/bozon çıkışları, missing energy gibi parametreler içerir.
    

### 3.2 Monte Carlo Simülasyon & “Event Generator”

- Gerçek veri analizlerinin yanı sıra, Monte Carlo (MC) tabanlı “event generator + detector simulation + reconstruction” altyapısı kullanılarak simüle edilmiş veri setleri oluşturuluyor. Bu simülasyonlar, hem SM süreçlerini hem de dark matter / BSM senaryolarını içerebiliyor. ([lup.lub.lu.se](https://lup.lub.lu.se/student-papers/record/8932453/file/8932470.pdf?utm_source=chatgpt.com "Monte Carlo production of proton-proton collision events ..."))
    
- Simüle edilen olaylar — jet üretimi, bozon bozunmaları, dark matter adayı parçacık üretimi vb. — dedektör modellemeleri ile yeniden oluşturuluyor. Bu sayede “gerçekçi” analiz ortamı elde ediliyor ve model – data kıyaslamaları yapılabiliyor.
    

### 3.3 Makine Öğrenmesi / Sinyal‑Arkaplan Ayrımı

- Simülasyon verileri, background (arka plan / SM süreçleri) ile signal (örneğin dark matter üretimi + MET + mono‑jet / mono‑X) olaylarını içerecek şekilde hazırlanıyor. ([lip.pt](https://www.lip.pt/files/training/papers/2020/pdf/LIP-STUDENTS-20-06.pdf?utm_source=chatgpt.com "Advanced data analysis methods for dark matter research ..."))
    
- Bu veri setleri ile makine öğrenmesi / derin öğrenme modelleri eğitiliyor; amaç, yüksek boyutlu veride signal vs background ayrımı yapmak — QCD background’un altındaki gizli sinyalleri (Higgs, Dark Matter) yükseltmek. ([lip.pt](https://www.lip.pt/files/training/papers/2020/pdf/LIP-STUDENTS-20-06.pdf?utm_source=chatgpt.com "Advanced data analysis methods for dark matter research ..."))
    

---

## 4. Proje İşleyişi & Metodoloji

|Aşama|Açıklama|
|---|---|
|**Veri Toplama**|CERN veri setlerinden çekirdek çarpışma olayları + arka plan + simülasyon setleri|
|**Simülasyon Üretimi**|Monte Carlo event generator + dedektör simülasyonu (örneğin GEANT4 / benzeri) ile simüle edilmiş veri oluşturulması|
|**Öznitelik / Feature Çıkarımı**|Jet bilgileri, bozon bozunmaları, momentum & enerji dağılımları, MET, lepton/jet sayısı, açısal dağılımlar vb.|
|**Model Eğitimi**|Background vs signal sınıflandırması için ML / DL modelleri (örneğin DNN, boosted trees vs)|
|**Analiz & Sinyal Arama**|Higgs olayları, dark matter arayışı (mono‑jet + MET, mono‑X + MET) gibi özel kanalların taranması|
|**Sonuç Doğrulama**|Simülasyon sonuçları ile gerçek veri karşılaştırması; istatistik analiz; p‑value / limit / olasılık hesaplamaları|
|**Raporlama & Yorum**|Örnek olaylar, sınırlar (exclusion limits), potansiyel keşif kanıtları veya sınırlar|

---

## 5. Öne Çıkan Deneysel Kanallar

- **Mono‑jet + MET**: Yüksek enerjili bir jet + büyük missing transverse energy. Dark matter adayı parçacıkların dedektörü terk etmesi sonucu MET gözlemlenir. ([arXiv](https://arxiv.org/abs/1109.4398?utm_source=chatgpt.com "Missing Energy Signatures of Dark Matter at the LHC"))
    
- **Mono‑X + MET (X = Z, Higgs, photon …)**: Örneğin bir Z ya da Higgs bozonu + MET ile dark matter eş zamanlı üretimi. Özellikle Higgs + MET kanalı, dark matter arayışında alternatif bir sinyal yolu sunar. ([arXiv](https://arxiv.org/abs/1402.7074?utm_source=chatgpt.com "Mono-Higgs Detection of Dark Matter at the LHC"))
    
- **Higgs üretim ve bozunma kanalları**: Higgs bozonunun standart model beklentileriyle tutarlılığı, ya da sapmalar, yeni fiziğe dair ipuçları olabilir.
    

---

## 6. Yenilikçi Yönler & Projenin Katkısı

- MC + gerçek veri + ML/DL kombine analizi ile “arka plan + sinyal ayırt etme” yeteneği — özellikle dark matter arayışında geleneksel cut‑based analizlerin ötesinde.
    
- Kanal çeşitliliği (mono‑jet, mono‑X, Higgs, jets, bozon bozunmaları vb.) ile geniş tarama ve keşif imkânı.
    
- Simülasyon ile sürekli test ve validasyon; modelin hem SM süreçlerinde hem BSM senaryolarında performansını ölçme.
    
- Potansiyel keşif — dark matter ya da henüz gözlemlenmemiş yeni parçacıklar — fizik açısından büyük bilimsel değer.
    

---

## 7. Riskler & Dikkat Edilmesi Gereken Hususlar

- QCD background’un yoğunluğu: Hadron çarpışmalarında kuark/gluon süreçleri çok sayıda ve karmaşık arka plan oluşturur; signal gömülmüş olabilir.
    
- Sistematik belirsizlikler: Dedektör modeli, simülasyon doğruluğu, ölçek hatası, pile-up (çoklu çarpışma) gibi etkiler sinyal algısını zorlaştırabilir.
    
- Kütle / enerji parametreleri belirsizliği: Dark matter modeli ve kütlesi, bozunma kanalları gibi belirsizlikler; çok sayıda senaryo ile çalışılması gerek.
    
- İstatistiksel anlamlılık: Az sayıda sinyal olayı ile sonuç elde etmek zor; yüksek örneklem ve dikkatli analiz gerekir.
    

---

## 8. Sonuç & Öneriler

Bu proje, parça fiziği araştırmalarında hem teorik hem deneysel olarak kritik kapıları aralamayı hedefleyen çok katmanlı, modern bir yaklaşımı temsil etmektedir. QCD, Higgs ve dark matter arayışını aynı çatı altında — gerçek veri + simülasyon + makine öğrenmesi — ile birleştirerek, bilimsel keşif potansiyelini maksimuma taşımaktadır.

**Öneriler**:

- Simülasyon veri setleri genişletilsin (varyant senaryolar, farklı kütle & bozunma modları)
    
- ML/DL modelleri ve hyper‑parametre optimizasyonu sürekli revize edilsin
    
- Analiz kanalları çeşitlendirilsin — mono‑jet, mono‑X, Higgs, diboson + MET …
    
- Sonuçlar istatistiksel güven aralığı ile raporlansın; limitler, olasılıklar açıkça belirtlsin