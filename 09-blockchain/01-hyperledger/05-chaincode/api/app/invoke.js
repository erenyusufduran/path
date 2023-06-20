const { Gateway, Wallets, DefaultEventHandlerStrategies } = require("fabric-network");
const log4js = require("log4js");
const logger = log4js.getLogger("BasicNetwork");
const util = require("util");

const helper = require("./helper");

const invokeTransaction = async (channelName, chaincodeName, fcn, args, username, org_name) => {
  try {
    logger.debug(util.format("\n============ invoke transaction on channel %s ============\n", channelName));

    // load the network configuration
    // const ccpPath =path.resolve(__dirname, '..', 'config', 'connection-org1.json');
    // const ccpJSON = fs.readFileSync(ccpPath, 'utf8')
    const ccp = await helper.getCCP(org_name); //JSON.parse(ccpJSON);

    const walletPath = await helper.getWalletPath(org_name); //path.join(process.cwd(), 'wallet');
    const wallet = await Wallets.newFileSystemWallet(walletPath);
    console.log(`Wallet path: ${walletPath}`);

    // Check to see if we've already enrolled the user.
    let identity = await wallet.get(username);

    if (!identity) {
      console.log(`An identity for the user ${username} does not exist in the wallet, so registering user`);
      await helper.getRegisteredUser(username, org_name, true);
      identity = await wallet.get(username);
      console.log("Run the registerUser.js application before retrying");
      return;
    }
    const connectOptions = {
      wallet,
      identity: username,
      discovery: { enabled: true, asLocalhost: true },
      eventHandlerOptions: {
        commitTimeout: 100,
        strategy: DefaultEventHandlerStrategies.NETWORK_SCOPE_ALLFORTX,
      },
    };

    const gateway = new Gateway();
    await gateway.connect(ccp, connectOptions);
    const network = await gateway.getNetwork(channelName);
    const contract = network.getContract(chaincodeName);

    let message;
    try {
      if (fcn === "createCar") {
        await contract.submitTransaction(fcn, args[0], args[1], args[2], args[3]);
        message = `Successfully added the car asset`;
      } else if (fcn === "changeCarOwner") {
        await contract.submitTransaction(fcn, args[0], args[1]);
        message = `Successfully changed car owner with key ${args[0]}`;
      } else {
        return `Invocation require either createCar or changeCarOwner as function but got ${fcn}`;
      }
    } catch (error) {
      console.log(`*** Successfully caught the error: \n    ${error}`);
    } finally {
      gateway.disconnect();
    }
    return message;
  } catch (error) {
    console.log(`Getting error: ${error}`);
    return error.message;
  }
};

exports.invokeTransaction = invokeTransaction;
