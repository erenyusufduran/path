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

---

## <font id="chapter5">Elements of the Ecosystem</font>

---

## <font id="chapter6">What Are The Use Cases?</font>

---

## <font id="chapter7">Companies Using Hyperledger Fabric</font>
