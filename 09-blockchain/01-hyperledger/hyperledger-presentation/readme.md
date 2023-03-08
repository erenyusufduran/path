# Hyperledger Fabric Konsensus Yapıları ve Öğeleri

1. ## Consensus

2. ## Process

3. ## Word State

   Word state kelimesi, ledger'ın mevcut değerlerini bulmak için tüm önbellek verilerini toplayan veritabanını ifade ediyor. Böylece, hesaplama yapmak yerine değerlere doğrudan erişmeyi nispeten kolaylaştırıyor.

   Ayrıca, bir veritabanı yapısına sahip olduğu için, statelerle etkileşime geçmek için birçok başka özelliğe de sahip olacağız. Gerçekte, deftere geçişler ekleyen birden fazla uygulama, durumun değerini değiştirecektir.

4. ## Block Structure

   Blok yapısının içerisinde 3 öğe bulunuyor. Bunlar:

   1. **Block Header**: Block Header, genesis bloğundan başlayan bir blok numarası içeriyor. Yeni bloklar geldiğinde de birer birer artar. Öte yandan, mevcut bir block hash adresini ve önceki bloğun hash adresini içeriyor.

   2. **Block Data**: Bu bölümde tüm işlemler sıralanıyor.

   3. **Block Metadata**: Bloğun ne zaman çıktığı, imzası, public keyi gibi birçok bilgi içeriyor.

5. ## Transaction Structure

   1. **Header**: Transaction'ın öneml metadataları yer alır, zincir sürümü gibi.

   2. **Signature**: Client'ın imzası saklanır. İşlemin geçerli olup olmadığını görmek için çok önemlidir.

   3. **Proposal**: Teklif, işlem için tüm giriş parametrelerini içerir.

   4. **Response**: State öncesi ve sonrası durumu not edilir. İşlem geçerliyse, sistem onu kullanır.

   5. **Endorsement**: Onaylanan kişiden gelen tüm imzaları bulundurur.

6. ## Private Data

   Bazı bilgilerin diğer kişilerden gizli tutulması istendiğinde, kuruluşa özel bir kanal oluşturma özelliği kazanır. Burada sadece bilgileri görebilen üyeler dahil olabilir ve diğer üyeler de dışarıda kalabilirler.

   Ancak, tüm özel kanallarda, tüm Hyperledger akıllı sözleşme versiyonunu ve diğer politikaları yürütmek için bir yönetici olması gerekir. Ayrıca, kanal dışındaki diğer katılımcıları içerebilecek herhangi bir kullanım durumuna da izin vermez.

7. ## Development
   - Go, Java, JavaScript ile geliştirme yapılabiliyor.
     - En aktif geliştirme Go diliyle yapılıyor.
     - Solidity'i de görüyoruz, fakat github hesaplarında herhangibir geliştirme göremedim.
   - State Storage CouchDB ve LevelDB'de yapılabiliyor.
   - GitHub'da en aktif olan proje fabric projesi, Sawtooth'a baktığımızda birçok dildeki son geliştirmelerinin 3, 4 yıl önce yapıldığını görüyoruz. Sadece rust ile olan geliştirmeleri en son 7 ay öncesine dayanıyor.

# Hyperledger Sawtooth Konsensüs Yapıları ve Öğeleri

1. ## Event System

   Event system ile Hyperledger Sawtooth, eventlerin oluşturulmasını ve dinlenmesini destekliyor. Bu da bize şunları sağlıyor:

   1. Blockchainde meydana gelen tüm olaylara abone olmak için düğümler. Mesela yeni bir block eklendiğinde veya ağ forklandığında bunu görebiliriz.
   2. Transaction family'lerinden gelen diğer uygulamalardan haber alabiliriz.
   3. Son durumu state'te saklamadan bilgiyi kanaldaki diğer node'lara dağıtabiliriz.

2. ## Transaction Receipts

   Bu öğenin yardımıyla müşterilerin işlemleri hakkında bilgi alabiliriz, bunlar state'de tutulmazlar.

   - İşlemin geçerli olup olmadığı bilgisi,
   - İşlemin yürütülmesi sırasında hangi event'lerin olduğu,
   - İşlemin state'i nasıl değiştirdiği,
   - Herhangi bir transaction family'e ait yürütme bilgisine erişebiliriz.

3. ## Ethereum Contract Compatibility with Seth

   Sawtooth'un en iyi özelliklerinden biri, Seth kullanan Ethereum kontratlarına uyumluluğu. Bu proje ile Ethereum ile projeler arasında bir bağlantı oluşturuluyor.

   Böylece, EVM'i kullanarak akıllı sözleşmeleri dağıtabiliriz.

   Aslında, Burrow'un EVM implementasyonunu aldılar. Burrow EVM'i Sawtooth'ta da çalıştırıyorlar.

   Bu özelliğin diğer bir ana amacı, dApp'lerin ve diğer EVM kontratlarının ağa bağlanmak için yeterince kolay olmasına yardımcı olmak. Bunun için Ethereum JSON RPC API'ını kopyaladılar.

4. ## Pluggable Consensus Algorithms

   Sawtooth ile birçok konsensüs protokolü elde edilebiliyor. Bir başka güzel yanı ise aynı anda birden fazla konsensüs yürütülmesine izin veriyor olması.

   Ağı kurarken, kullanmak istenilen konsensüs seçiliyor. Sonrasında da bu değiştirilebiliyor.

   Seçilebilecek 5 farklı konsensüs var. Bunlar.

   - **Devmode**

     - Devmode daha çok test etmek için yararlıdır, basitleştirilmiş bir lider algoritması diyebiliriz. Production'da kullanılması önerilmez.

   - **pBFT**

     - Lider tabanlı bir konsensüs algoritmasıdır, zaten daha önce konuşmuştuk bu algoritmayı.

   - **PoET CFT**

     - Bir diğer adı PoET similator. Algoritmaların özgürce çalışmasına izin veren SGX türü bir simülatör ortamı var.

   - **Raft**
     - Ağda kitlenme olmaması için lider tabanlı bir konsensüs algoritmasıdır.

5. ## Sample Transaction Families

   İşletmeler genellikle sabit bir transaction süreci istedikleri için bazı transaction aileleri ortaya çıkmıştır. Bunlar özelleşebilirler.

6. ## Global State

   Bizans konsensüsünde düğümler arasındaki tüm kopyaların sağlam bir blockchain kalitesi oluşturması için ortaya çıkmıştır.

   Sawtooth bunu sürdürmek için Radix Merkle Tree kullanır. Ayrıca, aynı işlemin her doğrulayıcısında blokların doğrulanması aynı durumu ve aynı sonuçları üretir.

   Tüm işlem ailesinin işlemlerin genel durum verilerini paylaşacağından, tanımlayacağından ve yeniden kullanılacağından emin olur.

7. ## Radix Merkle Tree

   Sawtooth tüm transaction ailelerini depolamak için Radix Merkle Tree kullanıyor.

   Bloğa bağlı bir dizi geçiş için, söz konusu işlemde tek bi hash oluşturuluyor. Hash ise işlem bloğunun header'ına yerleşiyor.

   Dolayısıyla, doğrulayıcının işlemi Merkle'dan farklı bir adreste sona erdiğinde, o blok geçerli olmayacaktır. Bu şekilde tanıklara güvenmeden fikir birliğine varma eğiliminde oluyor.

8. ## Validator Network

   Ağ katmanı doğrulayıcılar içindeki iletişimi sağlamaktan sorumludur. Eş bulma, bağlantı ve mesaj işlemeyi de içerir.

   Doğrulayıcılar, her türlü gelen bağlantı için belirli bir arabirimi ve diğer bağlantı noktalarını dinlemeye başlar. Bağlantı gerçekleştiğinde, doğrulayıcılar gossip protokolüne göre mesaj alışverişi yaparlar.

   Ağın hedefi, ağ katmanını mümkün olduğunca kendi kendine idame ettirebilmek. Normalde ağğ katmanı, uygulama katmanı hakkında bir bilgi veya veriyi almaz. Bu nedenle, ağ katmanındaki yük nispeten azaltılır ve hızlıdır.

9. ## Development
