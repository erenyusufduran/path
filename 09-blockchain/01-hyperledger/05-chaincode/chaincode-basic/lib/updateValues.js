"use strict";

const { Contract } = require("fabric-contract-api");
const util = require("util");

class UpdateValuesContract extends Contract {
  constructor() {
    super("UpdateValuesContract");
  }

  async transactionA(ctx, newValue) {
    const oldValue = await ctx.stub.getState(key);
    await ctx.stub.pubState(key, Buffer.from(newValue));
    return Buffer.from(newValue.toString());
  }

  async transactionB(ctx) {}
}

module.exports = UpdateValuesContract;
