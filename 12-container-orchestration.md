<h1> Container Orchestration </h1>

Container Orchestration, containerların dağılımını, yönetimini, ölçeklendirilmesini ve ağ oluşturmasını otomatikleştirme ve zamanlama işlemlerine denilir. Yüzlerce veya binlerce container'ı bir arada yönetmek için kullandığımız temel yazılımlardır.

- docker swarm
- mesos
- kubernetes

<h2> Kubernetes </h2>

Kubernetes (K8s), container uygulamalarının dağıtımını, ölçeklendirilmesini ve yönetimini otomatikleştirmek için oluşturulmuş açık kaynaklı bir sistemdir.

Kolay yönetim ve keşif için uygulamayı oluşturan containerları mantıksal birimler halinde gruplandırır. Kubernetes Google'da 15 yıldan fazla süredir sahip olunan container deneyiminin dünyanın her yanından açık kaynak topluluk üyelerinin tecrübelerine eklenerek oluşturulmuştur.

<h2> Docker Swarm </h2>

Docker Swarm, Docker Engine'e entegre bir container orchestration çözümüdür. Bir Docker ana bilgisayar havuzunu tek bir sanal ana bilgisayara dönüştürür.

- Kullanımı ve yönetimi de indirmesi de kubernetes'e göre çok daha basit.

- Belirli bir büyüklüğe kadar swarmla devam etmek çok daha makul. Sonrasında kubernetes gerekecektir.
