"use strict";

const { Contract } = require("fabric-contract-api");

class SimpleContract extends Contract {
  constructor() {
    super("com.thinktecture.simplecontract");
    console.log("ctor");
  }

  async init() {
    console.log("Initialized ...");
  }

  async setValue(ctx, newValue) {
    newValue = parseInt(newValue);

    let oldValue = await ctx.stub.getState("CurrentValue");
    oldValue = parseInt(oldValue) || 0;

    if (newValue > oldValue) {
      newValue = newValue + 1;
      await ctx.stub.putState("CurrentValue", Buffer.from(newValue.toString()));
      await ctx.stub.setEvent("valuechanged", Buffer.from(newValue.toString()));
    } else {
      throw new Error("New value must be higher than the old value");
    }

    return Buffer.from(newValue.toString());
  }

  async getValue(ctx) {
    let val = await ctx.stub.getState("CurrentValue");
    return Buffer.from(val.toString());
  }
}

module.exports = SimpleContract;
