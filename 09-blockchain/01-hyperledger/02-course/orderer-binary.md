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
