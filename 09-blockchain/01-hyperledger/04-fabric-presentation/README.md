Öncelikle ufak bir özetle başlamak istiyorum. Hyperledger, _Linux Foundation_ tarafından **enterprise blockchain** teknolojilerini ilerletmek için oluşturulan **open-source** bir **distributed ledger (dağıtık defter)** projesidir.

Bize neler sağlıyor?

- Permissioned Network (İzinli bir ağ)
- Confidential Transactions (Gizli İşlemler)
- No cryptocurrency (Kripto para birimi yok, fee yok)
- Programmable (Chaincode teknolojisiyle geliştirilme yapılabiliyor)

Tüm blockchain teknolojileri node'lardan oluşuyor. Her bir node birbirine bağlanır ve bunlar işlemlerden, consensustan ve ledger state'lerinden sorumludurlar.

---

## Cryptogen

Networkü oluşturmak için identity (varlık) dediğimiz yapılara ihtiyaç duyuyoruz. Bu varlıkları certification authority ile ya da cryptogen ile oluşturabiliyoruz. Cryptogen sadece developmentta öneriliyor. `crypto-config.yaml` dosyası ile yönetiliyor.

## Configtxgen

Configtxgen ile birlikte Genesis Block'u ve Transaction Channel'ı üretebiliriz. `configtx.yaml` dosyası adı altında implemente edilir.

## docker-compose.yaml

docker compose yaml dosyası ise ayağa kalkacak tüm servisleri içeriyor.

## Chaincode Lifecycle 2.x

Chaincoce lifecycle'ı 4 ayrı alanda incelemek gerekiyor.

1. Chaincode Development
   - Specification
   - Coding
   - Package
2. Installation
   - Orgs installation for the chaincode
3. Approval
   - Organizations approve the chaincode parameters
4. Committing

   - One of the org admin commits it.

5. **Package**
6. **Install**
   - Bu noktada adminlerden birisi organizasyon için chaincode install ediyor. Package ID yakalıyor.
7. **Query**
   - Install edilmiş chaincodeları listeliyor, `queryinstalled`
8. **Approve**
   - Her bir organizasyon chaincode'u approve ederek bazı policy'leri onaylıyor. Approve olduktan sonra commitleyebiliyoruz.
9. **Check Commit Readiness**
   - Commit'e hazır mı ona bakıyoruz.
10. **Commit**
    - Commitliyoruz.
11. **Query Committed**
    - Commit oldu mu diye kontrol ediyoruz.
12. **Invoke Init**
    - Initialize the chaincode.
13. **Invoke**
    - Transaction'ı oluşturuyoruz ve onu peer'lara gönderiyoruz.
14. **Query**
    - Yaptığımız transaction'ı görüyoruz.

## Certification Authority (CA)

### Identity Management

Sistemde bazı insan olan (admin, user) ve insan olmayan (orderer, peer, application) aktörler var. Tüm aktörlere ise bazı sertifikalar verilmeli ki bu sertifikalar onların kimliklerini belirtsin.

Bu identity'lere verilen bazı özellikler ise **Name**, **Type (peer ,orderer, client)**, **affiliation (organization)**, **attributes (authorization)**

Bazı CA componentleri bulunuyor. Bunlar;

- CA Server: Sertifika oluşturma ve yönetim hizmetlerini kullanıma sunar
- CA Client: Sunucuyla etkileşimi sağlar.
- SDK: CA Server için library içerir.

Kayıt eden kişi yani registrar CA client kullanırlar, yazılımcılar ise kayıt etmek için CA SDK kullanır.

## Docker Based Fabric Setup

Fabric infrastructure 2 şekilde kurulabilir.

- Fabric binary'leri VM'e direkt olarak indirilerek,
- Docker'daki fabric image'leri ile.

docker-compose single host olduğu için sadece experimental kullanım için uygun deniyor. Multi host setup için kubernetes gerekli.

---

1. Setup the network artifacts
   1. Launch the tools container & log into it
   2. Generate the crypto using cryptogen
   3. Generate the network artifacts - Genesis Block, Channel Tx
   4. Shutdown tools container
2. Launch the setup
   1. Launch the environment
3. Setup the anchor peer for Orgs
   1. Log into the tools container
   2. As acme create | join | update channel
   3. As budget org join | update channel
4. Validate the setup
   1. As acme install | instantiate chaincode
   2. As acme org invoke | query chaincode
   3. As budget org install | query chaincode
