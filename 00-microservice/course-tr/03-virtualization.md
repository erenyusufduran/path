<h1> VIRTUALIZATION (SANALLAŞTIRMA) </h1>

<h3>Sunucu - Server</h3>

- Hizmeti sunar.
- Güçlü ve yüksek kapasiteli işlem gücü sunar.
- Uzun süreli, kesintisiz ve çoklu isteklere cevap vermek üzere tasarlanmıştır.

<h3> İstemci - Client </h3>

- Hizmeti kullanır.
- Görece düşük kapasite işlem gücü vardır.
- Tek bir kullanıcıya hizmet vermek için tasarlanmıştır. Uzun süreli ve kesintisiz çalışma öncelikli değildir.

<hr/>
<h3> Sunucu </h3>

Sunucular da anakartlara sahipler, bunlara ram, harddisk gibi componentler sağlanıyor.

- İçerisine çalışmasını istediğimiz uygulamaları kuruyor ve kullanıyoruz.

- Önceden HP, DELL, IBM gibi şirketlerden sunucu biligsayarları alınırdı. Bunları veri merkezleri yapabilirdik. Bunlara da üç-dört farklı yerden ulaşabilirdik.

- Farklı bir uygulamaya daha ihtiyaç duyduğumuzda tekrar bir sunucu sipariş etmemiz gerekirdi.

- Güvenlik ve kaynak dağıtımı zordu. Bu yüzden kaynak israfı oluyordu. Her seferinde izole bir sistem oluşturmak durumunda kalıyorduk.

---

> Tüm bu sorunlara yanıt olarak 2000'lerin başında virtualization ortaya çıktı. O günden bugüne de bilişim alanında birçok şey değişti.

1. Sanallaştırma, temelde bir fiziksel makinenin üstünde birden fazla sanal makine kurmamıza imkan veren. Kaynak dağıtımını sağlayan sisteme verdiğimiz isim.

   - Önceden uygulama kurmak için bir adet makine alıp buna sistem kuruyorduk. Sanallaştırma sayesinde fiziksel sunucu alıp öncelikle sanallaştırma yazılımını bu sistemin üzerinde kuruyoruz. Birden fazla sanal makineyi bu sistem üzerrinde kurmamızı sağlıyor. Birbirlerinden izole sanal makineler kuduğumuz için, bu makineler üzerine istediğim OS'i kurarak üstüne de çalışmasını istediğimiz serveri kuruyoruz.

   - Sanallaştırmanın kullanımının ilk sebebi kaynak israfını engellemek.
