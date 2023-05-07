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
