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
