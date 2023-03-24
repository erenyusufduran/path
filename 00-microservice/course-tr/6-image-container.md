<h1> Image ve Container </h1>

<h3> IMAGE </h3>

    1. İlk olarak fiziksel sunucuyu kurucaz
    2. İkinci olarak os kuruyoruz
    3. Programın çalışması için gerekli sistemi kuruyoruz. (JAVA Runtime Environment gibi)
    4. app1 uygulamamızın çalışması için gerekli olan kütüphaneleri ekledik.
    5. app1 uygulamamızı yükledik.

Şimdi bu kurulumu alalım ve içinden işletim sistemini çıkartlalım. Sonrasında ise bu dosyaları bir paket haline getirelim. Bunu bir yerde depolayın. Tebrikler bir adet docker image oluşturdunuz.

- Uygulamanın çalışması için gerekli olan her şeyin olduğu pakete image diyoruz. Kernele ihtiyaç yoktur.

---

<h3>Container</h3>

Container dediğimz şey, yarattığımız image'ın çalışan halidir. Image bir şablondur, bu şablondan istediğimiz kadar container oluştururuz. Container, Image'in çalışan bir kopyasıdır.

- docker image pull ile -> bir dosyadan bir image çekiyoruz.

- docker container run --name \_container_name sonra da \_image_name ile container başlatabiliyoruz.

- Docker container run dediğimiz de programı çalıştırır.

- Docker'ın gücünü anladık mı? Bir uygulamayı alıyorum, o uygulamanın çalışması için gerekli olan her şeyi package haline getiriyorum. Docker yüklü herhangi bir bilgisayarda başka hiç bir şeye ihtiyaç duymadan bunu çalıştırabiliyorum.
