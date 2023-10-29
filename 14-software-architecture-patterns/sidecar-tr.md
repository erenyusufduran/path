# Sidecar Pattern

Herhangi bir sistemin mimarisine baktığımızda her hizmetin kendine ait temel bir işlevi olduğunu görüyoruz. Temelde varlıklarının nedeni de budur. Örneğin, bir web sunucusunun temel işlevi, web içeriğini web'e sunmaktır. Ancak çoğu durumda her hizmetin temel işlevlerine ek olarak başka şeyleri de yapabilmesi gerekir. 

Bu ek özelliklerden bazılarını düşünmemiz gerekirse, monitör servislerine belli bilgileri göndermek, Log servisine hataları logları göndermek, authentication servisine ise kullanıcıları göndermek, almak diyebiliriz. Ayrıca diğer hizmetlerle iletişim kurması için registry'e de bağlanması gerekir.

Bunlar bir hizmete temel iş mantığının ötesinde yüklediğimiz işlevselliklerin sadece birkaç örneğidir. Artık bu işlevlerin çoğuna bir hizmettense, birden fazla hizmetin ihtiyaç duyduğunu fark ediyoruz. Dolayısıyla reusabilty'yi de düşünerek tüm bu işlevleri bir library'ye veya birden fazla library'e bağlayabiliriz. Tabii bu da tam bir çözüm olmaz çünkü microservice mimarisini kullanan birçok organizasyon, farklı programlar için farklı programlama dilleri kullanabilr. her bir programlama dili için farklı farklı library'ler geliştirmek hem ölçeklenebilir olmaz, hem de uyumsuz veya tutarsız olabilir. (Farklı dillerde, farklı çalışma mantıkları karşımıza çıkabilir.) 

Diğer bir yandan bu servislerin her birini aurı hizmetler olarak dağıtmakta sorunlu bir yaklaşım olurdu. Bu yüzden bu çözümün en iyi yolu Sidecar Pattern.

Sidecar pattern'i gerçek hayatta en güzel şekliyle anlatan analoji bir motorun yanına koyabileceğimiz, ikinci bir yolcu koltuğu olarak anlatabiliriz. Burada ekstra bir insan veya bagaj taşıyabiliriz, kapasitemizi genişlebiliriz. Bu modelde uygulamanın duyduğu ihtiyaca göre ek işlevselliği alıp, ana uygulamayla aynı sunucuda ayrı bir işlem veya ayrı bir container olarak çalıştırabiliriz.

Bu şekilde ana projeden bir izolasyon elde ederiz, tabii çalışacak olan sidecar container hala aynı server'ı paylaşmaktadır. Bu sebeple de aralarındaki iletişim çok hızlı ve güvenilir olur. Ayrıca birlikte çalıştıklarından her iksiinin de dosya sistemi, CPU ve memory'leri gibi aynı kaynaklara erişimleri vardır. Bu şekilde sidecar, ana uygulamanın CPU'sunu ve belleğini monitörleme, loglama gibi işlemleri yapabilir. Herhangibir ağ iletişimine ihtiyaç duymadan log dosyalarını okuyabilir, konfigurasyon dosyalarını güncelleyebilir. 

## Ambassador Pattern

Ambassador pattern özel bir sidecar container'dır. Temel bir proxy'e benzer olarak çalışır, ancak aynı bilgisayarda çalışarak tüm ağ iletişim mantığını uygulama katmanından çıkartmış oluruz. Bu şekilde core uygulamamızın kod kısmında, sadece logic yer alır, basite indirgenir.

Öte yandan ambassador, işleme, yeniden deneme, bağlantı kesme, kimlik doğrulama, yönlendirme ve farklı iletişim protokolleri gibi ağır yükleri kaldırabilir. Ek olarak, tüm hizmetlerden gelen tüm iletişim, aynı yerde bulunan Ambassador ile yapıldığından, bu modeli kullanarak ağ iletişimimizi de kolayca düzenleyebilir ve birden fazla hizmet arasında dağıtılmış bir izleme gerçekleştirebiliriz.

Mesela birden fazla uygulamaya içeren bir sorunu gidermemiz gerekiyosrsa, birden fazla ambassador'dan toplanan verilerden yararlanılabilir ve veri akışımızın nasıl göründüğüne dair net bir resim elde edebiliriz.

---

Sidecar Pattern'le birlikte ek işlevsellikleri her programlama dili için yeniden uygulamak zorunda kalmadan, uygulamalarla aynı container'da çalıştırılarak ayrı bir ek donanıma gerek kalmadan işlevselliği genişletmemiz için harika bir yoldur.

> Ana uygulama örneğinde, yardımcı araç ile çekirdek hizmet arasındaki izolasyondan faydalanıyoruz, ancak aynı kaynaklara erişim ve tüm süreç iletişiminin düşük ek yükü açısından bunları birbirine yakın çalıştırmanın faydalarından da yararlanıyoruz.

Ambassador Pattern'le birlikte ise yalnızca core uygulamayı genişletmekle kalmayarak, aynı zamanda ağ iletişimi ve güvenliğinin tüm karmaşıklığını Ambassador container'a aktarıyoruz.

## Erdis

Bizim hali hazırda Loglama servislerimiz bulunuyor, EMT içerisinde bir monitoring de yapıyoruz bu kısımda nasıl bir şey kullanıyoruz bilmiyorum. Loglama servislerini düşünecek olursam, şuanda çok fazla loglamamız yok, o yüzden Ambassador olarak ayırmak makul mu emin değilim. Daha çok OMNI tarafı geliyor aklıma, bu kısımda çok daha fazla CPU kullandığımız için bu tarafın loglarını, monitörlemesini bir başka containerda yaparak gelecekte ihtiyacımız olacak CPU seviyelerini daha net görebilirmişiz gibi düşündüm. 

Buna ek olarak da genel yapımızı düşününce typescript repolarıyla bu durum değişiyor, fakat şimdiye kadar 3'lü microservice yapıları kullanıyorduk. Bunları artık tek container'da yaparken iletişim katmanını ayırarak, her biri için bir ambassador container ayağa kaldırırsak, uygulamaların içindeki logicleri daha basite indirgeyerek, codebase'imizi daha logic ağırlıklı bir hale getirebiliriz, daha okunaklı bir şekle sokabilirmişiz gibi düşündüm.