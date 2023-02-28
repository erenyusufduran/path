# Hyperledger Grid

Hyperledger Grid is a platform for building supply chain solutions that include distributed ledger components. This project provides a set of modular components for developing smart contracts and client interfaces, including domain-specific data models (such as GS1 product definitions), smart-contract business logic, libraries, and SDKs.

## Open Source for Flexibility

Avoid the widespread issue of vendor lock-in with open source software.

Hyperledger Grid is an open source project on <a href="https://github.com/hyperledger/grid">GitHub</a>. We welcome contributors, both organizations and individuals, to help shape project direction, contribute ideas, provide use cases, and work on specific tools and examples.

## GRID WITH sawtooth or splinter

Grid lets you combine a distributed ledger framework with Hyperledger components and Grid smart contracts into a single, effective business solution. Grid's flexible, modular design supports a choice of backend distributed ledgers: <a href="https://www.splinter.dev/">Splinter</a> and <a href="https://sawtooth.hyperledger.org/">Hyperledger Sawtooth</a>.

Hyperledger's Sawtooth Sabre is the enabling technology behind Grid's support for multiple distributed ledgers. Sabre provides a smart contract engine for customized smart contracts and the included smart contracts in Grid:

- **Location** is a framework for sharing location master data between trade partners.
- **Product** provides a way to share GS1-compatible product data (items that are transacted, traded, or referenced in a supply chain).
- **Pike** is a Grid smart contract that handles organization and identity permissions with Sabre.
- **Schema** is a Grid smart contract that provides a reusable, standard approach to defining, storing, and consuming product properties.
- **Purchase** Order is a Grid smart contract that provides a way to share GS1-compatible purchase order data.

---

- ### <a href="https://grid.hyperledger.org/docs/0.3/grid_on_splinter.html">Running Hyperledger Grid on Splinter</a>
- ### <a href="https://grid.hyperledger.org/docs/0.3/grid_on_sawtooth.html">Running Hyperledger Grid on Sawtooth</a>
