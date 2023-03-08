# <a href="https://101blockchains.com/hyperledger-fabric/">Hyperledger Fabric: A Pioneer Of Blockchain</a>

- <a href="#chapter1">What is Hyperledger Fabric?</a>
- <a href="#chapter2">Basic Benefits of Hyperledger Fabric</a>
- <a href="#chapter3">Hyperledger Fabric Architectural Model</a>
- <a href="#chapter4">Identity, Membership and Peer Management</a>
- <a href="#chapter5">Elements of the Ecosystem</a>
- <a href="#chapter6">What Are The Use Cases?</a>
- <a href="#chapter7">Companies Using Hyperledger Fabric</a>

## <font id="chapter1">What is Hyperledger Fabric?</font>

Hyperledger Fabric is an open-source enterprise blockchain project under Hyperledger. Moreover, like any other blockchain networks out there, it comes with smart contracts, ledgers, and protocols that help the participants manage all of their transactions.

In reality, Hyperledger Fabric does have some differences from the typical blockchain platforms. One of them being the fact that it’s permissioned and a private network. So, rather than allowing unknown participants to enter a system, it creates a membership feature and allows the ones that are permitted.

To be frank, it’s an excellent approach for enterprises. In reality, enterprise companies have a lot of privacy issues. So, they need to maintain their integrity and keep all the competitor out of their network system.

Thus, having Hyperledger Fabric have your back really opens up new opportunities for the companies.

The platform is also quite flexible once you get to know about it. Furthermore, it offers pluggable feature options, use of multiple consensuses, different ledger formats, and MSPs. So, in a way, it does offer you a lot of opportunities to make it more user-friendly based on your needs.

On the other hand, it does have the option to channels that would let participants create private transactions. It’s vital for many companies because they may need to deal with sensitive issues. And, all the participants in a network isn’t fully trustable for that.

![](https://101blockchains.com/wp-content/uploads/2019/09/hyperledger-fabric-basics.png)

---

## <font id="chapter2">Basic Benefits of Hyperledger Fabric</font>

### **Open-Source**

Hyperledger Fabric blockchain is an open-source platform, so everyone is free to use it. Thus, it means that you won’t have to buy it from them if you want to use it for any of your projects. More so, there are no vendor lock-ins as well.

However, in many cases, the industries want to add more features or don’t want to waste money on developer fees. It’s because even though the source code is free, you would need to have developing skills to understand what you are dealing with.

And so, you would need a team of programmers that can understand it. Moreover, you can also add or remove some of the features to make the Hyperledger fabric blockchain more suitable for your industry.

### **Suitable For Wide-Ranging Industry**

The platform can go with any kind of industry at present. So, it means no matter what kind of company you have, it would go perfectly with it. In reality, industries such as supply chain, banking, Internet of Things, healthcare, government, media, cybersecurity, and many others are pursuing it.

### **Quality Code**

It offers careful observations to make sure that the quality prevails with every new addition. This is one of the best parts of the Hyperledger Fabric blockchain. According to the Hyperledger fabric docs, you’ll see that all their codes go through a crucial inspection.

In reality, they want to focus more on quality than quantity. So, if they add any new features, it goes through heavy testing phases to find out any hidden fault. Moreover, as the Hyperledger fabric samples are open-sourced, the community also contributed greatly to perfecting the codebase.

### **Higher Efficiency**

According to the Hyperledger fabric docs, it provides more efficiency compared to other blockchain platforms.

In reality, the internal structure of the Hyperledger fabric blockchain promotes efficiency. Every node within the Hyperledger fabric samples has a different work assignment. So, it can separate the transactions form other commitment and ordering processes.

Thus, the nodes can process multiple transactions simultaneously without making the system slow. Moreover, this new structure makes sure that the time consumption is relatively low and accelerates the overall functionality.

### **Modular Design**

The modular design ensures greater functionality of the network. And why wouldn’t it? In reality, you get to use different algorithms to run on the Hyperledger fabric samples for different purposes.

For example, you can choose an algorithm for encryption, another for identity and another for consensus. For this, all you have to do is to plug it in the Hyperledger Fabric blockchain. So, you are not stuck with only one type of algorithm to run on the Hyperledger Fabric blockchain.

---

## <font id="chapter3">Hyperledger Fabric Architectural Model</font>

### **Assets**

In Hyperledger Fabric architecture diagram, assets can be anything that holds a monetary value on the system. Moreover, the range can vary from tangible to intangible assets too. In reality, you would get the chance to modify any asset using the chaincode facility on the network.

All the assents in the Hyperledger fabric architecture diagram are represented as the key-value pair. On the other hand, transaction are the other state changes on the ledger. Additionally, you can represent the assets in JSON or in binary form.

### **Chaincode**

Next comes the chaincode for the Hyperledger fabric architecture diagram. Well, chaincode is actually a business logic that can define an asset and other transactional modification of that asset. In reality, chaincode runs separately from transaction orders, which optimizes the network for more security.

Moreover, it enforces rules for altering the key-value pairs or any kind of other state in the database. You can execute a chaincode using a transitional proposal. Later the execution will then change the state of the asset.

You could think of it as a smart contract. In the Hyperledger fabric docs, they did use both terms interchangeably. However, they aren’t entirely the same thing.

### **Ledger**

In the Hyperledger fabric architecture diagram, another part is the ledger. It encodes all the transaction history in an immutable ledger. Also, comes with SQL query like capacity. In reality, the ledger is sequenced, and you can’t change the state of a transaction once it gets on the ledger.

This makes the ledger quite robust.

Other features include read-only queries, read-only histories, signatures of the transacting peer, and many more. But I will talk about them in a bit about the Hyperledger fabric architecture diagram.

Another great thing about the ledger is that it comes with access control lists so that only the person that has access to it can see it. In reality, if a person doesn’t have the right to see the information, then he/she can’t penetrate the security protocols.

### **Identity**

Well, the Hyperledger fabric architecture diagram indicates that the system is permissioned. So, if they don’t have any identity management, how will that work, right? In reality, Hyperledger Fabric smart contract offers a membership identity service that helps to manage all the identities in the permissioned network.

With the help of this element, you can choose who can enter the network and who can’t. And so, you will ultimately limit your internal network from outer reach.

### **Consensus**

Now for the most important part of the architecture. Well, in reality, it offers a unique approach for reaching consensus makes it perfect for the enterprise-grade solution. In reality, Hyperledger Fabric consensus algorithms operate on Kafka model.

But it’s just for reference purposes. In reality, you can use other consensus mechanisms for ordering purposes as well. This is actually one of the best features of Hyperledger fabric consensus algorithm.

It actually lets the user set the consensus protocol for the environment without limiting their creativity. You can also use multiple consensus protocols for multiple processes as well.

Anyhow at present, multiple pluggable Hyperledger fabric consensus algorithms are being proceeded at the moment. Also, the ordering services allow BFT based algorithms.

Furthermore, the new version of the tech brings a new addition to the consensus, which is Raft. However, it’s not Byzantine fault-tolerant but only crash fault-tolerant. And so, you cannot fork it as well.

Anyhow the Kafka model is also CFT and not BFT. But as the system is permissioned and only trusted people can come in, Kafka model is working effectively fine.

To maintain the integrity of the system, Hyperledger fabric consensus algorithm is a must. Now let’s see what the properties of the consensus are.

- **Liveliness**: Here, all the nonfaulty nodes will get the submitted transaction.
- **Safety**: All the nodes in the system will get the same sequence of output for the same sequence of input. So, it means that when the nodes get identical transaction series, all the state changes will be the same as well.

  ***

  - ### **Solo**
    - In reality, Fabric consensus algorithm Solo is mostly a developer's favorite algorithm for experimenting. Furthermore, it only includes a single node and definitely not suitable for production scenarios.
  - ### **Kafka**
    - Kafka is not a Byzantine Fault Tolerant but a crash fault-tolerance consensus algorithm. Here, the leader node will do all the ordering. On the other hand, in-sync replicas are the ones that are leaders. But after certain votes, you can choose a leader on the network.
  - ### **Raft**
    - In fabric, the Raft Hyperledger fabric consensus algorithm follows a leader and follower type model. In reality, all the leaders are dynamically selected from a batch of ordering nodes within the network. More so, the leader mainly replicates any messages to all of the following nodes.
    - However, the system can withstand the loss of nodes and even the leader nodes. But there needs to be ordering nodes available on the network. So, it’s a CFT and not a BFT.
    - For example, if there are 7 nodes in the network, it can withstand losing three nodes leaving the other four nodes.

### **What’s the Process?**

- Endorsement
- Ordering
- Validation

Basically, it follows these steps:

- A client will request for a transaction.
- The SDK application will then generate a transactional proposal and send it to the endorsing peer nodes.
- After that, the peers would verify if the transaction proposed follows the standard form, contains the signature of the client and its valid or not, and if the client has permission for that.
- Next, the transaction proposals input the argument and then passed to the smart contract or chaincode or to other SDK applications.
- Then the application will verify the signatures and will compare proposal responses.
- Later, it will broadcast the transaction with write/read sets and signatures to the ordering nodes.
- The ordering nodes then prepare the block, and after that, they transmit it to all the peers.
- All the peers get the updated block added to the chain, and the block gets added to the database as well.

---

## <font id="chapter4">Identity, Membership and Peer Management</font>

### **Identity**

In the blockchain network, there are many actors, such as administrators, orderers, peers, client applications, and many more. All of the actors have to get certification in order to enter the Hyperledger network.

In reality, these actors get certified identities to ensure that they have permission to access information in the network.

### <font size=4em>Peer Management</font>

### What are Peers?

There is no blockchain network without peers. In reality, peers host smart contracts and ledgers. More so, they actually form the whole blockchain network. Without peer nodes, there actually won’t be any running system.

In Hyperledger fabric docs, we see that there are many elements that interact with peers. Not only ledgers but also Hyperledger fabric smart contract relies heavily on these elements.

Anyhow there are some specific peer node roles within the Hyperledger fabric samples. In reality, all the nodes within the system don’t play the same position. Furthermore, all the tasks, functions get divided up between the peers. And together they can establish a middle ground of fairness.

### Peer Roles in the Network

- **Anchor Peers**
  - All the anchor peers happen to be considered outside the organization network in the system. Initially, when anyone sets up the network at first, the anchor peer gets included
  - However, the primary target of the Anchor peer is to use gossip to communicate and discover other anchor peers from different organizations.
  - As multiple organizations can co-exist in a network, other parties need to know what organizations are in the system. Thus, the anchor peers come in. However, they can only communicate with other Anchor peers but not with any non-anchor peers.
- **Non-Anchor Peers**
  - Many organizations set up other peers beside anchor peers for many reasons. Basically, these peers can help to make the network deal with any disaster situation. Anyhow, non-anchor peers are basically a part of the channel, and they can communicate with other non-anchor peers in the channel.
- **Bootnode Peers**
  - According to Hyperledger fabric docs, bootnode peers happens to be an integral part of the system. They help other peers within the organization to discover more peers and initiate gossip protocol. More so, the gossip protocol allows them to exchange different information regarding the system.
- **Leader Peers**
  - Within an organization, there can be multiple peers. However, only one of them can actually take in new block order and distributes them among other peers. In reality, this type of peer is called Leader peer.
- **Endorsing Peers**
  - In reality, all the peers with Hyperledger fabric smart contract installed can take part in the endorsing processes. Mainly here, the participant’s sign the transaction based on whether it’s valid or not. Think of it as a consensus process, and here, the endorsing peer’s can only take part.

---

## <font id="chapter5">Elements of the Ecosystem</font>

![](https://101blockchains.com/wp-content/uploads/2019/09/hyperledger-fabric-use-cases-and-companies.png)

- ### Ledger

  The ledger in the system contains all the elements or state of the organization. In reality, think of it as a form of database where all the transactions are stored in an orderly manner. Anyhow the characteristics of a ledger in the system are what makes this new tech so lucrative.

  In reality, no one can alter the ledger once any transactional data gets an entry in it. Moreover, even if anyone tries to change the values, it doesn’t work. More so, as everything is in an orderly manner, anyone can query search to find out any information regarding the transactions.

  ***

- ### Word State

  Here, the word state refers to the database that happens to collect all the cache data to find out the current values of the ledger. Thus, it makes it relatively easy to directly access the values rather than calculating it from the log.

  Well, you can create, change, or update word state in the system. So, the value will change frequently.

  Moreover, as it has a database structure, you will get a lot of other attributes to interact with the states as well. In reality, multiple applications adding transitions in the ledger will change the value of the state.

  ***

- ### Block Structure

  **Block Header**: The block header contains a block number which starts from the number zero or genesis block. Once new blocks arrive, it increases by one. On the other hand, it also contains a current block hash address and also the hash address of the previous block.

  **Block Data**: In this section, all the transactions are arranged in order. In reality, the ordering service actually creates this section. Even though the transactions are rich, but they do contain a straightforward structure.

  **Block Metadata**: Well, in this one, you will get the time, certification, signature of the block writer, pub key, and many more. Anyhow, there will be an indicator that would say whether this one is valid or not. Even though you would not see it in the hash information.

  ***

- ### Transaction Structure

  **Header**: Here, the essentials of the transaction is included, such as metadata of the relevant chaincode version.

  **Signature**: Here, the signature of the client is stored. In reality, it’s very important to include it to see if the transaction is valid or not.

  **Proposal**: The proposal contains all the input parameters for the transaction. In combination with the world state, it creates a new world state.

  **Response**: In this one, the before and after the state of the world state gets noted down. If the transaction is valid, then the system would use it.

  **Endorsement**: Here, all the signs form the endorsing peer is included. It depends on the endorsement policy mainly.

  ***

- ### Private Data

  In case of keeping some of the information private form other parties, an organization gets the feature of creating a private channel. Here, they can only include the members that can see the information and keep other members out.

  However, in all the private channels, there needs to be an administrative head to maintain all the Hyperledger fabric smart contract version and other policies. Moreover, it also doesn’t allow any use cases that can include other participants outside the channel.

---

## <font id="chapter6">What Are The Use Cases?</font>

- ### Food Safety

  Food safety is another great opportunity for Hyperledger fabric use cases. Because of the latest mass production of foods, the quality seems to be decreasing at a rapid rate. On the other hand, many companies aren’t following the safety codes properly.

  As a result, the common people suffer from foodborne diseases. To ensure the full safety of the mass-produced food, the companies can use this network to track all of the processes.

- ### Information Technology

  I guess the IT sector is the most prominent Hyperledger fabric use cases. In reality, this sector is responsible for keeping the system running in a business network and making sure that the data is protected.

  However, due to the use of legacy network systems, this sector is relatively falling behind. More so, people manipulating the data for their personal gain is more prominent than ever. However, with the help of this new tech, companies can now get the full security they need.

- ### Supply Chain Management

  Supply chain management is truly a great industry where Hyperledger fabric use cases can shine. However, this industry is one of the hardest ones to manage so far. In reality, every single step of this supply chain management is utterly complex.

  Tracing all the supplies and production line and making sure that it reaches the customers without being stolen is tough.

  But with the new technology, these industries can streamline everything in real-time. It would be an easy call to see if the supplies have quality, or checking the production line or even storing them properly.

---

## <font id="chapter7">Companies Using Hyperledger Fabric</font>

- ### U.S. Food and Drug Administration (FDA)

  Well, you already know by now that healthcare data needs a high level of security and Hyperledger fabric can provide that with ease.

  In reality, the FDA is using this new tech to offer security for the healthcare data. Moreover, the platform provides tremendous benefits to the patients. Using this platform, the patients can manage their medical data more independently. Also, with proper use, the platform can lead to great medical discoveries.

  Anyhow, at present, it’s storing Electronic Medical Records (EMR), genomic information and clinical trials.

- ### Maple Leaf Foods

  Maple Leaf Foods is also on the list of companies that are using Fabric to back their supply chain management. At present, they are taking technological support from SAP as they offer BAAS services. Moreover, they want to streamline their supply chain processes as tending to deal with a lot of losses.

  In reality, using this new tech would not only streamline their output, but it would give them a new level of transparency.

  According to them, digitization would always lead to more efficiency, and they want to embrace the distributed ledger technology as well.

- ### Naturipe Farms

  The berry company Naturipe Farms is also working on a supply chain management platform. Here, they are using Hyperledger Fabric to accomplish their project. At present, they are taking support from SAP.

  Anyhow, the project is going to track their blueberries all the way from the harvesting period. More so, the workers there will add QR codes to tell the story of how the blueberries came from the frilled to the hands of their customers.

- ### Nestlé

  Along with France’s biggest supermarket chain Carrefour, Nestlé is working on a food traceability platform. For that, they are using Hyperledger Fabric as the base tech for their project. More so, they are taking IBM’s technological help for it.

  Anyhow, the project is currently in the trial period now and will run for about six months to see how it works. At present, they are only tracking Mousseline purée, and it will help their customers to know how it was produced.

  So, to do that, the customers can go to the store and scan the QR code to see the journey from farm to the super market of the potatoes. The primary is to offer more transparency in every way possible.
