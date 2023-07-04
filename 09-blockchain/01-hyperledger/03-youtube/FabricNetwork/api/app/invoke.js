const { Gateway, Wallets } = require("fabric-network");
const helper = require("./helper");
const { blockListener, contractListener } = require("./listeners");

const invokeTransaction = async (channelName, chaincodeName, fcn, args, username, orgName, transientData = []) => {
  try {
    const ccp = await helper.getCCP(orgName);
    console.log("==================", channelName, chaincodeName, fcn, args, username, orgName);

    const walletPath = await helper.getWalletPath(orgName);
    const wallet = await Wallets.newFileSystemWallet(walletPath);
    console.log(`Wallet path: ${walletPath}`);

    let identity = await wallet.get(username);
    if (!identity) {
      console.log(`An identity for the user ${username} does not exist in the wallet, so registering user`);
      await helper.getRegisteredUser(username, orgName, true);
      identity = await wallet.get(username);
      console.log("Run the registerUser.js application before retrying");
      return;
    }

    const gateway = new Gateway();
    await gateway.connect(ccp, { wallet, identity: username, discovery: { enabled: true, asLocalhost: true } });
    const network = await gateway.getNetwork(channelName);
    const contract = network.getContract(chaincodeName);

    // await contract.addContractListener(contractListener);
    await network.addBlockListener(blockListener);

    let result;

    switch (fcn) {
      case "createCar":
        await contract.submitTransaction(fcn, args[0], args[1], args[2], args[3]);
        result = { message: "Car added" };
        break;
      default:
        break;
    }

    gateway.disconnect();
    return result;
  } catch (error) {
    console.log(`Getting error: ${error}`);
    return error.message;
  }
};

exports.invokeTransaction = invokeTransaction;
