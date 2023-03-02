<h1> Mikroservice & Monolithic Services </h1>

<h2> Monolithic </h2>

- Monolitik uygulama, birden fazla modülü içeren tek bir kod tabanına sahiptir. Modüller, fonksiyonel veya teknik özelliklerine göre ayrılmıştır ve tek bir derleme sistemine sahiptir. Yani aslında tek bir projedir.

- Genellikle uygulamalar üç ana kısımdan oluşur. Bunlar <b>client</b>, <b>server</b> ve <b>database</b> kısımlarıdır. Monolit uygulamaları düşündüğümüzde; uygulamaya başlatma, durdurma ya da uygulamanın çökmesi durumunda tamamı bu durumdan etkilenir. Her güncellemede, ve değişiklikte de uygulamanın tümüne müdahale edilmelidir.

---

<h2> Microservice </h2>

- Mikroservislerde ise durum çok daha farklıdır. Mikroservis, tek işe odaklı bir uygulamanın işlevsel küçük bir parçasını ifade eder.

- Mikroservis yaklaşımı ölçeklenebilirlik, esneklik, çeviklik gibi özemli özellikler barındırır. Bu yüzden de birçok büyük firma monolitik yapılardan mikroservis mimarilerine geçiş yapmışlardır.

- Ayrıyeten mikroservis olarak tasarlanan bir servis, ihtiyaca bağlı olarak birden fazla uygulamada, projede tekrar kullanılabilir.

---

<h2> Monolitik Yapıların Güçlü ve Zayıf Yanları </h2>

<h3><b>Güçlü Yanları</b></h2>

- Kolay Deployment
  - Monolitik uygulamaların tek bir parça oluşundan dolayı deploy aşaması çok daha zahmetsizdir.
- Geliştirme Basitliği
  - Monolitik bir uygulamayı modüler bir biçimde yazmak, her bir modülü servis olarak yazmaktan çok daha kolaydır.

<h3><b>Zayıf Yanları</b></h3>

- Karmaşıklık
  - Monolitik yapı büyüdüğünde, kodlar anlaşılamayacak kadar karışık hale gelebilir. Uygulamada karmaşık kod yapısını yönetmek zor olacaktır.
- Değişiklik Yapma Zorluğu
  - Karmaşık bir uygulamaya dönüşeceğinden, değişiklik yapmak da oldukça zahmetli olucaktır. Herhangi bir kod değişikliği bütün sistemi etkileyebilir.
- Ölçeklenebilirlik Sorunu
  - En büyük sorunlardan birisidir, componentleri bağımsız olarak scale edemeyiz. Bu da istemediğimiz bir componente istemediğimiz kadar bir memory, CPU sağlamamızı gerektirir.
  - Bu sebeple de gereksiz componenlere gereksiz kaynaklar harcarız.

---

<h2> Microservice Yapılarının Güçlü ve Zayıf Yanları </h2>

<h3><b>Güçlü Yanları</b></h2>

- Bağımsız Componentler
  - Her bir servis bağımsız bir şekilde dağıtılabilir ve güncellenebilir, bu da daha fazla esneklik sağlar.
  - Mikroservisdeki bir hata sadece belirli bir hizmet üzerinde etkisi olacağı için tüm uygulamayı etkilemez.
  - Ayrıca, mikroservis uygulamalara yeni özellikler eklemek, monolitiğe göre daha kolaydır.
- Ölçeklenebilirlik
  - Her bir servis bağımsız olarak ölçeklendirilebilir. Bu nedenle tüm uygulamanın scale edilmesi gerekmez. Bu da maliyet açısından büyük bir kazanç sağlar. Bu yüzden de büyük uygulamalar mikroservis mimarisini benimserler
  - Bu konuya örnek vermek gerekirse; bir uygulamayı mikroservis ve monolitik olarak değerlendirelim. Diyelim ki 4 tane componentimiz var. 10GB memorymiz ve 12 CPU'muz var.
  - Monolitik yapıda her bir componente 2.5GB memory, 3 CPU dağılabilir. Fakat bazı componentimize 1GB, 1CPU yetebilecekken, bazı uygulamalarımıza 3GB memory az gelebilir, bu da büyük bir israf oluşturur.
  - Mikroservis yapıda ise componentler ayrı ayrı oldukları için kendi bünyelerinde ne kadar memory, ne kadar CPU gerekecekse o kadar ayırabiliriz.
- Teknoloji Çeşitliliği
  - Mesela Node.js'le geliştirilen bir mikroservis yanında, veriyi işlemek için python gibi farklı bir teknoloji kullanılabilir.
- Yeniden Kullanılabilirlik
  - Ufak değişikliklerle aynı componentleri farklı uygulamalarda da kullanabiliriz.

<h3><b>Zayıf Yanları</b></h2>

- Sistem Dağıtımı
  - Bir mikroservis mimarisi, birden fazla servis ve veritabanından oluşan karmaşık bir sistemdir, bu nedenle de tüm bağlantıların ele alınması gerekir.
- Yönetim ve İzlenilebilirliğin Zorluğu
  - Bir mikroservis uygulaması oluştururken birden fazla durumla ilgilenmeniz gerekecektir.

---

sen bunu servis olarak ayır, böylece birbirini etkilemesin, ama bu aslında aynı işi yapıyor.

- macro repo - micro service
