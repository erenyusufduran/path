# Peer Binary

Peer binary is used for two purposes.

1. First one is launched as a peer process. It becomes a node in the hyperledger fabric blockchain network.
2. Second one is used as a utility for managing the **peer configuration** and the **network configuration**.

Peer depends on the availability of the configuration file in YAML.

- At runtime config may be overridden by **environment variables** at runtime.
- Path of the config specified in `FABRIC_CFG_PATH`

On launch the peer reads the location of `core.yaml` file then reads in all the configuration available in core.yaml, overrides any configuration for which the env variables have been set, reads the MSP and then connects to the orderer and writes data to the storage location.

---

Like the orderer, peer binary also has an embidded gRPC server and it exposes gRPC services. These gRPC services are used by clients, applications, utilities as decays and the peer binary itself.

Like the orderer, peer also leverages cryptographic service provider. In other words, functions for the cryptography are not built in the peer binary. They are provided by the CSP module.

- `peer command subcommand --flags`
  - help - Get help on commands
  - version - Version of the peer binary
  - node - Used for managing the peer
  - channel - carry out channel operations
  - chaincode - Chaincode operations (Fabric 1.x CC lifecycle)
  - Fabric 2.x has introduced a major change in how the lifecycle of a chain managed, and for that it has introduce a new command effort.
    - lifecycle - Manage the chaincode lifecycle
      - chaincode - Available for managing CC
- `peer lifecycle chaincode --flags`
