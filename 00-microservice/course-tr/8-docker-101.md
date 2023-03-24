<h1> DOCKER 101 </h1>

Sisteme Docker yüklendiğinde bir docker CLI ve bir docker deamon kuruluyor. Bu ikili rest API üzerinden konuşuyorlar.

1. CLI bize arayüz sunar.
2. Deamon ise esas işi yapan programdır. Container yaratmamızı sağlar.

- docker version
- docker container run / docker run

- docker image

> docker container run -> docker create ve docker start'ı birleştirir.

<hr>

<h2> Container Temelleri - 1</h2>

- Localde image bulunabiliyorsa, localdeki image'e ulaşıyor. Eğer localde image yoksa hub'daki image'i buluyor. Onu run ediyor.

        - Her container imajında, o imajdan bir container yarattığımız zaman varsayılan olarak çalışması için ayarlanmış bir uygulama vardır.

        - Bu uygulama çalıştığı sürece container ayakta kalır.

        - Uygulama çalışmayı bıraktığında container da kapatılır.

<hr>

<h2>Container Temelleri - 2</h2>

> Her container imajında o imajdan bir container yarattığımız zaman varsayılan olarak çalışması için ayarlanmış bir uygulama vardır ve bu uygulama çalıştığı sürece container ayakta kalır. Uygulama çalışmayı bıraktığında container da kapatılır.

Image içerisinde birden fazla program olabilir, fakat containerlarda bir uygulaema çalışabilir. Uygulamayı kapattığımızda container içinde bir başka uygulama çalıştırabiliriz.

- docker container rm \_\_ ile container'lar silinebilirler. Stop edilmiş olmamlılar.

<hr>
<h2> Container Temelleri - 3 </h2>

Container'lar oluşturulduklarında ekstra bir komut girilmez, olacak her şey image'de belirtilir.

- Tabii bu demek değildir ki container'a bağlanamayız.

docker container exeec -it \_\_\_ sh

- sh -> shell'e bağlan demek.
- ubuntu tabanlı olsaydı --> bash yazardık.

<hr>
<h2> Docker Katmanlı Dosya Sistemi </h2>

Docker Image'leri base bir image üstüne eklenir. Her bir değişiklik de yeni bir katman olarak çalışır.

- Container oluşturduğumuz zaman olan image layerı read-only oluyor ve üstüne writable bir layer açılıyor. Container ile bu layerı değiştirebiliyoruz.

1. Docker mecburen bu layer sistemini bu kadar karıştırıyor. Saniyelik açılması için..
2. Daha fazla disk alanına ihtiyaç duymamamız için layer sistemi kullanılıyor.
3. Docker her image'ı katmanlar üzerinde tuttuğu için, iki image için ayrı image tutulmuyor ve ayrı ayrı yer kaplamıyorlar. Tek diskte tutuluyorlar.

   - docker image pull alpine

<h2> Docker Container Yaşam Süresi </h2>

Server dediğimiz kavram bilgisayarlar hayatımıza girdiği günden beri var. Bunları yönetiyoruz.

<br>

<h3>Contaiener YASALARI :)</h3>

1. Containerlar tek bir uygulama çalıştırmak için oluşturulurlar.

2. Containerlar bu tek uygulamanın çalışması için gerekli tüm gereksinimlerin önceden hazırlandığı image dediğimiz objelerden yaratılırlar. Containerlarla ilgili tüm bu gereksinimlerin imaj seviyesinde tamamlanmış olması beklenir.

3. Bir container içinde çalışan ana uygulama durdurulduğu anda container da durdurulur. Container durduğu anda sistemin sorun olduğunu anlayarak aynı imajdan aynı ayarlarla yeni bir container yaratarak sistemin çalışmaya devam etmesi sağlanabilir.

4. Container içerisindeki uygulamada bir sıkıntı oluşursa veya herhangi bir yanlışlık varsa bu container içerisine bağlanarak çözülmez. Container durdurulup yerine sıfırdan bir container yaratılır. Eğer sıkıntı ayarlarla veya config ile ilgiliyse, sorun imaj yaratma aşamasında çözülür ve sorunun çözüldüğü yeni bir imaj ortaya çıkarılarak bundan yeni bir container yaratılır.

---

<h2> Docker Volume </h2>

Containerlar uzun ömürlü olmyabiliyorlar, ama bizim datamız bize uzun ömürlü gerekebilir. Container ortadan kalktığında verinin de gitmemi için buna bir çözüm bulmamız gerekiyor.

Çözüme volume..

- Volume, container gibi bir docker objesi. Container başlatılırken, ona senin veriler bu volume'e yazılsın diyeibliriz.

        docker volume create ---
        docker volume inspect ---

---

        docker container run -it -v volume_name:/folder_name image_name sh

- Boş ve dolu volumeleri containerlara mounth edebiliriz.

<h3>Boş-Dolu Volume Mount Edildiğinde ne Olur?</h3>

1. Eğer bir volume mount edildiği klasör mevcut değilse bu klasörü yaratır. Ve o anda volume içerisinde hangi dosyalar varsa bu klasörde o dosyaları görürsünüz. Boşsa boş görürsünüz.

2. Eğer bir volume imaj içerisinde bulunan mevcut bir klasörü mount edilirse:
   - Klasör boş ise o anda volume içerisinde hangi dosyalar varsa bu klasörde de o dosyaları görürsünüz.
   - Klasörde dosya varsa ve volume boşsa bu sefer o klasördeki dosyalar volume'e kopyalanır.
   - Klasörde dosya var ya da yok fakat volume'de dosyalar varsa yani volume boş değilse, bu sefer siz o klasörün içerisinde volume'de ne dosya varsa onu görürsünüz.

<hr>

<h2>Bind Mounts</h2>

- Büyük veriler ile uğraşacağımızda, production gibi ortamlarda veri saklamak için kullanacağımız tek yöntem VOLUME'dir.

- Container dışarısında localde Bind Mount kullanabiliriz.

> Host üstündeki bir klasör ya da dosyayı Container içerisine map edebiliriz. Buna Bind Mount denir.

---
