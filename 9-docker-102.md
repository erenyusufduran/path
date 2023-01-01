<h1> DOCKER 102 </h2>

Batteries Included but Removable, yani biz bir şeyler koyuyoruz. Siz ister kullanın, ister farklı şeyler kullayın diyerek driver altyapısıyla Docker Plugin sistemini oluşturuyor.

- docker info yazdığımızda plugins kısmında pluginler olacak.

---

<h2> Docker Network Driver </h2>

Docker arka planda onlarca farklı servisten oluşması ve altyapısal olarak karmaşık olmasına rağmen kullanımda yıllardır alıştığımız ve bildiğimizin dışında bir sistem sunmaz.

<h3> Docker Network Drivers </h2>
     
        Bridge: Varsayılan olan driverdır. Adından da anlaşılacağı üzere bir köprü oluşturacak docker network yaratmak için kullanılacak olan driverdır. 
        Host: Bu network'e bağlı container'da network izolasyonu olmaz. Sanki o host üstünde çalışan bir process gibi host'un ağ kaynaklarını kullanır. Her sistemde host driver ile yaratılmış "Host" adında bir network bulunur.
        Macvlan: Bu driver ile oluşturulan network objeleri sayesinde containerlar fiziksel ağlara kendi mac adreslerine sahip birer fiziksel ağ adaptörüne sahipmişçesine bağlanabilirler.
        None: Ağ bağlantısı olmasını istemiyorsak, bu driverı kullanırız.
        Overlay: Ayrı hostlar üstündeki containerların aynı ağda çalışıyormuş gibi çalışması istendiği zaman Overlay networkler devreye girer.

Ağ altyapılarında bridge dediğimiz bir sistem var. Bu fiziksel de oluyor, yazılımsal da. Birden fazla ağdan tek, birleşik bir ağ yaratmaya yarıyor. Linux sistemlere bridge network dediğimiz yapılar kullanabiliyoruz.

Docker'da biz de networkler oluşturabiliriz. Peki bunu neden yapalım?

- İlk ve en öncelikli neden olarak birden fazla containerla çalışırken daha karmaşık networklere ihtiyaç duyabilirim. Web ve database containerı barındırıyorum, app1, app2 gibi farklı containerlarım da var. O zaman ben web ve database'i bridge_1, app1 ve app2'yi bridge_2'ya bağlayabilirim.

* Containerlar arası network izolasyonu sağlamak istersek ayrı bridge networkler yaratarak bunu sağlayabiliriz.

* Varsayılan dışında ip aralıkları tanımlanabilir.

        Aynı networkde olsalar da name'den değil 172.17.0.2'yi pingleyerek birbirleriyle iletişime geçebilirler.

* network create new_bridge / --driver
* docker network connect new_bridge new_container --> container bu networke de bağlanır. Container'lar iki ayrı network'e bağlanabilirler.

---

<h2>STDIN - STDOUT - STDERR</h2>

Standart Input - Output - Error

Native docker araçlarıyla dockerları izleyebiliyorduk. Bu yüzden bu konulara bakıyoruz.

<b>stdin</b> - Klavyeden veya farklı bir uygulamadan giriş içerebilen, uygulamanın giriş akışıdır.

<b>stdout</b> - Genellikle bir uygulamanın normal çıktısıdır.

<b>stderr</b> - Hata mesajı gönderilmek için kullanılan çıktıdır.

<h2> Docker Logs </h2>

- docker logs

- docker stats -> containerların ne kadar yer kapladığı, i/o'ları...

---

Container'lar istediği kadar memory kullanabilir. Biri hatalı bir şekilde fazla yer kaplarsa, diğer containerlarda sıkıntı çıkabilir.

Bu sıkıntıyı yaşamamak için sistem kaynaklarını containerlar için sınırlı hale getirmeliyiz.

--memory = limit
--memory-swap=200m
--cpus="1.5" -> 1.5 tanesini kullanabilir.
--cpuset-cpus="0,3" CPU 0 ve CPU 3'ü kullan.

CPU'ya sınır koyarken core sayısına göre bakıyoruz.

komutları ile bazı sınırlamalar getirebiliriz.

---

<h2> Environment Variables </h2>

Ortam değişkenleri, os ortaya çıktığından beri vardır. Değişkenler adlandırdığımız değer verebildiğimiz şeylerdir.

Ortam değişkeni ise sistem bazında geçerli olan ve her yerden çağırılabilen değişkenlerdir.

Geçici dosyaları $TEMP gibi env'lere yazabiliiz.

- Peki $TEMP folder nerede bulunuyor?

Her sistemde farklı farklı TEMP klasörü aramamak için uygulamaya windows'da TEMP adında bir env bulunuyor, sen buna bakarak yerini bul diyoruz.

<h2> Docker Environment Variables </h2>

Container ortamlarında image yaratılırken, ya da container yaratılırken tanımlanabilen değerlerdir.

container oluştururken

        --env VAR1=deneme

gibi bir şekilde container içinde env var oluşturabiliriz.

direkt olarak hazır env var'ları alıcaksak --env TEMP şeklinde yazabiliriz.

- Normalde tek tek tanımlamak çok zor olacağı için --env-file ./env.list gibi bir şekilde direkt dosya olarak env variable'ları bir dosyadan oluşturabiliriz.

Hangi veritabanına bağlanabileceğimizi, env'den alırsak bu şekilde istediğimiz env ile containerı çağırabiliriz.
