**Makine Öğrenmesi ve Biyoinformatik Yöntemlerle Genetik Tanı**

## 1. Giriş

**MODY2**, glukokinaz (GCK) genindeki mutasyonlar nedeniyle gelişen kalıtsal bir diyabet türüdür. Genellikle **hafif hiperglisemi** ile seyreden bu hastalık, klinik olarak çoğu zaman **tip 1** veya **tip 2** diyabetle karıştırılmaktadır. Bu durum, doğru tanının gecikmesine ve gereksiz tedavi uygulamalarına yol açmaktadır. MODY2 hastalığının tanısının zor olmasının temel nedenlerinden biri, genetik belirti ve semptomların oldukça hafif olabilmesidir.

Bu proje, **GCK genine ait cDNA dizilimlerinden** yararlanarak, MODY2 hastalığını **yapay zeka** destekli biyoinformatik yöntemlerle **otomatik sınıflandırma** yapmayı amaçlamaktadır. Yapay zeka tabanlı bir model geliştirilerek, **patojenik** ve **iyi huylu** mutasyonların ayırt edilmesi hedeflenmiştir. Proje, mevcut tanı yöntemlerinin sınırlamalarını aşarak, daha hızlı ve doğru bir tanı koyma süreci sunmayı amaçlamaktadır.

---

## 2. Amaç

Bu projenin amacı, **GCK genindeki mutasyonları** biyoinformatik ve yapay zeka tabanlı **sınıflandırma teknikleriyle** analiz ederek, **MODY2** hastalığının tanısında doğru ve hızlı sonuçlar elde etmektir. Proje kapsamındaki temel hedefler şunlardır:

- Genetik dizilim verilerinin biyoinformatik yöntemlerle işlenmesi.
    
- Veri dengesizliğinin giderilmesi için uygun tekniklerin kullanılması.
    
- **Makine öğrenmesi** tabanlı bir model geliştirilmesi ve modelin doğruluk oranının artırılması.
    
- Elde edilen sonuçların klinik tanıya yardımcı olabilecek doğrulukta olması.
    

Bu çalışma, genetik hastalıkların tanısında **yapay zeka** kullanımını yaygınlaştırarak **MODY2 tanısını hızlı ve düşük maliyetle** yapmayı hedeflemektedir.

---

## 3. Yöntem

### 3.1 Veri Toplama

Proje için gerekli olan **GCK genindeki mutasyon verileri**, **ClinVar** ve **LOVD** (Leiden Open Variation Database) veritabanlarından toplanmıştır. Bu veritabanları, genetik varyantların patojenikliği ve iyi huylu olup olmadığı konusunda bilgi sunmaktadır. Toplanan verilerde toplamda **317 patojenik** ve **39 iyi huylu** mutasyon bulunmuştur.

### 3.2 Veri Ön İşleme

Toplanan genetik dizilimler, biyoinformatik analizlerde kullanılmak üzere **sayısal verilere dönüştürülmeden önce** temizleme ve standardizasyon süreçlerinden geçirilmiştir. Bu adımda:

- Dizilerdeki olası boşluklar ve format uyumsuzlukları giderilmiş,
    
- Patojenik ve iyi huylu etiketleri veritabanı açıklamalarına göre doğrulanmıştır.
    

Bu işlemlerle verilerin analizlere uygun hale getirilmesi sağlanmıştır.

### 3.3 Özellik Çıkarımı

Genetik dizilimler **3-mer (trinükleotit)** yöntemiyle sayısallaştırılmıştır. Bu yöntem, DNA dizilerindeki nükleotit örüntülerini sayısal verilere dönüştürerek, sınıflandırma algoritmalarının daha esnek çalışmasına olanak tanır. Her dizilim üçlü nükleotit parçalarına ayrılır ve bu parçalar üzerinden **k-mer frekans vektörleri** oluşturulur.

### 3.4 Veri Dengesizliği ve Test Seti

Veri kümesinde **iyi huylu (benign)** mutasyonların sayısının az olması nedeniyle belirgin bir **sınıf dengesizliği** mevcuttur. Bu sorunu gidermek amacıyla **SMOTE** (Synthetic Minority Over-sampling Technique) yöntemi kullanılmıştır. SMOTE tekniği ile iyi huylu mutasyonların sayısı artırılmış ve dengesiz veri kümesi düzeltilmiştir. Test kümesi ise, **20 patojenik** ve **20 benign** örnekle ayrılmıştır.

### 3.5 Modelleme ve Performans Değerlendirme

**Makine öğrenmesi** yöntemleri kullanılarak **Voting Classifier** modeli geliştirilmiştir. Bu modelde, aşağıdaki algoritmalar kullanılmıştır:

- **XGBoost**
    
- **LightGBM**
    
- **Random Forest**
    
- **K-Nearest Neighbors (KNN)**
    
- **Lojistik Regresyon**
    
- **Gradient Boosting**
    
- **CatBoost**
    
- **Destek Vektör Makineleri (SVM)**
    

Modelin performansı, **doğruluk**, **kesinlik**, **duyarlılık** (sensitivity), **özgüllük** (specificity), **F1 skoru** ve **ROC AUC** gibi metriklerle değerlendirilmiştir. En iyi performans, sekiz farklı sınıflandırıcının bir araya getirildiği **Voting Classifier** modelinde elde edilmiştir.

---

## 4. Bulgular

Çalışma sonucunda elde edilen temel bulgular şunlardır:

- **3-mer temsili**, diğer temsillere (4-mer ve 5-mer) kıyasla daha iyi ve daha kararlı sonuçlar vermiştir.
    
- Model, **patojenik** ve **iyi huylu** mutasyonları %78,35 doğruluk oranı ile ayırt edebilmiştir.
    
- En yüksek başarı, **ROC AUC** değerinde 0.7987 ve **PR AUC** değerinde 0.8313 olarak elde edilmiştir.
    
- **SMOTE** ile sınıf dengesizliği giderildikten sonra modelin **genelleme gücü** önemli ölçüde artmıştır.
    

---

## 5. Sonuç ve Tartışma

Bu projede, **MODY2 hastalığının** genetik mutasyonları üzerine geliştirilmiş bir yapay zeka tabanlı sınıflandırma modeli başarıyla uygulanmıştır. Yapılan analizler, **3-mer temsili** kullanılarak, **patojenik** ve **iyi huylu** mutasyonların doğru bir şekilde sınıflandırılabileceğini göstermiştir. Modelin **doğruluk oranı** ve **AUC değerleri** klinik kullanım için yeterli doğrulukta olup, **genetik hastalıkların tanısında yapay zekâ** uygulamalarının etkili bir çözüm sunduğu kanıtlanmıştır.

Model, MODY2 hastalığının hızlı ve doğru tanısını sağlamak için önemli bir adım teşkil etmektedir ve klinik kullanımda genetik tanıyı hızlandırmak için kullanılabilir.

---

## 6. Öneriler

- **Geniş Veri Setleri Kullanımı**: Çalışmada kullanılan 356 örneklik veri seti, modelin daha geniş veri kümeleri ile eğitilmesi gerektiğini göstermektedir. Farklı popülasyonlardan elde edilen verilerle modelin doğruluğu artırılabilir.
    
- **Diğer MODY Genleri Üzerine Çalışmalar**: Bu yaklaşım, diğer **MODY genleri** için de uygulanabilir. Özellikle **HNF1A**, **HNF4A**, ve **HNF1B** gibi genlerdeki varyantların sınıflandırılması için benzer bir modelleme yapılabilir.
    
- **Model Açıklanabilirliğinin Artırılması**: **SHAP** gibi açıklanabilirlik yöntemlerinin kullanılması, modelin **neden** belirli mutasyonları patojenik olarak sınıflandırdığını açıklığa kavuşturabilir.
    
- **Klinik İş Akışlarına Entegrasyon**: Bu modelin klinik kullanıma entegre edilmesi, **karar destek sistemleri** ile birlikte çalışabilir ve **genetik testler** için daha hızlı sonuçlar sunulabilir.