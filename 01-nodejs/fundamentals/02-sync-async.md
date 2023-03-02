# SENKRON VE ASENKRON

Senkron ve Asenkron programlama, yazılım geliştirme teknikleridir. İşlemlerin nasıl yürütüleceğini belirlerler.

**Senkron Programlama** birden fazla görevin sıralı, birbirlerini bekleyen bir şekilde yürütüldüğü programlama türüdür. Bu tür programlarda **blocking** yer alır. Yani bir sonraki sıraya geçmeden önce, bir önceki görevin tamamlanması beklenir, bu sırada da bir sonraki sıradaki görev **engellenir**. Bir bankadaki kuyruk gibi; para yatırmak için sıranızın gelmesini beklemeniz gerekir.

Diğer bir yandan **Asenkron Programlama**, aynı anda birden fazla görevin birbirinden bağımsız olarak yürütebildiği bir programlama türüdür. Aynı anda birden fazla müşteriye hizmet verebilen bir bankada çalışan gişe gibi. Asenkron Programlamada, program bir sonraki göreve geçmeden önce **başka bir görevin tamamlanmasını beklemez**. Bunun yerine ilk görevin tamamlanmasını beklerken **diğer görevleri yürütmeye devam edebilir**.

**Asenkron Programlama**, büyük miktarda veriyi hızlı ve verimli bir şekilde işlemesi gereken trafiği yüksek olan uygulamaların sayısının artması sebebiyle giderek daha popüler olmuştur. Programın aynı anda birden fazla görevi yürütmesine izin vererek bir **görevi tamamlamak için gereken süreyi azaltıyor**.

**Asenkron Programlama**nın bir diğer avantajı ise **non-blocking** çalışmasıdır. Blocking, bir programın önceki görevin bitmesini beklediği sırada, sonraki görevin engellenmesine verilen addır. Bu, programın donmasına ve yanıt vermemesine neden olarak kötü bir kullanıcı deneyimine neden olabilir. Asenkron programlamada program, bir görevin tamamlanmasını beklerken diğer görevi de execute edebilir, bu sebeple de **blocking'i önler** ve kullanıcı deneyimini geliştirir.

**Genel olarak**, asenkron programlama, **performans** ve **non-blocking** olmak üzere bazı avantajlar sağlar. Büyük miktarda veriyi hızlı ve verimli bir şekilde işlemesi gereken yüksek trafikli uygulamalar oluştururken göz önünde bulundurulması gerekilen önemli bir tekniktir.

## Hangi Programlama Dilleri Hangi Yapıyı Kullanır?

Hangi programlama dillerinin asenkron, hangilerinin senkron programlama kullandığı konusunda herkese uyan tek bir yanıt yoktur. Ancak bazı genel gözlemler olabilir. Bunlar;

1. Senkron Programlama genellikle C++, Java gibi OOP yapılı dillerde kullanılır. Bu programlama dilleri I/O gibi yaygın işlemler için **blocking API'ları sağlayarak** senkron programlam uygulanmasını kolaylaştırırlar.
2. Asenkron Programlama genellikle JavaScript, Python gibi **event-driven** dillerde kullanılır. Bu programlama dilleri, non-blocking I/O fikri etrafında oluşturulmuştur ve genellikle ağ istekleri gibi yaygın işlemler için senkron yapılar sağlarlar.
3. C# ve Swift gibi bazı programlama dilleri ise hem senkron hem asenkron yapıda olarak, geliştiricilerin kendi kullanım durumlarına en uygun yaklaşımı seçmelerine olanak tanır.

Sonuç olarak senkron ve asenkron programlama arasındaki seçim, uygulamanın özel gereksinimlerine ve performans, ölçeklenebilirlik ve kod karmaşıklığı arasındaki seçime bağlı olacaktır.

## JavaScript'teki Yapı

JavaScript single-thread ve asenkron yapıda çalışan bir programlama dilidir. Kısaca single-thread execution yaptığı için execute edilen event ve callbackleri sıraya sokarak hepsini tek bir thread ile işler. Bu sıraya queue (kuyruk) deriz. Thread'in her defasında queue'daki ilk event'i işleyerek yeni bir event almasına da event loop deriz.

JavaScript'in en önemli özelliklerinden biri, **non-blocking** yapısıdır. Bu, JavaScript'in asenkron bir işlemin tamamlanmasını beklerken, tarayıcıyı veya programı dondurmadan kod çalıştırabileceği anlamına gelir. Bu, JavaScript çalışmaya devam ederken arka planda kullanıcı girişi ve ağ istekleri gibi olayları işlemesine izin veren event loop ile sağlanır.

- Örneğin, JavaScript'te asenkron programlama için yaygın olan bir durum şöyledir; bir sunucuya API isteği yaparsınız. API isteği asenkron olarak yapılır ve programın sunucuya yanıt vermesini beklerken yürütmeye devam etmesine izin verir. Sunucuya yanıt verdiğinde, program bir geri arama veya söz verme yoluyla bilgilendilir ve program daha sonra yanıtı işleyebilir.

Sonuç olarak, JavaScript'te asenkron programlama, yüksek trafikli uygulamaları ve büyük miktarda verinin olduğu uygulamaları daha verimli kılar. İster **callback**, ister **promise** kullanın, asenkron programlama kodun engellenmeden yürütülmesine ve geliştirilmiş performansına olanak tanır.
