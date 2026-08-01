**Writing, Listening, Reading ve Speaking Testlerinin Otomatik Puanlanması**

## 1. Giriş

Dil öğrenimi ve öğretimi süreçlerinde değerlendirme önemli bir yer tutar. Geleneksel sınav değerlendirme yöntemleri zaman alıcı ve manuel süreçler gerektirmektedir. Bu projede, **İngilizce sınavları için writing, listening, reading ve speaking testlerini** otomatik olarak değerlendiren bir **yapay zeka sistemi** geliştirilmiştir. Bu sistem, hem **mobil uygulama** hem de **web platformu** üzerinden çalışabilir ve öğrencilere daha hızlı geri bildirim sağlamak amacıyla geliştirilmiştir.

---

## 2. Amaç

Proje, **Gemini 2.5 Flash** yapay zeka modelini kullanarak **writing**, **listening**, **reading** ve **speaking** testlerinin otomatik olarak değerlendirilmesini hedeflemektedir. Bu sistem:

- Öğrencilerin **writing** (yazılı sınav) cevaplarını, telefon kamerası aracılığıyla çekilen yazılı kağıtlardan ya da doğrudan sisteme girilen metinlerden otomatik olarak puanlayacaktır.
    
- **Listening**, **reading** ve **speaking** sınavları için ise, yapay zeka tarafından oluşturulmuş içerikler üzerinden değerlendirme yapılacaktır.
    
- Bu değerlendirme, öğretmenlerin belirlediği kriterlere dayalı olarak yapılacak ve daha hızlı geri bildirim sağlanacaktır.
    

---

## 3. Sistemin Temel Özellikleri ve İşleyişi

### 3.1 Writing Testi

- **Yazılı sınavlar**, öğrencilerin telefon kamerası aracılığıyla çekilen yazılı kağıtlardan veya doğrudan sisteme girilen metinlerden değerlendirilir.
    
- **Gemini 2.5 Flash** yapay zekası, öğrenci metnini analiz eder, gramer, dil bilgisi, kelime dağarcığı, cümle yapısı ve anlam bütünlüğü gibi unsurları değerlendirir.
    
- Öğrencinin yazdığı metin öğretmenin belirlediği kriterlere göre, **kelime seçimi**, **dil bilgisi doğruluğu**, **anlam bütünlüğü** ve **akıcılık** gibi özelliklere göre otomatik puanlanır.
    

### 3.2 Listening Testi

- Öğrencilere ait **dinleme sınavları** için, sistem tarafından **yapay zeka tabanlı içerikler** oluşturulur.
    
- Dinleme testleri, öğrenciye sesli metinler dinlettikten sonra, verilen cevaplar yapay zeka tarafından analiz edilir.
    
- **Gemini 2.5 Flash** yapay zekası, öğrencinin verdiği cevapları **anlam** ve **doğruluk** açısından değerlendirir.
    
- Öğrencinin doğru ve yanlış cevapları sayısal verilere dönüştürülerek puanlanır.
    

### 3.3 Reading Testi

- **Reading sınavları**, öğrencilere verilen metinlerin okunup analiz edilmesinden oluşur.
    
- Öğrencinin verdiği cevaplar, sistem tarafından **okuduğunu anlama**, **mantıklı çıkarımlar yapma** ve **detayları yakalama** gibi becerilere göre değerlendirilir.
    
- Yapay zeka, metin üzerindeki **ana fikir**, **detaylar**, **yargılar** ve **yanıt doğruluğu** gibi unsurları analiz eder.
    

### 3.4 Speaking Testi

- **Speaking sınavı**, öğrencilere sesli komutlar verilerek **Gemini 2.5 Flash** yapay zekası ile değerlendirilir.
    
- Öğrenciler, sistemden gelen sesli talimatlara göre sesli yanıt verir.
    
- Yapay zeka, **aksan**, **doğru telaffuz**, **akıcılık**, **gramer ve kelime kullanımı** gibi özelliklere dayanarak öğrenci konuşmasını değerlendirir.
    
- Sesli yanıtlar doğal dil işleme algoritmaları kullanılarak puanlanır.
    

---

## 4. Teknolojik Altyapı ve Kullanılan Araçlar

### 4.1 **Gemini 2.5 Flash Yapay Zeka Modeli**

Proje kapsamında kullanılan **Gemini 2.5 Flash** yapay zeka modeli, doğal dil işleme (NLP) ve makine öğrenimi alanında son derece güçlü bir platformdur. Bu model, dil becerilerini analiz etmek ve değerlendirmek için eğitilmiştir ve **writing**, **speaking**, **reading** ve **listening** testlerinin doğruluğunu artırmaktadır.

- **Writing Test**: Gramer, dil bilgisi, anlam bütünlüğü ve dil becerilerinin otomatik değerlendirilmesi için kullanılır.
    
- **Speaking Test**: Sesli yanıtların değerlendirilmesi ve öğrencinin telaffuzunun, kelime seçimlerinin ve dil becerilerinin analizi için kullanılır.
    

### 4.2 **Mobil Uygulama ve Web Platformu**

- **Mobil uygulama**: Öğrenciler ve öğretmenler için kolay erişim sağlamak amacıyla **Android** ve **iOS** platformları için geliştirilecektir.
    
- **Web platformu**: Sistemin web tabanlı erişim imkanı sunarak, hem öğretmenler hem de öğrenciler için kullanım kolaylığı sağlanacaktır.
    

### 4.3 **Yapay Zeka Tabanlı İçerik Üretimi**

**Listening ve Reading** testleri için, sistem **yapay zeka destekli içerik üretme** yeteneğine sahip olacaktır. Bu içerikler, öğrencilere yönelik seviyelerine ve ihtiyaçlarına göre özelleştirilmiş testler sunacaktır.

---

## 5. Sistemin İşleyiş Akışı

1. **Öğrenci Sisteme Giriş Yapacak**: Hem mobil uygulama hem de web platformu üzerinden giriş yapılabilir.
    
2. **Writing Testi İçin Metin Girilecek**: Öğrenciler ya da öğretmen, yazılı metinleri sisteme yükler veya telefon kameralarıyla yazılı kağıtları sisteme çeker.
    
3. **Listening ve Reading Testleri İçin İçerikler Oluşturulacak**: Sistem tarafından yapay zeka ile sesli içerikler üretilecek ve öğrenci bu içerikleri dinleyecek.
    
4. **Speaking Testi İçin Sesli Yanıtlar Alınacak**: Öğrenciler, sistemden gelen sesli komutlara yanıt vererek konuşma testine katılacaklar.
    
5. **Yapay Zeka Puanlama Yapacak**: **Gemini 2.5 Flash** yapay zekası, her dört test türü için öğrenci performansını analiz ederek anında puanlama yapacak.
    

---

## 6. Gelecek Adımlar

- **Veritabanı Geliştirmeleri**: Kullanıcı verilerinin güvenliği için daha gelişmiş şifreleme yöntemleri entegre edilecektir.
    
- **Yapay Zeka Modelinin İyileştirilmesi**: **Gemini 2.5 Flash** modelinin doğruluğu, kullanıcı geri bildirimleri ve yeni verilerle daha da geliştirilecektir.
    
- **Test Çeşitleri Eklenmesi**: Farklı dil seviyelerine göre özel testler eklenerek kullanıcı deneyimi zenginleştirilecektir.
    

---

## 7. Sonuç

**İngilizce Sınavlarını Otomatik Değerlendiren Yapay Zeka Sistemi**, öğretmenler ve öğrenciler için önemli bir araç olmayı hedeflemektedir. Yapay zeka tabanlı **otomatik puanlama** ile sınav değerlendirmeleri hızlandırılacak, öğrencilere anında geri bildirim sağlanacak ve eğitim sürecinde **daha etkili** bir değerlendirme yöntemi sunulacaktır. **Mobil uygulama** ve **web platformu** üzerinden ulaşılabilir olacak bu sistem, öğrencilerin dil becerilerini geliştirmelerine yardımcı olacak önemli bir adım teşkil etmektedir.