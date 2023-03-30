Colins TR AX 2012'den -> AX Erdis Queue'ya akan bir data var.

Barkod tamamen AX'da oluşuyor. RecordRefrecId AX'da oluşuyor.
ErdisSent, Management Worker aldı mı almadım mı boolean değeri.

## EMT

- Management ile Middleware arasındaki tüm iletişimi Kafka sağlıyor.
- Colins TR AX ile Management arası SQL sorgularıyla sağlanıyor.

Servisler 3 kısımdan oluşuyor, işleyen kısımlar worker ve service, client'a aktaran kısımlar API kısımları.

Servisler sürekli run edilmesi gereken yerler, schedule edilmesi gerekilen yerler bir repo olarak düşünüldü, API bacaklarını yazdığımız middleware katmanına gelen yerler ise servisin kendi adıyla yer alıyor.

Normalde 3 kısım, 3 ayrı microservice oluyor. Fakat microservice olarak 3'ünü birlikte almak daha doğru olur.

- Worker'la AX'daki datayı dinledik aldık, bu kısım Produce kısmı,
- Service taşımaya devam ediyor, Kafka'nın topiclerini dinliyorlar. Önce consume ediyor, sonra produce ediyor

Eğer ülkeye ait dataysa önce içeri kayıt edip hangi ülkeye gideceğine bakıyor, Master Data ise direkt middleware'e gönderiyor
