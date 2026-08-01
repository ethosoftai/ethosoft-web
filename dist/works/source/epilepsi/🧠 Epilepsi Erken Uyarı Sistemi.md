**Yapay Zekâ Destekli Giyilebilir Nöbet Tahmin Platformu**

## 1. Giriş

Epilepsi, hem ülkemizde hem de dünyada yaygın şekilde görülen nörolojik bir hastalıktır. Türkiye’de yaklaşık **1 milyon** epilepsi hastası bulunduğu tahmin edilmektedir. Özellikle çocukluk çağında nöbet sıklığı günde **10’un üzerine** çıkabilmektedir.

Mevcut takip yöntemleri nöbeti _gerçekleşmeden önce_ öngöremediği için, hastaların yaşam kalitesi ciddi şekilde düşmektedir. Bu ihtiyaca cevap olarak geliştirilen **Epilepsi Erken Uyarı Sistemi**, nöbeti gerçekleşmeden **2–5 dakika önce** tahmin edebilen yapay zekâ tabanlı bir erken uyarı teknolojisidir.

---

## 2. Sistem Bileşenleri

### 2.1 Giyilebilir EEG Kafa Bandı

- Kafa bandı üzerinde **toplam 8 elektrot** bulunmaktadır.
    
- Elektrotlar gerçek zamanlı **EEG sinyallerini** toplar.
    
- Sinyaller, elektrotlara bağlı **Cyton (OpenBCI) çipi** üzerinden dijitalleştirilir.
![[Pasted image 20251202124753.png]]


### 2.2 Donanım Veri Akışı

1. **EEG sinyali** elektrotlar tarafından toplanır.
    
2. Sinyaller **Cyton çipi** aracılığıyla USB dongle üzerinden iletilir.
    
3. Dongle, veriyi **Raspberry Pi** cihazına aktarır.
    
4. Raspberry Pi üzerinde bulunan yapay zekâ modeli EEG verisini işler.
    
5. Çıktı bilgi paketi **Flutter mobil uygulamasına** gönderilir.
    

---

## 3. Yapay Zekâ Tabanlı Nöbet Tahmin Modeli

### 3.1 Veri İşleme

- EEG sinyalleri **5 saniyelik sekanslar** halinde işlenir.
    
- Bu sekanslar her **5 dakikada bir** modele gönderilir.
    
- İşleme süresi, kullanılan mikrokontrolcünün işlem kapasitesine göre değişebilir.
    

### 3.2 Model Özellikleri

- 8 kanallı EEG verisi için optimize edilmiştir.
    
- Yüksek frekanslı ve düşük frekanslı bileşenleri ayrı değerlendirir.
    
- Nöbetten önceki değişimleri 2–5 dakikalık pencerede algılar.
    
- Raspberry Pi üzerinde çalışabilecek şekilde **edge AI** optimizasyonu yapılmıştır.
    

---

## 4. Mobil Uygulama (Flutter)

### 4.1 Temel Fonksiyonlar

- **Gerçek zamanlı durum takibi**
    
- **İlaç kullanım takibi**
    
- Kullanıcının günlük EEG risk seviyesinin görüntülenmesi
    
- Nöbet anında **otomatik SMS gönderimi** (konum + durum bilgisi)
    

### 4.2 Acil Durum Modülü

Nöbet tespiti gerçekleştiğinde sistem otomatik olarak:

- Kullanıcının **konumunu** alır
    
- Kullanıcıya yakın kişilere **SMS bildirimi** gönderir
    
- Uygulama üzerinde acil durum ekranını aktif hale getirir
    

---

## 5. Sistem Çalışma Akış Diyagramı

```
[EEG Elektrotları]
        ↓
[Cyton EEG Çipi]
        ↓ USB Dongle
[Raspberry Pi - AI Model]
        ↓ Wi-Fi/Bluetooth
[Flutter Mobil Uygulama]
        ↓
[Acil Durum Bildirim Sistemi]
```

---

## 6. Kullanım Senaryosu

1. Kullanıcı EEG kafa bandını takar.
    
2. Sistem belirli aralıklarla veriyi toplar ve Raspberry Pi'a gönderir.
    
3. Yapay zekâ modeli EEG paternlerini analiz eder.
    
4. Olası nöbet tespit edilirse:
    
    - Mobil uygulama kullanıcıyı uyarır.
        
    - Yakınlara otomatik SMS gider.
        
    - Kullanıcı ilaçlarını ve durumunu takip edebilir.
        

---

## 7. Görsel

> **Not:** Aşağıdaki görsel placeholder’dır. Raporu üretirken buraya gerçek görsel eklenecek.

```
![Epilepsi Erken Uyarı Sistemi Prototip Görseli](path/to/image.png)
```

---

## 8. Sonuç

Epilepsi Erken Uyarı Sistemi, nöbetleri gerçekleşmeden **dakikalar önce tahmin ederek** epilepsi hastalarının yaşam kalitesini artırmayı hedefleyen yenilikçi bir sağlık teknolojisidir.

Giyilebilir EEG sensörleri, edge AI mimarisi ve mobil uygulama entegrasyonu ile sistem, hem kullanıcılar hem de sağlık profesyonelleri için yeni bir güvenlik katmanı sağlamaktadır.

---

Hazırsanız bir sonraki raporu da aynı şekilde düzenleyebilirim.