# Peer Configuration

Core.YAML has multiple section. Per section has the properties that control general behavior of the peer. For example, MSP configuration, networking and storage path where the peer is controlled by way of the properties under the peer section.

- **peer**: General properties e.g., Networking, MSP, Storage Path
- **ledger**: State database e.g., CouchDB connection
- **chaincode**: Chaincode runtime e.g., Logging, Startup timeout

Peer emits information about its internal state and this information is used for managing the peer instances.

Third party products or systems can intergrate the peer to carry out monitoring and alerting for the peer instances. The endpoint configuration for monitoring and alerting is managed under the **operations** and **metrics** section.

The last section is the **vm** section that has information regarding the use or docker containers within a virtual machine.

---

All parameters specified in the core.YAML file may be orderer by way of environment variables. Naming schema `CORE_SECTION_SUB-Section_PROPERTY`

- e.g. `CORE_PEER_LISTENADDRESS`

Make sure that you set `FABRIC_CFG_PATH` variable.

---

Peer writes data to the file system and there are certain parameters that need to be set for the file system writes.

Every peer in the network has an identity. Identity is assigned by way of an ID parameter under the general properties for the peer.

- **id**: Peer's identity `devpeer`
- **networkId**: Seperation of networks `dev`

The way it is used is that when the chaincode is instantiated, peer sets up a docker image and the name of the image is prefixed with he networkID. The peer process can be configured to listen on multiple addresses;

- **listenAddress**: Incoming gRPC connections; by default listens on all network interfaces.
- **address**: CLI config endpoint; other peers in the same org

If the **address** parameter is not set, then all incoming connections accepted on **listenAddress**.

> As a best practice always set the address parameter to a private IP address.

- **chaincodeAddress**: Chaincode listener address - Optional

There are two parameters for setting up the local MSP.

- **localMspId**: Must match with the MSP ID in the _genesis block_
- **mspConfigPath**: File system path for MSP local configuration for the crypto material.
- Peer writes to the file system, where path to peer write is specified at **fileSystemPath**. As a best practice this path must be protected and secured.
