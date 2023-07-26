# Colin's İş Akış Süreci

Colin's iş süreçlerimizi ER-AX adını verdiğimiz, özelleştirilmiş ERP sistemi ile gerçekleştiriyoruz.

## ERP Nedir?

ERP (Kurumsal kaynak planlama) bir organizasyondaki iş süreçlerinin görünümünü sağlar ve tüm departmanların verileri gerçek zamanlı olarak paylaşmasını sağlar.

- Çalışan bilgileri
- Müşteri bilgileri
- Ürün bilgileri

## ER-AX Nedir?

- Eroğlu ile Microsoft ERP (Dynamic AX)'ın birleşiminden ER-AX oluşmaktadır.
- Üretilen ürünler, barkodlar, fiyatlar, sevk değişiklikleri, finans, muhasebe, insan kaynakları gibi tüm süreçler burada gerçekleştiriliyor.
  > AX, IT içerisindeki herkesin anladığı ismidir, departman dışında ise 2009'da ER-AX, yeni versiyonlar için ise New ER-AX olarak yeni sistemi anlayabiliyoruz.
- Loft Rusya, Colin's Rusya, Ukrayna gibi farklı farklı özelleşmiş AX'lar var.

- Erdis'te biz ER-AX'tan verileri alıyoruz, ER-AX'ta datalar tutuluyor. Management microservice'imiz ile ilk adımda verileri alıyoruz. Başka bir yere data gönderimi yaparken ER-AX'tan bu veriyi alıyoruz.
- Sonrasında ise datanın iletimini 3. parti depoya gönderiyoruz.

- Ülke bazında ER-AX'lar var bir de other AX'lar var. Neden ayrım var?
  - AX bir paket program, ama customize edilebiliyor. Her şeyini kendimiz oluşturmuyoruz, bir altyapısı var.
  - Tablolara alanlar ekleyip, geliştirmeler yapıyoruz.
  - Her ülkenin farklı istekleri var. Rusya QR kodsuz ürün satmıyor gibi gibi...
  - Benzer sistemler varsa bir ülkede farklı AX'lar kullanıyoruz.
  - Farklı sistemler var ise bu sefer yeni geliştirme yapılması gerekiliyor. Bu yüzden de farklı farklı AX yapıları çıkartmak gerekebiliyor.

![](./assets/ax.png)

## SÜREÇ

- ### **Ürün Oluşum Süreci**

  - Colin's tasarım ekibi tarafından başlatılıyor.
  - Ürün kumaş, renk, kalıp gibi parametreler belirleniyor.
  - Ürün dijital olarak oluşuyor.
  - Ürün bilgileri ve barkodu ER-AX'a giriliyor.
    - **Purchase Order (Satın Alma Siparişi)**
      - Bir şirketin belirli bir mal veya hizmet için bir tedarikçiye resmi olarak verdiği bir sipariş belgesidir.
      - Belge, satın alma işleminin tamamlanması için gereken tüm bilgileri içerir.

- ### **Ürün fiziki olarak Nasıl Oluşur?**

  - Anlaşmalı olduğumuz 3rd party tedarikçiler tarafından oluşturuluyor.
  - Colin's tasarım ekibinden, fiziki olarak oluşturulacak olan ürün bilgileri alınıyor.
  - Bilgilere göre üretim gerçekleştiriliyor.
  - Üretildikten sonra Türkiye depoya geliyor.
    - Farklı ülkelerde - mesela Mısır gibi - üretim de yapılıyor, Mısır'da üretilip, Mısır'da satılan ürünler de var.
  - Ürünün fiyatı belirleniyor.

- ### **Ürün Dağıtımı Nasıl Planlanıyor?**

  - Colin's lojistik ekibi tarafından yönetiliyor.
  - Alokasyon ekibinden alınan bilgiler doğrultusunda ürünlerin trafiği sağlanıyor.
  - Depodan depoya, depodan mağazaya, mağazadan depoya vb.
  - **Türkiye Depodan Mağazaya:**
    - Mağazalardan depoya sipariş geçiliyor. Siparişe göre stok kontrolü yapılıp ürünler hazırlanıyor. Mağazaya ürünler gönderiliyor.
  - **Türkiye Depodan WMS Depolarına:**
    - Türkiye depodan diğer WMS depolarına alokasyon ekibi sipariş oluştuyor. Oluşturulan siparişten sonra 3rd party ülkelere ürün satılıyormuş gibi faturalandırılıyor ve gönderiliyor.
  - **Depolar Arası Sevk Hareketleri:**
    - WMS depoları kendi içerisinde ürün aktarımı yapabilirler. Örneğin WMS-EG tarafında WMS ana deposu var. E-ticaret için başka bir ambarı var ya da bölgelerine göre başka ambarları var. Deponun birinde eksik ürün oluştuğunda ana depodan sipariş geçilebiliyor.
      - Replanishment, depolardan mağazalara akış süreci var. Stok kontrolü için bazı algoritmalar var buna göre yeni siparişler oluşturuluyor. Sadece TR'de gerçekleştiriliyor, ama Mısır'da da şuanda denemeler yapılıyor.

- ### **Müşteri Alışverişi Nasıl Gerçekleştiriliyor?**
  - POS ekibi tarafından yönetiliyor.
  - Müşteri ürün satın alım, değişim veya iade gibi işlemleri yapacağı zaman kasadaki çalışan tarafından işleme ait bilgiler POS uygulamasına aktarılıyor.
  - Bazı kampanyalar da bu uygulamadan yapılıyor.
  - ErPOS'taki satışlar Erdis'e aktarılıyor, Erdis'ten de ER-AX'a işleniyor.
  - PowerBI ile analizler sonucunda fiyat belirleme, mağazalara göre hangi ürünlerin gönderileceği belirleniyor.
