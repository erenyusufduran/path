# Erdis Projeleri

- EMT
- Kampanya
- Omni-Store
- Internal
- Kargo
- Pos
- Omni

## Omni-Channel

Omni channel kavramı parakende de karşılığı müşterinin tüm kanallardan ürüne, fırsata ve iletişime ulaşması demek. Müşteri istediği yerden sipariş verebilir veya istediği şekilde iade edebilir. Satın aldığı ürünü de istediği yerden teslim alabilir.

- İki faza bölündü. İlk faz Mayıs-Haziran'a kadar. İlk fazda stok yapısını yenilemek, ERP'den çıkartarak yeni bir yapı oluşturmak.
- Müşteri e-ticaretten sipariş verip mağazadan alabilecek duruma getirilmeye çalışılıyor.

### OmniStore (ErStore)

Mağazacılık için stok, fiyat sorgulama ve mağaza transferlerini yöneten uygulamadır.

Yeni nesil androin el terminalleri ile uyumlu ve aynı zamanda mağaza bilgisayarları için web destekli, veri yönetimini merkezi olarak yapabilen uygulamadır.

- Sevk işlemlerinin başlangıcı ve bitişi bu uygulamayla yapılması planlanıyor.

---

## POS Uygulaması

- POS ekibi tarafından yöneiliyor.
- Müşteri ürün satın alım, değişim ya da iade gibi işlemleri yapacağı zaman kasadaki çalışan tarafından işleme ait bilgiler POS uygulamasına aktarılıyor.
- Fiyat bilgisi gibi şeyler AXAP'tan Erdise, Erdisten'de POS'a aktarılıyor.
- erdis-pos
- erdis-pos-worker
- erdis-pos-service

---

## Kampanya

- Şu anda eski kampanya (1C) modülü kullanılıyor.
- 1C, Rus yazılım şirketi.
- Çeşitli dezavantajları var.
- Eski kodla yazılmış.
- letişim zorluğu var.
- Response süresi çok uzun. (1dk++)

### Yeni Kampanya Modülü

- Erdis tarafından geliştirildi.
- Henüz test aşamasında.
- Şu anda POS tarafı ile testleri sürüyor.
- Response süresi 50-70ms.
- Business logic'i fazla.
  - POT dediğimiz yapılar kampanyaların birbiriyle birleşip birleşmemesi durumuyla ilgili.

---

## Kargo

Ürünlerin kargolanması üzerine kurulması hedeflenen entegrasyon sistemimiz.

- Şu anda canlıda değil.
- Fillo firması ile testler sürüyor.
- Depodan mağazaya, mağazadan depoya.

### Fillo Entegrasyonu Servisler

- ShippingReceipt (Depoya ve Fillo'ya)
- ATF
- TrackingInfo (Kargo durumu bildirimi)
- Label (Etiket alma üzerine olan bir servis)
- Information (Kargo detay bilgileri)

---
