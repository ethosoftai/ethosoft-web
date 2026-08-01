**Akıllı Navigasyon ve Enerji Verimliliği Uygulaması**

## 1. Giriş

Enerji verimliliği, günümüzde sürdürülebilir kalkınma hedeflerine ulaşmak için önemli bir öncelik haline gelmiştir. **Ulaşım sektörü**, bu bağlamda enerji tüketiminin önemli bir kısmını oluşturur ve yakıt verimliliğinin artırılması çevreyi koruma açısından kritik bir rol oynamaktadır. Bu proje, **trafik yoğunluğu** ve **yol koşulları** göz önünde bulundurularak enerji verimliliğini artıran bir **rota hesaplama sistemi** geliştirmeyi hedeflemektedir.

---

## 2. Amaç

Projenin amacı, ulaşım sektöründe **enerji verimliliğini artırmak** ve **yakıt tüketimini minimize etmek** için akıllı bir rota hesaplama sistemi sunmaktır. Bu sistem, trafik yoğunluğu, yol koşulları ve araç özelliklerini analiz ederek, en düşük yakıt tüketimiyle en verimli rotaları seçmeyi hedeflemektedir.

---

## 3. Yöntem

### 3.1 Veri Toplama ve Entegrasyon

Sistem, doğru rota hesaplaması yapabilmek için çeşitli kaynaklardan **veri toplar** ve **entegrasyon sağlar**:

- **Harita ve Yol Verisi**: OpenStreetMap (OSM), Google Maps API, Mapbox API gibi kaynaklardan alınan yol ağı verisi, hız limitleri, yol tipleri ve kavşaklar gibi bilgileri içerir.
    
- **Trafik Verisi**: Gerçek zamanlı trafik verileri, Google Maps API ve Mapbox API'lerinden alınır. Bu veriler, trafik yoğunluğu, yol kapalıları ve hava durumu gibi bilgileri içerir.
    
- **Araç Yakıt Tüketimi Parametreleri**: Araçların yakıt tüketimini etkileyen faktörler (hız, yol tipi, eğim vb.) toplanarak veritabanında depolanır.
    

### 3.2 Algoritma Geliştirme

Proje, aşağıdaki algoritmalarla rota hesaplama yapmaktadır:

- __A_ Algoritması_*: En kısa yolu bulmak için yaygın olarak kullanılan bu algoritma, yolculuk süresi ve yakıt tüketimini dengeleyerek en verimli rotayı seçer .
    
- **Dijkstra Algoritması**: Bu algoritma, yolculuk sırasında trafik verilerini dikkate alarak en kısa ve yakıt verimli rotayı önerir .
    
- **Makine Öğrenmesi Modelleri (Gaussian Mixture Regression)**: Gerçek zamanlı trafik verilerini ve yol parametrelerini kullanarak yakıt tüketimini daha doğru bir şekilde tahmin eder .
    

### 3.3 Flutter Entegrasyonu

Proje, **Flutter** kullanılarak mobil uygulama olarak geliştirilmiştir. Uygulama, hem **Android** hem de **iOS** platformlarında çalışacak şekilde optimize edilmiştir. Flutter, Google Maps API ve Mapbox API gibi harita ve trafik veri sağlayıcılarıyla entegre olmuştur.

---

## 4. Simülasyon ve Test

Projenin son aşamasında, geliştirilmiş rota hesaplama algoritmalarının gerçek dünya verileri ile test edilmesi yapılmıştır. Testlerde kullanılan adımlar:

1. **Gerçek Zamanlı Trafik Verisi ile Test**: Google Maps API ve Mapbox API üzerinden sağlanan trafik verileri ile algoritmaların doğruluğu test edilmiştir.
    
2. **Farklı Senaryoların Değerlendirilmesi**: Trafik yoğunluğu ve farklı güzergahlar kullanılarak rota optimizasyonu test edilmiştir.
    
3. **Sonuçların Değerlendirilmesi**: Test sonuçları, önerilen rotaların yakıt tüketimini nasıl optimize ettiğini görselleştirerek analiz edilmiştir.
    

---

## 5. Proje İş-Zaman Çizelgesi

|**İş Tanımı**|**Ekim**|**Kasım**|**Aralık**|
|---|---|---|---|
|**Veri Toplama**|X|||
|**Algoritma Analizi**|X|X||
|**Programlama ve Entegrasyon**||X|X|
|**Proje Raporu Yazımı**||X|X|

---

## 6. Bulgular

Yapılan testler sonucunda, geliştirilen sistemin geleneksel navigasyon uygulamalarına göre daha düşük yakıt tüketimi sağladığı gözlemlenmiştir. Ayrıca, trafik yoğunluğu arttıkça, sistemin optimal rotayı seçmede daha başarılı olduğu bulunmuştur. Grafikler, yakıt tüketimi ve süre arasındaki ilişkiyi açıkça gözler önüne sermektedir.

---

## 7. Sonuç ve Tartışma

**Trafik Duyarlı Rota Hesaplama Sistemi**, enerji verimliliğini artırmada önemli bir rol oynamaktadır. Geliştirilen algoritmalar, sadece yol mesafesini değil, aynı zamanda trafik yoğunluğunu ve yol koşullarını da göz önünde bulundurarak yakıt tüketimini optimize etmektedir. Şehir içi ulaşımda bu tür sistemlerin kullanımı, enerji tasarrufu sağlayarak çevre dostu ulaşım çözümleri sunacaktır.

### 7.1 Öneriler

- Geliştirilen sistemin, farklı şehirlerde **pilot uygulamalar** ile test edilmesi önerilmektedir.
    
- **Makine öğrenmesi tekniklerinin** trafik tahmini ve yakıt verimliliği hesaplamalarında daha fazla optimize edilmesi gerekmektedir.
    

---

## 8. Kaynaklar

[1] Huang, X., & Peng, H. (2018). Eco-Routing based on a Data Driven Fuel Consumption Model. arXiv [Stat.AP].  
[2] Yan, Y. (04 2023). Research on the A Star Algorithm for Finding Shortest Path. Highlights in Science, Engineering and Technology, 46, 154–161.  
[3] Javaid, A. (01 2013). Understanding Dijkstra Algorithm. SSRN Electronic Journal.  
[4] Lee, J., Schifano, E. D., & Wang, H. (2022). Sampling-based Gaussian Mixture Regression for Big Data. Journal of Data Science, 21(1), 158-172.  
[5] Moon, T. K. (1996). The expectation-maximization algorithm. IEEE Signal Processing Magazine, 13(6), 47–60.

---

Bu rapor, proje sürecinin ayrıntılı bir özetini ve kullanılan yöntemleri içermektedir. İlerleyen aşamalarda testler ve pilot uygulamalarla daha fazla geliştirme yapılacaktır.