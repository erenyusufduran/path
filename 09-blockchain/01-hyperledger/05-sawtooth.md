# Hyperledger Sawtooth: Blockchain For Business

- <a href="#chapter1">What is Hyperledger Sawtooth?</a>
- <a href="#chapter2">Elements of the Hyperledger Sawtooths Architecture</a>
- <a href="#chapter3">Hyperledger Sawtooths Development – Architecture Description</a>
- <a href="#chapter4">Hyperledger Sawtooths Offering Live Demo Applications</a>
- <a href="#chapter5">Hyperledger Sawtooths At Work</a>
- <a href="#chapter6">Hyperledger Sawtooths Course: Training and tutorial</a>
- <a href="#chapter7">Concluding Thoughts</a>

Hyperledger is an enterprise blockchain project, and Linux foundation is behind it. However, it’s only an umbrella project, and there are many blockchain projects in work under it. Among them, Hyperledger Sawtooth happens to be one of the popular ones. Additionally, many enterprises are already using this incredible new platform.

## <span id="chapter1">What is Hyperledger Sawtooth?</span>

Hyperledget Sawtooth is an open-source blockchain project under the enterprise blockchain platform Hyperledger. It's a perfect solution for developing networks and distributed ledger applications.

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
  - This consensus is mainly suited for development purposes. It will allow you to test drive the platform with one validator node. So, as you can see, it’s definitely not suited for production purposes.
- **pBFT**
  - This one is actually a leader based consensus algorithm. Unfortunately, you can’t fork PBFT. But on the plus side, you are getting a Byzantine fault tolerance algorithm. In reality, this one is more suited for smaller environments and definitely not the best one for any consortium type environments.
- **PoET CFT**
  - Another name for this one is PoET simulator. In this one, there’s an SGX kind of simulator environment that allows these algorithms to run freely. However, it will offer crash fault tolerance like output similar to other platforms.
  - But you need to have poet-validator-registry TP. Moreover, you can run this on any kind of processors. However, it’s not Byzantine Fault Tolerance, and that means it’s only CFT.
- **PoET SGX**
  - In this version of PoET, it will use the SGX. And with the help of SGX, it can offer Byzantine Fault Tolerance similar to PoW. However, it only needs a relatively low amount of CPU power.
- **Raft**
  - In this one, the algorithms need to have a leader for a selected amount of time. Moreover, when the timer runs out, the leader will automatically get replaced. In reality, Raft is way faster than PoET; however, it only offers CFT and is not Byzantine.

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
