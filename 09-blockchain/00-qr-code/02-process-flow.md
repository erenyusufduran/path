AWS: https://us-east-1.console.aws.amazon.com/managedblockchain/home?region=us-east-1#firstRun

1. AX'da RBOSpecialGroupItems tablosu üzerinden PO kriterlerine göre ürünlerin karekod durumları periyodik olarak takip edilir.
2. PO verisi çözümlenir ve adet bilgisi ile bir custom tabloya yazılır.
   - Bu nokta aslında AX'ta JOIN edilmiş tabloları içeriyor ve bu şekilde QR'ı alınmamış olan PO'ları farklı bir kısma yani MongoDB'ye kayıt edebiliriz.

CUSTOM TABLE (MONGO)

```
{
    PO_NO: PO10100394
    EAN: 8683197776990
    MODEL_NO: CL1065789
    RENK: BLK
    Beden: L
    Gentle: WOMEN
    ITEM: COAT
    MENSEI: CHINA
    COMP: "SHELL: %100 POLYESTER/ LINING: %100 POLYESTER"
    DATE: 12.01.2023
    MODEL: "CL 1065789 BLACK W COA"
    TEMA: "COOL UNIFORM"
    Üretici: "SUMEC TEXTILE & LIGHT INDUSTRY CO., LTD."
    Sezon: AW23
    QR: false
}
```

3. Rusya'ya bu tabloyu REST API ile atarak, onların da bize geri dönüş yapmasını REST API ile isteriz.

- Buralar tabii ki bize kalan şeyler değil bizim için böyle olsa daha rahat olur gibi duruyor, fakat Rusya'nın isteğine göre bu yapıda çokça değişiklik olabilir. Bu kısıma kadar Rusya'ya olan başvuru tamamlandı ve ara tablo dediğimiz yapıyı mongoda tuttuk.

4. Sırada Rusya'dan dönecek olan GTIN ve QR kodlar var. Bunlar bize ulaştığında (REST API ile veya farklı ekiplerden vs.) bunları ara tablomudaki QR'ı true'ya çevirerek ve oradaki PO_NO'yu ve EAN'ı Blockchain'e çekerek, Blockchain'de depoluyoruz.

CUSTOM_TABLE

```
{
  PO_NO: PO10100394
  PO_ITEMS: [
    {
        GTIN:
        MATRIX_CODE:
        ...
    }]
}
```

BLOCKCHAIN

```
{
    PO_NO: PO10100394,
    ITEMS_COUNT: 4618,
        ??SENDED_TO_ETIKETCI: false
    PO_ITEMS: [{
      CL1065147_Q1.V1_GRE_AW23_S_PO10101160
      MODEL_KALITE_VERSIYON_RENK_SEZON_BEDEN_PO
      EAN: 8683197776990
      GTIN: 4680189516699
      COUNT: 1151,
            ??SENDED_TO_ETIKETCI: false
      EAN_LIST: [{
        ETIKET_FIRST_31: 01046801895166992155E12&S?(1;k5
      },
      {
        ETIKET_FIRST_31: 0104680189516699215NTYGJcsJd7Bw
      },
      {
        ETIKET_FIRST_31: 0104680189516699215vF5rYTC,B;Y8
      },
      {
        ETIKET_FIRST_31: 0104680189516699215pp4LiNxEKiMb
      }]
    }]
}
```

5. Etiketçi firmaya Blockchain'de oluşan yapıyı yine REST API kullanarak blockchainden gönderiyoruz.

6. Etiketçi firmaya gittiğine dair tuttuğumuz SENDED_TO_ETIKETCI'yi false'dan true'ya çekiyoruz.

---

- Blockchainde tutulacak datanın içerisinde PO_NO bulunuyor, yine de custom table dediğimiz tablodaki diğer dataları (sezon, beden vs.) tutmamız gerekiyor mu?

- Etiketçi firma node olarak kullanılabilir mi?

- Rusya'dan biz REST'le çekiyomuş gibi

- PO içinde barkod olanlar olmayanlar olcak, sendToAx sendToEtiketçi

  - ## Bir PO çektik, qr barkodu olanlar - qr durum kontrolü

- önce po yu çek sonra onu ayrıştır.
- eğer po'yu çekerken hallediyosan, po nun üzerindeki satırların içinden qr barkodu olmayanları alman lazım

---

bana kalırsa po yu alın , bi ara tablo oluşturun, onda qr barkodu olmayanları insert edin

--

1. PO ile Rusya'ya gidiliyor mu?

- Önceden oluşmuş barkodlarda yeni po çıkıldığında, yeni qr kodlar oluşuyor mu?
- Bir barkoda istinaden birden fazla QR kod nasıl oluşuyor?

---

qr barkodu olmayanlar rusyaya aktarıldı, şuan excelden axa geldi. qrlar oluştu.

qr ı oluştu mu oluşan qr ları dinle pos a gönder.

qr kodu oluşanları dinle, yolla.

rusyaya giden bir excel lazım.

---

- Rusya'ya datanın nasıl gideceğini henüz bilmiyoruz.
- Datamatrix nasıl değişiyor?

  - Her tekil ürün ayrı bir karekoda sahip.
  - Her karekod birbirinden farklı.
  - Rusya'dan sayaçla falan saydırarak 6990la olandan bana 100 tane üret diyor. bu 100 tanesini daha üretiyor gibi bir sistem var.

- Bütün PO için bir kere gönderiliyor, etiketçi firmaya
  - Karekod başvurusu yapılamıyosa, tek renk için de yapılabiliyor.
  - key olarak karekoda başvuru yaparken, PO MODEL RENK BEDEN'le başvuru olucak. Çünkü GTIN ona istinaden geliyor. GTIN geldiyse Rusya'ya gönderildi olarak varsayılır.
  - Bir PO'yu içindeki tüm bedenlerle yolla, birtakım bilgiler eksikse farklı şeyler düşünülebilir.
