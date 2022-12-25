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
