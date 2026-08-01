**Yapay Zeka Destekli Görüntü Analizi ve Lokalizasyon Sistemi**

## 1. Giriş

Göz sağlığı, insan vücudunun genel sağlığı üzerinde doğrudan etkili olan önemli bir faktördür. **Fundus** (göz dibi) ve **OCT (Optik Koherens Tomografi)** görüntüleri, gözdeki birçok hastalığın teşhisinde kullanılan etkili yöntemlerdir. Bu proje, **yapay zeka** destekli bir sistemle **Fundus** ve **OCT görüntülerinden 25’ten fazla hastalığı** tespit etmeyi hedeflemektedir. Sistem, sadece hastalıkları tespit etmekle kalmaz, aynı zamanda **Gemini yapay zeka modeli** ile gözün hangi bölgesinde sorun olduğunu **lokalize eder**.

---

## 2. Amaç

Bu projenin amacı, **Fundus** ve **OCT görüntüleri** kullanarak gözdeki hastalıkları tespit etmek ve **yapay zeka tabanlı bir sistem** ile bu hastalıkların hangi bölgelerde meydana geldiğini **lokalize etmek**tir. Özellikle şu hedeflere odaklanılmaktadır:

- 25’ten fazla göz hastalığının doğru bir şekilde **tespiti**.
    
- **Göz bölgesi lokalizasyonu** ile hangi alanlarda sorun olduğunu belirlemek.
    
- **Yapay zeka algoritmalarının** doğruluğunu ve güvenilirliğini artırmak.
    
- Klinik ortamlarda **hızlı ve doğru tanı** konmasına yardımcı olmak.
    

---

## 3. Teknik Yöntem ve Yapay Zeka Uygulaması

### 3.1 Görüntü Toplama ve Veri Seti

Proje için kullanılan **Fundus** ve **OCT görüntüleri**, dünya çapında **göz hastalıkları veritabanları** ve klinik işbirlikleri aracılığıyla toplanmıştır. Bu görüntüler, çeşitli göz hastalıklarını içeren 25'ten fazla hastalığı temsil etmektedir. **Fundus görüntüleri**, gözün arka kısmındaki damar yapısını ve retina dokularını, **OCT görüntüleri** ise gözdeki retina ve optik sinir başını detaylı şekilde gösterir.

### 3.2 Ön İşleme

Fundus ve OCT görüntülerinin **yapay zeka algoritmalarına** uygun hale gelmesi için ön işleme teknikleri uygulanmıştır:

- **Kontrast iyileştirme**: Görüntülerin daha belirgin hale gelmesi için kontrast artırma işlemi uygulanmıştır.
    
- **Gaussian bulanıklaştırma**: Gürültülerin giderilmesi amacıyla bulanıklaştırma işlemi yapılmıştır.
    
- **Histogram eşitleme**: Görüntüdeki kontrast dengesizliği giderilmiştir.
    

Bu ön işleme adımları, modelin doğru sonuçlar vermesini sağlamak amacıyla yapılmıştır.

### 3.3 Model Tasarımı ve Eğitim

**Gemini 2.5** yapay zeka modeli, göz hastalıklarının tespiti için en son derin öğrenme teknikleriyle eğitilmiştir. Model, Fundus ve OCT görüntülerinden, gözün hangi bölgesinde hastalık olduğunu tespit edebilecek şekilde yapılandırılmıştır.

#### Model Özellikleri:

- **CNN (Convolutional Neural Networks)** tabanlı yapı.
    
- **Attention mechanism**: Görüntüdeki önemli alanlara odaklanarak doğruluk artırılmıştır.
    
- **Transfer learning**: Önceden eğitilmiş modellerden elde edilen özellikler kullanılarak daha hızlı ve doğru sonuçlar elde edilmiştir.
    

Model, görüntülerin **bölgesel** analizini yaparak, gözün hangi alanında problem olduğunu yüksek doğrulukla tespit etmektedir.

### 3.4 Lokalizasyon ve Hastalık Tespiti

Model, görüntüdeki hastalık belirtilerini **lokalize etme** yeteneğine sahiptir. Bu aşamada, **yapay zeka algoritmaları**, gözün farklı bölgelerinde hangi hastalıkların bulunduğunu belirler. Sistemde şu hastalıklar tespit edilmektedir:

- **Glokom**
    
- **Makula dejenerasyonu**
    
- **Diabetik retinopati**
    
- **Katarakt**
    
- **Retina damar tıkanıklığı**
    
- **Ve diğer retina hastalıkları**
    

Her hastalık için **lokalizasyon** yapılarak, hastalığın gözün hangi bölümünde olduğunu harita üzerinde gösterir.

### 3.5 Performans Değerlendirmesi

Modelin doğruluğu, **F1 skoru**, **IoU (Intersection over Union)** ve **accuracy** gibi performans metrikleri ile değerlendirilmiştir. Yapılan testler sonucunda, sistemin **yüksek doğruluk oranları** ile çalıştığı tespit edilmiştir.

---

## 4. Klinik Entegrasyon ve Kullanım Potansiyeli

**NeuroMed** platformu, **PACS** ve **HBYS** sistemleriyle uyumlu bir şekilde çalışacak şekilde tasarlanmıştır. Kullanıcılar, **Fundus ve OCT görüntülerini** sisteme yükleyerek **hızlı ve doğru sonuçlar** alabilirler. Yapay zeka, görüntüleri analiz ederek hastalığı tespit eder ve hastalığın gözdeki **lokasyonunu** gösterir.

### 4.1 Klinik Uygulama

Sistem, klinik ortamlarda göz hastalıklarının hızlı ve doğru bir şekilde tespit edilmesi için kullanılabilir. **Otomatik raporlama** ile hekimler, hastalarının **göz durumu hakkında anında bilgi** sahibi olabilirler. Ayrıca, **açıklanabilir yapay zeka** özellikleri ile her sonuç detaylı bir şekilde açıklanır, bu da klinik karar süreçlerini destekler.

---

## 5. Sonuçlar ve Gelecek Adımlar

Bu proje, **Fundus ve OCT görüntüleri** kullanarak **25'ten fazla göz hastalığını** yüksek doğrulukla tespit eden bir **yapay zeka tabanlı sistem** geliştirmiştir. **Lokalizasyon özellikleri** ile hastalıkların gözdeki konumu da belirlenebilmektedir.

### 5.1 Gelecek Adımlar:

- **Daha fazla hastalık türü** eklenerek sistemin kapsamı genişletilebilir.
    
- **Veri seti büyütülerek**, modelin genelleme yeteneği artırılabilir.
    
- **Klinik testler** yapılarak modelin pratikteki başarısı değerlendirilebilir.