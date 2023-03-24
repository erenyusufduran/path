<h1> Container & VM Difference </h1>

<h3> Bare Metal </h3>

- Virtualization, yani aldığımız fiziksel makinelere uygulama kurmak.

<h3> VM </h3>

- Sanal makinalar bize fiziksel makine olarak bir fayda sağlasa da, yer olarak çok fazla alan sağlayamadılar.

<h3> Container </h3>

- Container'lar ise tek bilgisayarda çok kaynak israfı olmadan bize ayrık projeler yönetmemizi sağlıyor.

1. Ortamda yönetmem ve bakım yapmam gereken 4 fiziksel sunucu var.
2. Yönetmem gereken 1 docker katmanı var.
3. Yönetmem gereken 4 tane işletim sistemi var.
4. Ortamda atıl kapasite yok.

- Container'lar 10 tane işletim sisteminde yönetilecek işi 4 tane işletim sistemi ile çözebiliyor. Önceden 10 makine çalışırken artık 4 makine çalışabiliyoruz.

---

- VM işletim sistemi izolasyonu sağlar. Container uygulama izolasyonu.

- Container VM'e göre çok daha hızlı başlatılır.

- Container VM'e göre daha taşınabilirdir. Image halinde taşınarak her yerde aynı şekilde çalışır.

---

<h2> Windows Container </h2>

2016'ya kadar Container'lar sadece Linux'ta kullanılabiliyordu.

- Sonrasında Docker ile Microsoft birlikte çalışarak, aynen linux container'lar gibi windows containerlar oluşturdular.

- Linux ve Windows Container'lar birbirlerinden farksızlardır, docker tarafında aynı komutları kullanıyoruz. Biri linux için biri windows için kullanılıyor.

- Tabii ki de windows containerlara dair öğrenmemiz gereken ekstra şeyler var. Onları da inceleyeceğiz.
