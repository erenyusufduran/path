import { Context, Contract, Info, Returns, Transaction } from "fabric-contract-api";

@Info({ title: "SimpleContract", description: "Simple Contract for value changes." })
export class SimpleContract extends Contract {
  constructor() {
    super("com.thinktecture.simplecontract");
    console.log("ctor");
  }

  @Transaction()
  async init() {
    console.log("Initialized ...");
  }

  @Transaction()
  async setValue(ctx: Context, newValue: number) {
    await ctx.stub.putState("CurrentValue", Buffer.from(newValue.toString()));
    return Buffer.from(newValue.toString());
  }

  @Transaction(false)
  @Returns("string")
  async getValue(ctx: Context) {
    let val = await ctx.stub.getState("CurrentValue");
    return Buffer.from(val.toString());
  }
}
