# Hyperledger Sawtooth: Blockchain For Business

- <a href="#chapter1">What is Hyperledger Sawtooth?</a>
- <a href="#chapter2">Elements of the Hyperledger Sawtooths Architecture</a>
- <a href="#chapter3">Hyperledger Sawtooths Development – Architecture Description</a>
- <a href="#chapter4">Hyperledger Sawtooths Offering Live Demo Applications</a>
- <a href="#chapter5">Hyperledger Sawtooths At Work</a>
- <a href="#chapter6">Concluding Thoughts</a>

Hyperledger is an enterprise blockchain project, and Linux foundation is behind it. However, it’s only an umbrella project, and there are many blockchain projects in work under it. Among them, Hyperledger Sawtooth happens to be one of the popular ones. Additionally, many enterprises are already using this incredible new platform.

## <span id="chapter1">What is Hyperledger Sawtooth?</span>

Hyperledger Sawtooth is an open-source blockchain project under the enterprise blockchain platform Hyperledger. It's a perfect solution for developing networks and distributed ledger applications.

Well, according to the Hyperledger Sawtooth documentation, it actually simplifies the whole process of application design. In reality, the application domain is wholly separated from the core system. Thus, it makes it simpler to try out applications without affecting the core system in any way.

Moreover, you can also use any programming languages to develop the application as well. But you won’t need to know what the actual design of the core system really is.

Another great deal about this platform is that it’s highly modular. More so, it helps the enterprise make the right decisions about the overall policy of the network. Needless to say, the Hyperledger Sawtooth course is suited mostly for consortia or similar environments.

Additionally, you’ll be able to choose permissions, transaction regulations, consensus protocols, and many more according to your needs. So, you are getting a flexible environment for any kind of business.

![](https://101blockchains.com/wp-content/uploads/2019/09/hyperledger-sawtooth.png)

### **A Distributed Ledger Technology**

Blockchains fall under the distributed ledger technology category. And similarly, Hyperledger Sawtooth course also falls under it. More so, there isn’t any central authority in the network. So, it’s fully distributed among all the nodes.

More so, no can alter the database and hack his/her way through the network. So, once a transaction gets added, it stays there.

Signs of all the identities makes sure any new transaction is valid. And this how the network keeps everyone in check.

### **Features of Hyperledger Sawtooth**

- **Application Development Friendly**

  It provides the application development a more easy ground by separating the application domain from the core system. According to the Hyperledger Sawtooth documentation, the sole purpose of this separation is to ensure that no core feature is ever affected for any new additions ion the application layer.

  Moreover, it means that when you are on the application layer developing dApps, it will take up resources, but others using the core system won’t be affected by it.

  Thus, there’s no slowing down or low-efficiency issues here.

  That’s why this platform is suitable for developing apps. Another great thing according to the Hyperledger Sawtooth documentation is that an application can be anything. Furthermore, native business logic can easily coexist with another smart contract VM.

  ***

- **Permissioning Features**

  You have to know that Hyperledger Sawtooth is a permissioned platform. Moreover, not anyone can just get an entry to the network. That’s why this platform is suitable for the enterprise environment. According to the Hyperledger Sawtooth documentation, you can also gear it for a public environment as well.

  For example, you can use the same technology for your internal networking system and for customer interactions as well.

  In reality, this type of flexibility if the enterprise blockchain platform is quite rare. As in most cases, they are either public or private. Anyhow, with the help of an identity management protocol, you can pre-select the nodes that can enter the platform.

  ***

- **Private Network**

  According to the Hyperledger Sawtooth documentation, anyone can deploy a cluster of nodes within a separated channel in the network.

  And this process would create a private session for those nodes specifically. On the other hand, the enterprise does need to have private environments. There are many elements within a company that shouldn’t be out in the open for the prying eyes.

  Moreover, as there isn’t any centralized authority, no one can just take a peek at the sensitive information you stored on the platform. But you need to remember that, even if you are within a private channel, the transaction values will cease to exist in the ledger. Although no one will be able to see it.

  ***

- **Execution of Parallel Transaction**

  According to the Hyperledger Sawtooth documentation, the platform uses a different approach for transactions. In a typical case, the blockchain for enterprise platforms use a serial transaction process. But when too many users’ starts using the platform, processing every single transaction becomes relatively hard.

  So, instead of being a fast one, it slows down gradually. But to ensure that Sawtooth doesn’t lose the efficiency, they execute all the transactions in parallel to each other. It means that multiple transactions can be executed at the same time.

  ***

- **Modular Structure**

  According to the Hyperledger Sawtooth documentation, the modular structure creates a different kind of flexibility for the enterprises.

  With the help of this feature, developers are free to use any type of consensus algorithms or any kind of feature they want. It’s a plug and play scenario, and it’s super easy to do.

  Another big plus point is that at the same time, multiple consensuses can work in multiple parts of the same platform. So, you can choose the best combo that goes with your industry.

---

## <span id="chapter2">Elements of the Hyperledger Sawtooth Architecture</span>

### **Event System**

With the event system, the Hyperledger Sawtooth supports broadcasting and creating events. So, this feature allows:

1. Nodes to subscribe to all the events that are happening on the blockchain. For example, when a new block is getting added or if the network is switching to a different fork.
2. To subscribe to other application events that came from the transaction families.
3. Broadcasting the information to all other nodes on the channel without storing the final state in the state storage.

### **Transaction Receipts**

Another point of Hyperledger Sawtooth smart contract is the transaction receipt. With the help of this element, the clients can get information about their transaction, but these aren’t stored on the state stage.

- Information about if the transaction is valid or not.
- What events happened during the transaction execution?
- How the transaction execution changed the state?
- Any transaction family-spesific execution information.

### **Ethereum Contract Compatibility with Seth**

Well, one of the best features of Sawtooth is the Ethereum Contracts compatibility using Seth. Moreover, it creates a new milestone for the Hyperledger Sawtooth smart contracts. The Seth or Sawtooth-Ethereum Integration Project will create a link between the two platforms.

So, using the EVM, you can deploy smart contracts within the Hyperledger Sawtooth environment.

But how did they manage to pull it off?

In reality, to ensure that they worked with Hyperledger Burrow and took their EVM implementation. So, using the Burrow EVM, the Sawtooth integrated the environment within Sawtooth as well.

Another main objective of this feature is to help make the DApps and other EVM smart contracts be easy enough to port into the network. So, for that, they replicated the Ethereum JSON RPC API.

### **Pluggable Consensus Algorithms**

With Sawtooth, you will get a different kind of consensus protocol altogether. One of the best features of this Hyperledger Sawtooth architecture is the use of different plugging in consensus methods. Another great part is 5he fact that it will allow you to run multiple consensuses at the same time in the platform.

At the time of setting up the network, you can easily select the one you wish to use. Moreover, you can change it later and even while transacting.

Anyhow at present, it comes with 5 different consensuses for you to select. They are:

- **Devmode**
  - Devmode (short for "developer mode") is a simplified random-leader algorithm that is useful for developing and testing a transaction processor. Devmode is not recommended for multi-node networks and should not be used for production.
- **pBFT**
  - This one is actually a leader based consensus algorithm. Unfortunately, you can’t fork PBFT. But on the plus side, you are getting a Byzantine fault tolerance algorithm. In reality, this one is more suited for smaller environments and definitely not the best one for any consortium type environments.
- **PoET CFT**
  - Another name for this one is PoET simulator. In this one, there’s an SGX kind of simulator environment that allows these algorithms to run freely. However, it will offer crash fault tolerance like output similar to other platforms.
  - But you need to have poet-validator-registry TP. Moreover, you can run this on any kind of processors. However, it’s not Byzantine Fault Tolerance, and that means it’s only CFT.
- **PoET SGX**
  - In this version of PoET, it will use the SGX. And with the help of SGX, it can offer Byzantine Fault Tolerance similar to PoW. However, it only needs a relatively low amount of CPU power.
- **Raft**
  - Sawtooth Raft is a leader-based consensus algorithm that provides crash fault tolerance for a small network with restricted membership.

### **Sample Transaction Families**

In many cases, the enterprises actually seek a fixed process for the transaction because that limits the risk to a great extent.

So, for those cases, you can simply use the ones we offer or even model one on your own. Thus, this makes the transaction family an integral part of the Hyperledger Sawtooth architecture.

For example, one of the families called Integer Key actually offers only 3 kinds of operations such as set, decrement, and increment. So, with only these 3 parameters, it’s relatively hard to make any mistakes or hack into the system.

But why did Hyperledger Sawtooth introduce them in the first place?

Well, in Hyperledger Sawtooth architecture, the developers wanted to make sure that businesses can just pick the versatility that they wanted. So, in short, they help to extend the flexibility of the network.

There are some interesting facts about the transaction families:

- You can use any language to write a new one.
- There are SDKs available for C++, Java, JS, Go, Python, Rust and many more.
- All of them run seperately from each other in a parallel space, thus giving the network space for upgradability.

#### **Families**

- **BlockInfo Transaction Family**

  - One of the most common features of this family is to offer the ability to reference other information while the nodes are in transit. Well, for example, in the EVM the platform actually defines a BLOCKHASH, which in short helps the processor to get access to the hash function of the previous blocks.
  - So, that helps the processor to hash the new one accordingly.
  - In reality, the Blockinfo actually offers a way to store any information about configurable historic blocks.

- **Identity Transaction Family**

  - This transaction family helps to manage all the identities within the system. In case of any on-chain permissions, a validator key and transaction key is absolutely necessary. Moreover, both of the parties need to have proper authentication permission to do that.
  - But all of these complex information becomes a hurdle to manage. However, with the help of an identity transaction family, it is extremely easy to manage them.

- **IntegerKey Transaction Family**

  - Another family within the Hyperledger Sawtooth architecture allows the users to set, increment, or decrement the value of entries of the state dictionary.

- **Validator Registry Transaction Family**

  - Well, with the only validator, the system could crumble down when there are far too many users within the network. So, to help out in that matter, the Validator transaction family offers a way for adding up new validators in the network.

- **Settings Transaction Family**

  - There’s a lot of things that go on the channel and if they are properly stored the whole un-hackable environment if blockchain would fall apart.
  - That’s why the Settings transaction family helps to maintain a method that ensures the storage of on-chain configurations. In reality, on-chain and off-chain configurations can vary without affecting one another.

- **Smallbank Transaction Family**

  - Well, you created a new framework. But now you have to see how it really performs. Now how will you do that? In reality, the Smallbank transaction family allows users to benchmark the framework and see how they are performing.

- **XO Transaction Family**
  - I have to see this transaction family is one of the lightest one within the Hyperledger Sawtooth architecture. But why? Well, this one will allow you to play a game of tic-tac-toe with another user.
  - The coding system within this family helps developers see the reference structure for the transaction family.

---

## <font id="chapter3">Hyperledger Sawtooth Development</font>

- ### **Global State**

  One of the significant elements of Hyperledger Sawtooth development is the use of a global state. In reality, to make sure that all the ledger copies among the nodes within the Byzantine consensus are a robust quality of blockchain itself.

  Thus, to maintain that, Sawtooth takes all the transaction families within a single instance called Radix Merkle Tree. Moreover, the validation of blocks in every validator of the same transaction produces the same state and same results.

  Also, the state gets split into other namespaces to make sure that all the transaction family will share, define, and reuse the global state data of the transactions.

  - **Radix Merkle Tree**
    - Hyperledger Sawtooth development includes an addressable Radix Merkle Tree for storing all the transaction families. For example, the tree is actually a Merkle tree that can save the copy on write data from leaf to root.
    - So, for a number of transitions connected to a block can help generate a single root hash for that specific transaction. What the platform does here is to place that root hash on the block header of that transaction block.
    - So, when a validator’s transaction ends up in a different has address than the Merkle one, then that block will not be valid and this is how they tend to reach consensus without relying on sole witnesses. It’s definitely a great approach.

- ### **Transactions and Scheduling**

  You can modify a state only if you create and apply for a transaction. Moreover, for transactions, the client needs to create a transaction, and then he/she can submit it to the validators. After that, the validator will apply transaction, and that would cause a massive change in the state.

  Another Hyperledger Sawtooth development quality is that transactions will belong to a batch. Every transaction of a single batch would state together. But in some case, no state at all. And so, batches are one of the first change of unit for the state.

- ### **Validator Network**

  Validator Network is another element to the Hyperledger Sawtooth development. In reality, the network layer is responsible for ensuring the communication within the validators. It also includes peer discovery, connectivity, and message handling.

  During startup, the validators start listening to a specified interface and other ports for any kind of incoming connections. Furthermore, once the connection happens, the validators can exchange messages according to the rule of gossip protocol.

  The main target of the network is to keep the network layer as self-sustained as possible. In reality, the network layer doesn’t get any information about the application layer messages or any data on the application layer. So, the payload is relatively reduced on the network layer, and peer connectivity is real fast.

### **States**

- Connected: Here, any kind of prerequisite connection is needed for peering.
- Unconnected
- Peered: Here, a bidirectional form of connection happens, and they can use it for relaying messages.

- ### **Validator Network Scenarios**
  - **Public Network**
    - For a public network, all form of connections are allowed on the channel. And every single person can sign transaction and batches.
    - For ensuring that a public Sawtooth can take off, you would need an incentive system beforehand. It would ensure that there are no security concerns of the public network.
  - **Private Network**
    - For a private network, only the predefined validators can enter the validator network channel. More so, no one other than the validators can participate in consensus.
    - Again, if a client has permission for requesting transactions only, then the validator will accept the request. Or else, the validator will reject the client’s request, and the transaction would be invalid.
  - **Consortium Network**
    - With the consortium type of environment, there are only some specific validators that can join the network and use the transaction feature. However, any client can submit a transaction, and the validators would have to accept them if they are valid.

---

## <font id="chapter4">Hyperledger Sawtooth Offering Live Demo Apps</font>

### **Supply Chain**

With Hyperledger Sawtooth database, you’ll get to try out their supply chain live demo application. Not only it exhales at revolutionizing the supply chain, but it also saves a lot of time. Anyhow, at present as a model they are offering seafood traceability.

In reality, for that, they are bringing accountability and traceability with the help from Hyperledger Sawtooth database.

- ### What’s The Modern Approach to Supply Chain?

  - The platform takes a modern approach to merge the physical and digital world under the same network. Furthermore, you'll be getting the overall journey of seafood from the moment it's caught to the table.
  - For this live demo, they will attach IoT sensors to help track all the foods after it was caught. More so, with the help of IoT sensors, you can easily check their real-time motion, humidity, temperature..
  - Also, it would help to tackle any ownership agreement and possession along with their geographical location at all times. The best part is that you can see everything from the platform itself.
  - In reality, as everything will log on to the immutable ledger system, the buyer can easily trust the data. Thus, the final buyer can use Sawtooth database as the proof he/she needs before he buys the product.

  ***

  - ### Why Introduce This Live Demo?
    - Manual record-keeping gives a rise of errors, so it’s hard to know what’s real and what’s false.
    - With real-time investigation, there’s no way of knowing whether the food is stored at a perfect temperature. And in large supply chain management, it becomes difficult to manage.
    - Due to the loss of regulations and proper tracking system, there are a lot of illegal products within the supply chain.
    - There's also the scope of fraudulent activities among the employees.
    - Most of the products lack quality and security when it comes to supply chain.
    - The system does not promote sustainability but rather waste a lot of resources.
    - Also, the lack of consumer trust and vendor action harms the brand value of many enterprises.
    ***
  - ### Hyperledger Sawtooth Example: How It Works?
    - Firstly the fisherman catches the seafood and then tags them with IoT sensors.
    - Next, all the sensors start transmitting information back to the network with the location of the seafood.
    - It goes through many distribution channels and the platform track each one of the sites.
    - Before the buyer buys the seafood, he/she can use the platform to check the fish’s provenance.
    ***
  - ### Is There Any Advantage?

    - Extreme transparency runs throughout the whole process of supply chain
    - Automated process saves a lot of costs and time
    - Gets rid of man-made errors and creates a streamline of correct information
    - Connects with better suppliers and promotes consumer trust.

      Well, the food supply chain is just a demo. You can easily customize the solution to go with your specific supply chain niche. In reality, no matter what customization you do, it would still offer the same benefits.

---

## <font id="chapter5">Hyperledger Sawtooth At Work</font>

### **T-Mobile**

Let’s start with Hyperledger Sawtooth example. In reality, T-Mobile is using Hyperledger Sawtooth Lake for their solution. At present, they tend to use it for their access and identity management solution named Sawtooth Hyper Directory.

Moreover, it would run on the <a href="https://101blockchains.com/blockchain-proof-of-concept/">Proof of Concept</a>, and they are getting technical backup from intel. With the help of Hyper Directory, you can address any issue of identity management. As you know, the identity management industry deals with a lot of problems, and identity theft is quite prominent.

Anyhow, they made sure that the UI is quite easy to navigate and is web-friendly. Other than this, they are also introducing a smart contract feature for the auditing issues.

### **State Bank of India**

Apparently, they are using Hyperledger Sawtooth Lake for their consortium platform BankChain.

In reality, the State Bank of India founded the platform. For their technological backup, they are working with Primechain because they are specialized for consortium platforms. Anyhow, at present they have over 27 members on their platform. Apart from banks and other financial institutions of India, there are other Middle East companies as well.

### **ScanTrust**

ScanTrust is actually a SaaS company that is using Hyperledger Sawtooth Lake. In reality, they offer different products that help their consumers connect to the internet with the help of unique identification.

Furthermore, they also offer copy proof QR codes that bring in more transparency, trust, and traceability for any supply chain management system.

And what can be a great platform for it other than Sawtooth, right?

Anyhow, with the use of the platform, they will operate a traceability feature of their existing applications. It would ensure that no one can misuse their technology in any way. Many companies are already using their solution, and consumers can even tip the suppliers based on the provenance.

### **Wind River**

Wind River is fueling their SParts project with the help of Hyperledger Sawtooth Lake platform. In reality, they are using this platform for their Software Parts Ledger platform that can track any software component right from when the manufacturer develops devices and products.

You will get many benefits for knowing where all the open-source component comes from such as:

- Makes sure that all manufacturers can secure and identity all the licensing of software form the source.
- Ensure more security for open source vulnerabilities.
- Provide identification for cryptography technologies.
- Offer a higher level of open source reports with accurate information for better judgment.

### **AMCHART Project**

The <a href="https://medium.com/@double9917ad/amchart-earn-from-your-own-healthcare-data-d2237b4d5ba6">project</a> is actually an Electronic Health Record worldwide and highly secure. In reality, it will definitely change the way healthcare deals with provider records and patient information. Thus, it will evidently increase security and portability.

Anyhow, the project will use Hyperledger Sawtooth to back up its platform. Moreover, with the help of the platform, you will get an efficient management system.

But along with the Sawtooth, they would also use Ethereum Smart contracts to streamline the payment process of the healthcare industry. Anyhow, it’s a great example of Sawtooth use.
