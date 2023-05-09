# Orderer Binary

The orderer is implemented as a single binary. It requires the **Genesis block for initialization** and the **runtime properties** for the orderer is managed in a configuration file in YAML.

- Properties may be overridden by setting Environmental Variable

Fabric network needs a messaging infrastructure for the distribution of blocks. This messaging infrastructure is provided in three ways. Either can be **SOLO | RAFT | KAFKA**

- SOLO is built into the binary for the orderer. But since it's built into the orderer, it can't be used in the form of a cluster and that means there can be only a single instance of SOLO, which means that it is introducing a single point of failure as a result.
- KAFKA is a high throughput High-Performance messaging system. Fabric may be configured to use Kafka, and in this setup, multiple order instances connect to the Lafka cluster. If any of these orderers go down, orderers that are available in the network will continue to look like so low.
- RAFT messaging is also built in the order of binary. Unlike SOLO, RAFT support clustering and what that means is that you can have multiple instances of orderer set off with the Raft and all of these will be able to communicate with each other.

  ***

In Fabric 2.0, SOLO and Kafka type orderer are deprecated. It is **recommended that RAFT be used or for binary needs access to the Genesis block** and this access is provided to the order of binary.

Order Binary depends on the use of crypto service providers. Cryptographic functions such as encryption and decryption are not built in the binary. There in the crypto service provider.

Once the Orderer Binary has been initialized using the Genesis Block, It can be launched, the very first thing it looks for is the order.yaml file, which is made available to the orderer binary by way of the enlargement variable.

Orderer Binary also needs access to the orderer MSP successful launch of the orderer leads to the managing of ledger data in the filesystem.

Orderer binary writes log messages to stderr. Verbosity of the logs is controlled by way of env variable. Allows modulel level logging.

---

## Test Environment Setup

`orderer/simple-two-org` commands will be used.

In these setup there are two organizations; _order organization_ and _org1 organizaton_. Crypto material will be used by the orderer organization.

Orderer will write the ledger data to the ledger folder. The location of the ledger folder is defined by the leement location in the orderer.YAML file

> Location: `/home/vagrant/ledgers/orderer/simple-two-orgs/ledger`

Orderer binary uses, levelDB. LevelDB is the one that uses the ledger folder location to right deep block data. If the ledger folder location is set to a network drive or to a host file system from the virtual machine, then unexpected errors may be encountered by levelDB, in which case the orderer will fail to launch.

- `./init.sh all`
  - Copies from setup/config/simple-two-org
    - crypto-config.yaml, configtx.yaml & orderer.yaml
  - Initializies the network artifacts
- `./init.sh`
  - Initializes the setup by using _YAML_ in folder
- `./launch.sh`
  - Launches the _orderer_
- `./clean.sh`
  - Cleans the _ledger_ but **NOT** the artifacts.
- `./clean.sh all`
  - Cleans the ledger & the network artifacts

### Orderer.YAML file

orderer.YAML file has multiple section.

- **General:** General properties of the orderer.
  - ORDERER*GENERAL*...
- **FileLedger:** Filesystem Location to which the Orderer persists the ledger data.
  - ORDERER*FILELEDGER*...
- **Consensus:** Used for managing storage for orderer type _etcdraft_.
  - ORDERER*CONSENSUS*...
- **Kafka:** Kafka environment setup
  - ORDERER*KAFKA*...
- **Debug:** Debug information control.
  - ORDERER_DEBUG...
  - `BroadcastTraceDir`: Request to broadcast service written to the specified directory.
  - `DeliverTraceDir`: Request to deliver service written to the specified directory.
- **Operations:** Operations endpoint used for network monitoring | alerting.
- **Metrics:** Configuration for collection of metrics emitted by orderer.
  - When Orderer Binary launched, it looks for the value in the environment variable **FABRIC_CFG_PATH**. This variable points to folder with _orderer.yaml_
  - If the environment variable fabric not set, orderer binary sends error.

---

## Orderer Configuration

### Genesis Block & Ledger State

- Orderer initialized without a system channel.
  - Require manual channel creation step.
- With a system channel
  - Requires the genesis block.

The initialization of the orderer is referred to as bootstrapping. In General section;

- `BootstrapMethod`:
- **none** - Without system channel
- **file** - `BootstrapFile`: Location of the genesis block file

In orderer.yaml file there is a BootstrapMethod in General section and BootstrapFile.

There are two parameters that are available under the file ledger. First one is;

- **Location:** Directory for the Ledger data (json or db files)
  - If this i s not set then a temporary files used.
- **Prefix:** Used as a prefix for temporary ledger files.

If you have specificed location, then prefix is ignored in the file ledger section.

In location folder, there is an index file it's our ledger data. In `launch.sh`, there is an environment variable `ORDERER_FILELEDGER_LOCATION`. This variable is the location also.

### CSP (Crypto service Provider) & MSP

A crypto service provider exposes the cryptographic functions such as;

- encryption,
- decryption,
- key-pair generation,
- private key,
- security,
- creation of message and many more.

  ***

- Orderer leverages CSP for crypto functions.

**CSP Implementation**

The CSP implementation is available in the form of software. There are software libraries such as Windows or Linux shared objects that implement the CSP in software.

- Software CSP
  - Implemented as software binaries.
- Hardware CSP
  - Hardware Security Modules (HSM)
  - Smart Cards

> Orderer CSP is configurable.

It can be configured to use the software based CSP or it can be configured to use PKC as elevent compliant CSP built in the hardware.

---

The CSP configured for the orderer by providing the parameters under the;

- `BCCSP`: **B**lock**c**hain **C**rypto **S**ervice **P**rovider
  - Under the BCCSP, there is a subsection _default_.
  - **Default**: Preferred provider
    - `SW` - Software based CSP
    - `PKCS11` - Hardware based CSP

If the default is set to be software, then you need to create a section for defining the parameters

- `SW`:
  - `Hash` - Hashing Algorithm // SHA256
  - `Security` - Key size //
  - `FileKeyStore` - Location of the keystore
    - `KeyStore` - Defaults to LocalMSPDir/keystore

If you don't provide the file keystore value, then in that case the default is local MSP directory/keystore

> BCCSP setup **MUST** be consistent across network.

The orderer MSP is set up by way of providing values for two elements under the General section.

- `LocalMSPID` - Local MSP ID MUST match Orderer Org's MSP ID
- `LocalMSPDir` - Local MSP folder for the crypto material

### gRPC Setup

The orderer need to be setup for accepting connections from the peers. This is done by setting two configuration elements.

- `ListenAddress` - IP address on which _orderer_ will accept incoming connections
- `ListenPort` - Port number. Typical port number = _7050_

The GFC server implementation allows the TCP connections to kept alive. That is open and this is done for the TCP resource optimization purpose.

- `KeepAlive` - Connection keep alive for _GRPC_ server.

```
GRPC server also send pings to the peer on a periodic basis. Now, how frequently these pings are sent is determined by the server interval.
```

- `ServerMinInterval` - Server disconnects if heartbeat repeat less than this time
- `Server Interval` - Time between pings to the client

**gRPC has the tls SSL integration**

That is supports transport layer security for several tenth occasion for encryption of data or;

- Server Authentication
- Data Encryption
- Client Authentication

1. Enabling the TLS

- `TLS` - Transport Layer Security Configuration
  - `Enabled` - true | false
  - `PrivateKey` - Path to the `server.key`
  - `Certificate` - Path to the TLS certificate `server.crt`
  - `RootCAs` - List of Root CA's TLS certificates `ca.crt`

**Where these tls certificates come from?**

In a real production environment, these certificates are issued by the certification authorities within the organizations. But for testing these certificates are also generated by the **cryptogen tool**.

In `crypto-config/ordererOrganizations/acme.com/orderers/orderer.acme.com/` there is a msp and tls folder.

2. Setting up the Client Authentication

- `TLS` - Transport Layer Security Configuration
  - `ClientAuthRequired` - true | false
    - `false` = Accepts connection from any source
  - `ClientRootCAs` - List of Client CA certs that can be trusted

In our orderer.yaml file TLS Enabled is false, but we can owerwrite it with in `snippets/orderer.tls.sh` file commands. If you execute it Enabled will be true.

## Orderer Setup in Production

### Let's Recap

1. There is a **configtx.yaml** file that contains the type of the orderer under the orderer section.

2. This configtx.yaml file provided as an input the **configtxgen tool that generate the Genesis Block**.

3. The orderer then uses the Genesis Block for **initialization**. Since the orderer type is configured to SOLO, the orderer initializes and launches the **SOLO** at runtime.

   - Solo is built in the _Orderer binary_. In other words there's no seperate process for SOLO.

4. There can only be a single instance of orderer with the type SOLO. **This introduces a single point of failure in the network. If the orderer goes down, the entire network become unavailable. So you would never use SOLO in production**.

5. In production you will set to orderer type the **Kafka or RAFT**. Since the Kafka and Raft, both provide a cluster orderer setup, even if some of the components in the network go back, **the network will continue to operate**.

6. To setup to RAFT cluster, you need to create Genesis Block with the orderer type set to **etcdraft**. The genesis block is then used for the orderer initialization in the network.

7. Similarly for the Kafka setup the configtx.yaml file need to modified for the `OrdererType` to Kafka. Genesis block need to be generated. This Genesis block is then used by the orderers in the network to connect to the Kafka cluster.
   - In Fabric 2.0, Kafka order type is deprecated. **So the recommandation in Fabric 2.0, use for OrdererType = `etcdraft`**

## Kafka 101 // **DEPRECATED**

Apache Kafka is an open-source, publish-subscribe message system. It provides;

- High-Throughput
- Durable & Real time
- Highly Scalable
- High Performance

Orderers create to the blocks, and publish to the cluster. Peers receive the blocks as the subscriber of the messages and these messages are block data.

Channels on Hyperledger Fabric are created as topics of the Kafka cluster. For example, in our sample setup we have the orderer channel, so there will be an orderer topic which will be for the orderer channel.

Kafka installation depends on JAVA JRE8 and Apache ZooKeeper. In setup/kafka folder there is an install.sh file. start.sh and stop.sh for start and stop kafka server.
