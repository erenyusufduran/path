# <a href="https://github.com/adhavpavan/FabricNetwork-2.x.git">Fabric Network</a>

- Right now we have total four organizations. **Three peer organizaton** and **One orderer organization**.
- We have only one peer in each organization. In the previous repository we had 2 peers for each organization.
- Each of the peer is going to be **endorser peer** in our network.
- We are not going to use **cryptogen tool** for generating the crypto material. We'll use **Certificate Authority** for creating the crypto material. We will have 3 CA for Peers and 1 CA for Orderer Organization.
- Each peer has current state database as **CouchDB**.

---

1. Run CA services for all organizations.
2. Create crypto materials for all organizations.
3. Create channel artifacts using OrgMSP.
4. Create channel and join peers.
5. Deploy Chaincode
   1. Install all dependencies.
   2. Package chaincode.
   3. Install chaincode on all endorsing peers.
   4. Approve chaincode as per lifecycle endorsement policy.
   5. Commit chaincode definition.
6. Create connection profiles.
7. Start API server.
8. Register user using API.
9. Invoke chaincode transaction
10. Query chaincode transaction.
