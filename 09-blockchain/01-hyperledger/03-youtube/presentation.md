Fabricteki ana temaları Enes'le birlikte anlatmıştık geçen sunumda. Bugün hem oraları biraz hatırlatmak, hem de üstüne development'ta işler nasıl yürüyor anlatmak istiyorum sizlere.

Bilinmesi gereken şeylerle ilgili ufak bir şey hazırladım bunu da gruba atıyorum.

- **Orderer**: Ordering System, İletişim kanalını sağlar. _Consensus_ mekanizmasını sağlar ve _transactionların_ yürütülmesinden sorumludur.
- **Peer Node**: Defterleri ve akıllı sözleşmeleri yönetirler. Fabric Gateway hizmetini çalıştırarak işlem tekliflerini ve onayları da yönetir.
- **Configtxgen**: Network ve Channel konfigürasyonları
- **Cryptogen**: Test ağında kullanılmak üzere identity yaratma aracı.
- **Certification Authority**: Production'da kullanılmak üzere identity yaratma aracı.

![Alt text](./assets/lifecycle-of-chaincode.png)

Bunları hatırladıysak geçelim development kısmına.

Göstereceğim örnekte;

- 3 farklı peer organizasyon ve bir tane de orderer organizasyon bulunmakta. Bunları yetkilendirme gibi şeyler için kullanabiliyoruz.
- Her bir peer endorser peer olarak bulunuyor. Yani işlem onaylayıcılar. Burada 3 tane peer'ımız var demiştik. 2'si onaylamazsa işlem onaylanmıyor.
- Burada cryptogen kullanmıyorum, çünkü daha test için kullanılan bir şey. Gerçek hayatta kullanılacaklar için certification authority makul olan seçenek.
- Database olarak ise CouchDB kullanıcağız.

## NEDEN CouchDB?

CouchDB 2005'ten beri hayatımızda olan NoSQL bir veritabanı. JSON tabanlıdır. HTTP REST API ile veritabanına erişimi sağlanır.

### **MongoDB vs. CouchDB**

|                                   | CouchDB                                                                                                                                                                                                                                 | MongoDB                                                                                                                                                                                                                                                                                                                                                                      |
| :-------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|            Data Model             | **JSON**, The data formats are limited to: strings, numbers, arrays, objects, boolean.                                                                                                                                                  | **BSON**, Large number of data types                                                                                                                                                                                                                                                                                                                                         |
|             Indexing              | Indexing of documents is **limited**                                                                                                                                                                                                    | Secondary indexes on any field are available and supported in different types                                                                                                                                                                                                                                                                                                |
|          Query Language           | CouchDB uses an HTTP **Rest API** to its server endpoint to query and manipulate data. _Queries_ in the basic API support either returning all documents in a database, or retrieving a specific document based on a unique identifier. | MongoDB has a very rich query language called MQL. It supports a wide variety of modern native drivers as well as a shell. The data can be edited, deleted, inserted, and queried in many shapes and forms. The queries can use complex operators like geo queries, text queries, regular expressions, and compound conditions. Any query can be sorted or have projections. |
| High Availability and Scalability | CouchDB is eventually consistent and uses optimistic locking as part of its database operations. Write operations do not lock database objects and conflict errors need to be resolved by the application developer.                    | MongoDB allows multiple database users to concurrently access the same data by managing a well defined concurrency control.                                                                                                                                                                                                                                                  |

CouchDB'de client tek bir veritabanına bir bilgi girdiğinde, bu bilgilerin diğer veritabanlarına yayılmasını garanti eder. MongoDB'de ise veritabanı fazlalık sağlamak için bu çoğaltma setini kullanmayı tercih etmez.

Performans ve okuma hızı olarak MongoDB, CouchDB'ye göre üstündür.

CouchDB, hem master-master, hem de master-slave replikasyonu sunarken, MongoDB yalnızca master-slave yapılandırmalarını kapsar. Esas olarak da bu sebeple Hyperledger Fabric'te CouchDB database olarak kullanılmalıdır.

---

Gelelim development kısmına.

1. Burada öncelikle certification authorityleri ayağa kaldırmamız gerekiyor. `artifacts/channel/create-certificate-with-ca`
   - Aslında burada yapmaya çalıştığımız şey bu crypto-config dosyasını oluşturabilmek. Çünkü ayağa kaldıracağımız tüm servisler bu dosyalara göre ayağa kalkacaklar. Biz burada identity yaratıyoruz.
   - **sh dosyası**:
     - Bizim 4 tane certification authority'miz olucaktı. 3 tane organizasyonlar için, 1 tane de orderer için. Bu dosyada bunları oluşturuyoruz. İçinde her bir CA için bir fonksiyon bulunuyor ve crypto-config dosyasını oluşturuyorlar.
2. Sonrasında `/channel` klasörüne geliyoruz ve burada **configtxgen** ile birlikte _channel'ı_, _genesis block_'u ve _anchor peer'ları_ oluşturuyoruz. Hatırlıyorsanız genesis block kuracağımız chainin ilk bloğuydu. Aynı zamanda burada `configtx.yaml` adında bir dosyamız bulunuyor. Bu dosya ile birlikte channel içindeki konfigurasyonlar yapılıyor. Organizasyon içi kurallar, channel kuralları gibi şeyler yer alıyor.
3. Bu noktada şuana kadar genesis block'u oluşturduk. Channel transaction dosyamızı oluşturduk, her bir organizasyon için anchor peer'larımızı oluşturduk. Anchor peer'lar gossip prokolü ile birlikte birbirleşiyle haberleşiyorlardı.
4. Gelelim docker-compose dosyamıza. Öncelikle `create-certificate-with-ca` klasörünün içinde CA imageleriyle olan dosyaya bakalım. Burada environment ve portlar verilerek 4 ayrı CA oluşturuluyor.
5. Artık `artifacts` klasörümüze gelebiliriz, burada öncelikle docker-compose dosyamızı inceleyelim. 3 orderer'lı bir yapı kullanıyoruz ordering system içerisinde, bu yüzden 3 tane orderer servisi bulunuyor. 3'lü couchDB kullanıyoruz. Bunun dışında da 3 tane peer bulunuyor bunlar da her bir organizasyon için birer taneler. Buralarda orderer'ların ve peer'ların volume'leri ise daha demin bahsettiğim **crypto-config** klasörlerinde bulunuyorlar.
   - Bunları da ayağa kaldırıyoruz ve sonrasında artık chaincode kısmımız kalıyor. Chaincode kısmında farklı denemeler yaptım, fakat çok detaylı bir döküman göremedim. Geçen seferde de gösterdiğim chaincode üzerinden göstericem tekrardan.
     - **initLedger** fonksiyonu ile birlikte aslında 10 tane araba ekliyoruz sisteme. Bu 10 arabayı JSON arrayi içerisine atıyoruz. Sonrasında for döngüsü ile dönerek her birini stub içerisindeki putState metoduyla state'e atıyoruz.
     - **queryCar** fonksiyonu ile okuma yapıyoruz.
     - **createCar** fonksiyonu ile ise araba oluşturabiliyoruz.
6. Kontrat oluşturulduktan sonra bizim channel'ı oluşturmamız gerekiyor. Burada peer binary'de bulunan `peer channel create` komutu ile oluşturuyoruz, sonrasında oluşturduğumuz kanala peer'larımızı da join ediyoruz. Aynı şekilde anchor peer'ları da kanala göre update ediyoruz. Buradaki işimiz bitiyor.
7. Artık chaincode lifecycle aşamasına geldik, sunumda da anlattığımız bir kısım vardı ben gruba attığım dosyada da onu paylaşmıştım tekrardan gösteriyim.
8. Bu komutları çalıştırdığımızda biraz zaman alıyor, sonrasında aslında sistemimiz hazır olmuş oluyor. Bu aşamadan sonra couchdb'mize bakabiliriz.
   - CouchDB'de farklı farklı döküman alanları var bunların hepsini bilmiyorum, yüklediğimiz chaincode'ların her biri farklı bir tablo açıyor, bu şekilde gözüküyorlar. Chaincode invoke sırasında init ledger ve create ledger aşamaları olduğu için burada toplamda 11 tane araba bulunuyor.
   - Bu arabalara herhangi bir update geldiği zaman, buradaki 1- yazan kısım 2-, 3- gibi ilerliyor, her update sırasında ve neyinin değiştiği görülüyor. Bu da aslında datanın değiştirilemezliğini, sadece üstüne eklenebilir olduğunu gösteriyor bize.
9. Sonrasında gelelim api kısmına, burada öncelikle connection-profile kısmına bakalım. Bunlar bizim peer'larımızın ve organizasyonlarımızın sertifikalarını içeriyorlar. Bunlarda sıkıntı olduğu zaman bağlanırken sıkıntı yaşanıyor.
10. Api kısmında `app` folder'ına bakalım. Burada bir `helper` dosyamız bulunuyor. Burası **Wallet** operasyonlarını içeriyor. Bu üstteki 4 yardımcı fonksiyon tamamen organizasyonların Certification Authority'lerini ve onlarla ilgili folder'ları açmak için gerekli kısımlar.
    - **getRegisteredUser**: Burada kayıtlı olan kullanıcıya success atan, kayıtlı olmayan kullanıcıyı ise admin identity'si ile birlikle sisteme kayıt ettiren bir sistem var.
11. `invoke` kısmı kontrata yapılacak set işlemleri için bulunuyor, initLedger, createCar gibi.
12. `query` kısmında ise kontratta yapılacak get işlemleri bulunuyor.
