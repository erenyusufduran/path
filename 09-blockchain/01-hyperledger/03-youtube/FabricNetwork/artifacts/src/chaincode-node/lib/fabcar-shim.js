const shim = require("fabric-shim");

const Chaincode = class {
  async Init(stub) {
    return shim.success(null);
  }

  async Invoke(stub) {
    const { function: fcn, args } = await stub.getFunctionAndParameters();

    switch (fcn) {
      case "initLedger":
        return stub.initLedger(stub, args);
      case "createCar":
        return stub.createCar(stub, args);
      case "changeCarOwner":
        return stub.changeCarOwner(stub, args);
    }
  }
};
