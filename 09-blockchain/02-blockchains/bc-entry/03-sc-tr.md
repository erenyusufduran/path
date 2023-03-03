# Akıllı Sözleşme Nedir?

Akıllı sözleşme, diğer sözleşmelerde olduğu gibi, bir anlaşmanın koşullarını belirler. Ama geleneksel bir sözleşmenin aksine, akıllı sözleşmenin koşulları Ethereum gibi bir blok zincirinin üzerinde çalışan kodlar şeklinde yürütülür. Akıllı sözleşmeler, kredi ve sigortadan lojistik ve oyunlara kadar çok yönlü eşler arası işlev sunarak geliştiricilerin blok zincirinin sunduğu güvenlik, güvenilirlik ve erişilebilirlikten faydalanan uygulamalar oluşturmasına olanak tanır.

### From Hyperledger:

> From an application developer’s perspective, a **smart contract**, together with the **ledger**, form the heart of a Hyperledger Fabric blockchain system. Whereas a ledger holds facts about the current and historical state of a set of business objects, a smart contract defines the executable logic that generates new facts that are added to the ledger. A **chaincode** is typically used by administrators to group related smart contracts for deployment, but can also be used for low level system programming of Fabric. In this topic, we’ll focus on why both smart contracts and chaincode exist, and how and when to use them.

Bütün diğer sözleşmeler gibi akıllı sözleşmeler de bir anlaşma veya kontratın şartlarını belirler. Öte yandan akıllı sözleşmeleri "akıllı" kılan özellik, şartların bir avukatın masasındaki kağıt yerine bir blok zinciri üzerinde çalışan kodlar şeklinde belirlenmesi ve yürütülmesidir. Bitcoin'in ardındaki temel fikir, arada banka gibi "güvenilir bir aracı" olmaksızın para göndermeyi ve almayı mümkün kılmaktır. Akıllı sözleşmeler bu temel fikri bir adım öteye taşıyarak ne kadar karmaşık olursa olsun her türlü işlemi ve sözleşmeyi güvenli bir şekilde otomatikleştirir ve sanal olarak merkezsizleştirir. Ayrıca Ethereum gibi bir blok zinciri üzerinde çalıştığından güvenlik, güvenilirlik ve sınır tanımayan bir erişilebilirlik sunar.

### Bazı önemli Akıllı Sözleşme Uygulamaları

- **Uniswap**: Kullanıcıların kurları belirleyen herhangi bir merkezî otorite olmaksızın akıllı sözleşme aracılığıyla belirli kripto türlerini takas etmesine olanak tanıyan merkezsiz bir takas platformudur.
- **Compound**: Aracı bankaya ihtiyaç duymaksızın yatırımcıların faiz kazanmasını ve borç almak isteyenlerin anında kredi almasını sağlamak için akıllı sözleşmeleri kullanan bir platformdur.
- **USDC**: Bir USDC'nin değerini bir ABD dolarına eşitleyen bir akıllı sözleşme aracılığıyla ABD dolarına sabitlenmiş bir kripto para birimidir. USDC stabil kripto para olarak bilinen yeni bir dijital para kategorisindedir.

---

Akıllı sözleşmeler çeşitli programlama dillerinde (Solidiy, Web Assembly, Rust gibi) yazılır. Ethereum ağında her bir akıllı sözleşmenin kodu blok zincirinde depolanır. Böylece ilgili tüm taraflar sözleşmenin işlevini doğrulamak üzere sözleşmenin kodunu ve mevcut durumunu inceleyebilir.

- Ağdaki her bir bilgisayar (veya "düğüm"), blok zinciri ve işlem verilerinin yanı sıra var olan tüm akıllı sözleşmelerin bir kopyasını ve bunların mevcut durumunu depolar.
- Ethereum ağında akıllı bir sözleşme yürütmek için genellikle, "gas" olarak adlandırılan bir ücret (böyle adlandırılmasının nedeni, bu ücretlerin blok zincirinin çalışmasını sağlamasıdır) ödemeniz gerekir.

### Gas Fee

Gas Fee ya da Türkçe anlamı ile gaz ücretleri, temelde bir kripto para işlemini tamamlama ücretini belirlemektedir. Gas Fee, Ethereum ağı ve onun yerel kripto para birimi olan ETH için oluşturulmuştur. Ancak kripto yatırımcılar, diğer kripto para birimleri için de işlem ücretlerini gas olarak adlandırabilmektedir. Gaz ücretleri, Ethereum ekibi tarafından Gwei olarak adlandırılmıştır. Saniye başına milyonlarca sunucu işlemi yapıldığı için bunun bir bedeli olması gerektiğine karar verilmiş ve gas fee oluşturulmuştur. Gaz ücretleri, ağdaki işlemlerin gerçekleştirilmesi ve madencilerin teşvik edilmesi amaçlanarak oluşturulmuştur. Ethereum madencilerinin bir işlemi gerçekleştirmesi gereken enerji karşılığında verilmektedir.

Ayrıca gas fee, Ethereum ağına bir güvenlik katmanı sağlamaktadır. Ethereum geliştiricileri tarafından, ağın güvenliğini sağlamaya yardımcı olmak için uygulanmıştır. Bunun nedeni her işlem için bir ücret talep etmek, kötü niyetli kişilerin ağa spam göndermesini önlemekte ve hesaplama israfı riskini azaltmaktadır. İşlemleri doğrulamak ve madencileri ödüllendirmek için kullanılmaktadır. Gas ücretlerinin Ethereum ağı tıkandığında artması, yatırımcılar için kötü bir senaryo haline gelmektedir.

- Akıllı sözleşmeler bir blok zincirine uygulandıktan sonra genellikle yaratıcıları tarafından bile değiştirilemez. (Bu kuralın istisnaları vardır.) Bu, akıllı sözleşmelerin sansürlenememesini veya kapatılamamasını sağlamaya yardımcı olur.
