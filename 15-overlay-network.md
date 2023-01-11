<h1> Overlay Network </h1>

Overlay, aynı bridge gibi bir driver. Biz swarm altında yeni bir network oluşturabiliyoruz.

Bunu oluşturduğumuz zaman tüm node'lar üzerinden ulaşılabiliyor. Birbirleriyle haberleşebiliyorlar.

---

- Bir Swarm Cluster oluşturulduğu zman ingress adında bir overlay network de oluşturulur. Siz aksini belirtmediğiniz sürece oluşturduğunuz servisler bu overlay networke bağlanır.

- Biz istersek aynen user defined bridge networkde yaptığımız gibi user defined overlay network de yaratabiliriz.

- Overlay networklerin temel yönetim katmanının haberleşme altyapısı encryptedir. Fakat sizin buraya bağladığınız containerların birbirleriyle iletişimi varsayılan olarak encrypted değildir. Siz overlay network yaratırken --opt encrypted opsiyonunu kullanarak bu trafiğin de encrypted olmasını sağlayabilirsiniz. Fakat bu network trafiğini biraz yavaşlatacaktır.

- Aynı overlay network'e bağlı servislerin containerları birbirleriyle herhangi bir port kısıtlaması olmaksızın haberleşebilirler ve sanki aynı ağdaymış gibi çalışırlar.

- Swarm altında yaratılan servisler aynı overlay network üzerinde birbirlerine servis isimleriyle ulaşabilir. Docker burada hem DNS çözümlemesi hizmeti hem de load balancing hizmeti sunmaktadır.

- Overlay network üzerinde aynı zamanda port publish de edebiliriz ve Docker Swarm overlay networklerde ingress routing mesh destekler. Siz port publish edip Docker host üstünden o porta erişirseniz Docker o host üstünde o portun publish olduğu bir container bulunmasa bile bulunan bir host'a trafiği yönlendirecek ve cevap verecektir.
