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
