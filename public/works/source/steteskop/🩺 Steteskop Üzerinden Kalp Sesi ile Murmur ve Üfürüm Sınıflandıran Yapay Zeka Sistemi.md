**Yapay Zeka Destekli Kardiyak Ses Analizi**

## 1. Giriş

Kalp hastalıkları, dünyada en yaygın ölüm nedenlerinden biridir. Özellikle **murmur** ve **üfürüm** gibi kalp sesleri, birçok kardiyak hastalığın belirtisi olabilir. Bu seslerin doğru bir şekilde tespit edilmesi ve sınıflandırılması, hastalıkların erken teşhisinde önemli bir adımdır. Geleneksel yöntemler, uzman bir doktorun steteskop kullanarak dinlemesini gerektirirken, bu proje, **yapay zeka tabanlı bir sistem** ile steteskop üzerinden elde edilen kalp seslerinin otomatik olarak sınıflandırılmasını hedeflemektedir.

---

## 2. Amaç

Bu projenin temel amacı, **steteskop üzerinden alınan kalp seslerini** kullanarak **murmur** ve **üfürüm** gibi anormal kalp seslerini **yapay zeka destekli sistemle** sınıflandırmaktır. Sistem, kalp seslerini **otomatik** olarak analiz edip doğru bir şekilde tanımlayarak, kardiyoloji uzmanlarının hastalıkları erken tespit etmelerine yardımcı olacaktır. Bu çözüm, **hızlı**, **doğru** ve **kolay erişilebilir** bir değerlendirme yöntemi sunmayı amaçlamaktadır.

---

## 3. Temel Özellikler ve İşleyiş

### 3.1 Kalp Seslerinin Toplanması

Sistem, **steteskop** ile kaydedilen **kalp seslerini** kullanır. Bu sesler, mikrofon aracılığıyla dijital forma dönüştürülerek sisteme iletilir. Sesler, genellikle **yüksek kaliteli dijital steteskoplar** kullanılarak toplanır. Bu sesler **dalgalar** olarak kaydedilir ve yapay zeka algoritmalarına iletilir.

### 3.2 Veri Analizi ve Ön İşleme

- **Ses sinyali işleme**: Kalp seslerinin analizi, önce ses sinyallerinin **gürültüden arındırılması** ve **normalleştirilmesi** ile başlar.
    
- **Özellik çıkarımı**: Ses sinyalleri üzerinde **frekansta** ve **zaman domaininde** analizler yapılır. Bu süreçte **MFCC (Mel-Frequency Cepstral Coefficients)**, **RMS (Root Mean Square)** ve **zero-crossing rate** gibi özellikler çıkarılır.
    
- **Zaman-dalgası analizi**: Kalp seslerinin dalga formu üzerinde yapılan analizler, murmur ve üfürümün karakteristik özelliklerini belirler.
    

### 3.3 Sınıflandırma

Yapay zeka, kalp seslerini **murmur**, **üfürüm** ve **normal kalp sesi** olarak sınıflandırır. Bu amaçla kullanılan algoritmalar şunlardır:

- **Derin Öğrenme Modelleri**: **CNN (Convolutional Neural Networks)** ve **RNN (Recurrent Neural Networks)** gibi derin öğrenme algoritmaları kullanılarak kalp seslerinin sınıflandırılması sağlanır.
    
- **Özellik Tabanlı Sınıflandırma**: **SVM (Support Vector Machine)** ve **Random Forest** gibi geleneksel makine öğrenmesi algoritmaları da kullanılabilir.
    
- **Veri Kümesi**: Sistem, geniş bir **kalp sesi veri kümesi** üzerinde eğitilmiştir. Bu veri kümesi, normal ve anormal kalp sesleri içeren örneklerden oluşur.
    

### 3.4 Model Eğitimi ve Doğrulama

Model, **etiketlenmiş kalp sesi verisi** kullanılarak eğitilmiştir. Veriler, uzman kardiyologlar tarafından etiketlenmiş olup, her bir ses örneği **normal**, **murmur** veya **üfürüm** olarak sınıflandırılmıştır. Modelin doğruluğu, **cross-validation** yöntemleri ile test edilmiş ve yüksek doğruluk oranları elde edilmiştir.

### 3.5 Kullanıcı Arayüzü ve Geribildirim Sistemi

- **Mobil Uygulama**: Kullanıcılar, steteskop aracılığıyla kaydettikleri kalp seslerini **mobil uygulama** üzerinden sisteme yükleyebilir.
    
- **Web Arayüzü**: Web platformu üzerinden de kullanıcılar, kalp seslerini yükleyebilir ve sonuçları hızlıca alabilirler.
    
- **Sonuç ve Uyarılar**: Sistem, kullanıcıya **murmur** ve **üfürüm** ile ilgili bir **uyarı** gönderir ve önerilen aksiyonları belirtir.
    

---

## 4. Teknolojik Altyapı ve Kullanılan Araçlar

### 4.1 **Yapay Zeka Modeli**

- Temporal CNN gibi gelişmiş yapay zeka algoritmaları, kalp seslerinin doğru bir şekilde sınıflandırılmasında kullanılır.
    
- **TensorFlow** ve **PyTorch** gibi açık kaynaklı derin öğrenme kütüphaneleri, modelin eğitiminde kullanılır.
    
- **MFCC ve ZCR (Zero Crossing Rate)** gibi ses işleme teknikleri, ses sinyalinin özelliklerini çıkararak modelin doğruluğunu artırır.
    

### 4.2 **Mobil Uygulama ve Web Sistemi**

- **Mobil uygulama**: Android ve iOS platformlarında çalışabilen bir uygulama geliştirilmiştir. Uygulama, kalp seslerini kaydederek değerlendirme işlemi için gönderir.
    
- **Web platformu**: Web tabanlı bir platformda da kullanıcılar kalp seslerini yükleyebilir ve sonuçları görüntüleyebilir.
    

### 4.3 **Steteskop Teknolojisi**

- **Yüksek çözünürlüklü dijital steteskoplar**, kalp seslerinin doğru bir şekilde kaydedilmesi için kullanılır.
    
- **Bluetooth özellikli steteskoplar** ile kablosuz bağlantı sağlanarak sesler doğrudan sisteme aktarılır.
    

---

## 5. Sistemin İşleyiş Akışı

1. **Kalp Seslerinin Kaydedilmesi**: Kullanıcı, **steteskop** aracılığıyla kalp seslerini kaydeder.
    
2. **Veri Yükleme**: Kaydedilen ses verisi, **mobil uygulama** ya da **web platformu** aracılığıyla sisteme yüklenir.
    
3. **Özellik Çıkartma ve Analiz**: Yapay zeka modeli, ses sinyalinden önemli özellikleri çıkarır ve analiz eder.
    
4. **Sonuçların Görüntülenmesi**: Model, kalp sesinin normal mi, murmur mu yoksa üfürüm mü olduğunu belirler ve kullanıcıya sonuçları iletir.
    
5. **Geribildirim ve Uyarı Sistemi**: Anormal bir durum tespit edilirse, sistem kullanıcısına **uyarı** gönderir.
    

---

## 6. Gelecek Adımlar

- **Model İyileştirmeleri**: Yapay zeka modeli, daha fazla veri ile eğitilerek doğruluğu artırılacaktır.
    
- **Kapsamlı Eğitim**: Eğitim modülleri eklenerek, kullanıcılara kalp sesleri hakkında daha fazla bilgi verilebilir.
    
- **Yeni Özellikler**: **Farklı kalp hastalıklarını tespit etme** özellikleri eklenerek sistemin kapsamı genişletilebilir.
    

---

## 7. Sonuç

Bu proje, **steteskop** aracılığıyla elde edilen kalp seslerinin **yapay zeka destekli otomatik sınıflandırılmasını** sağlayan bir sistem geliştirmeyi başarmıştır. **Murmur** ve **üfürüm** gibi anormal kalp seslerinin hızlı ve doğru bir şekilde tespit edilmesi, kardiyoloji uzmanlarına büyük kolaylık sağlayacaktır. Geliştirilen sistem, hem **mobil uygulama** hem de **web platformu** üzerinden erişilebilir olması sayesinde **daha geniş kullanıcı kitlelerine** hitap etmektedir.
