# EMT'de Yapılması Gerekenler

## Genel Sorunlar

- **Yavaş**,
  - Next kullanılmış, fakat react yazılmış.
  - Fetch'ler client'tan yapılıyor.
  - Gereksiz package kullanımları var.
  - İlk açılışta tek bundle dosyası kullanılıyor.
  - Kullanılmayan, sadece template içinde kullanılan boş sayfalar var. Bunlara ek sistem içerisinde de kullanılmayan, ama gözüken yerler bulunuyor.
  - Aggregate fonksiyonları backendde bizi yavaşlatıyor.
  - Pagination uygulanmıyor, Table dataları 100'lü çekiliyor.
  - Sürekli değişen değerler useEffect ile ekrana sürekli renderda bulunuyor.
- **Dosya yapısı çok karışık**.
  - Table Container için tek bir component tüm yükü üstleniyor, bu yüzden 780 satır kod içeriyor.
  - Context içinde Redux benzeri bir yapı kullanılıyor, burası da bu şekilden dolayı karışıyor.
- **Inspect yaptığımızda çok fazla hata ile karşılaşıyoruz**.
  - Local Storage içerisinde şifre gözüküyor

## Çözümler

- **Yavaşlığının çözümü için**:
  - Yapılması gereken şey bundle'ların ayırılması ve sayfaların açıldıkça render edilmesi.
  - Fetch'leri Client'tan yapmayıp next13 kullanarak SSR ile yapmak.
    - Tabi burada vite gibi daha hafif olduğu için yüklenmesi daha kolay olacak package'lar da önerildi.
    - Next'te bundle'ları ayırabiliyor muyuz bilgi olmadığı için, reactla yazarak bundle'ları ayırmak da önerildi.
  - Backend'de bulunan aggregate fonksiyonlarının revize edilmesi.
  - Table'da pagination uygulanmıyor, sürekli 100'erli data gönderiyor. Bunun yerine 20'li 50'li datalar alırsak ve buranın ayarlanabilmesini sağlarsak daha güzel bir çözüm olur.
  - Memory Leak bulunuyor, useEffect kullanımlarında sürekli render olan yapılar var. Bunlar çözülmeli.
- **Dosya boyutlarını küçültmek için yapılması gerekenlen**:
  - Gereksiz package kullanımlarından kurtulmak. Sadece hızlı olan package'ları kullanmak.
  - Bizim yazdığımız servislerde kullanılmayan alanlar var. Documentation kısmındaki bazı yerler ve Track Log'u kullanmıyoruz.
  - Buna ek olarak bir de template içeriği olarak chat, messages gibi sayfalar var. Bunlara hiç gerek yok.
- **Düzenli Kod için**:
  - TableContainer adındaki component'i biraz da olsa bölmek lazım
    - Button'lar için ayrı componentler yaratılabilir.
    - Kullanılmayan alanlar bulunuyor. Import, Resend gibi alanlar. Bunlar kullanılmayacaklarsa çıkartılmalılar.
    - Table paketi antdesign'ın yerine farklı bir package ile yapılıyor. antdesign'la yapılabilir.
  - Klasör yapısını değiştirmek gerekiyor.
  - Context yerine ReduxToolkit, ReduxQuery gibi çözümlere başvurulabilir.
- **Yetkilendirme**:
  - Herkesin her yeri görmesi gerekmiyor, analistler çalışan servisleri görmese de olabilir. (Görse de kontrol etmesine gerek yok)
  - Kullanıcılar pendinleri görebilirler, fakat Error Log gibi kısımları görmelerine gerek yok.
