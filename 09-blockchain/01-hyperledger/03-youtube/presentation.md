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
