const { Gateway, Wallets, Gateway } = require("fabric-network");
const log4js = require("log4js");
const { BlockDecoder } = require("fabric-common");
const helper = require("./helper");

const qscc = async (channelName, chaincodeName, args, fcn, username, orgName) => {
  try {
    const ccp = await helper.getCCP(orgName);
    const walletPath = await helper.getWalletPath(orgName);
    const wallet = await Wallets.newFileSystemWallet(walletPath);
    console.log(`Wallet path: ${walletPath}`);

    let identity = await wallet.get(username);
    if (!identity) {
      console.log(`An identity for the user ${username} does not exist in the wallet, so registering user`);
      await helper.getRegisteredUser(username, orgName);
      identity = await wallet.get(username);
      console.log("Run the registerUser.js application before retrying");
      return;
    }

    const gateway = new Gateway();
    await gateway.connect(ccp, {
      wallet,
      identity: username,
      discovery: { enabled: true, asLocalhost: true },
    });
    const network = await gateway.getNetwork(channelName);
    const contract = network.getContract(chaincodeName);
    let result;

    if (fcn === "") {
    }

    return result;
  } catch (error) {
    console.error(`Failed to evaluate transaction: ${error}`);
    return error.message;
  }
};

exports.qscc = qscc;
