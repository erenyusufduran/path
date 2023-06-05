"use strict";

const { Contract } = require("fabric-contract-api");

class Cs01Contract extends Contract {
  constructor() {
    super("Cs01Contract");
    this.TxId = "";
  }

  async beforeTransaction(ctx) {
    this.TxId = ctx.stub.getTxID();
    console.log(`We can do some logging for ${this.TxId} !!`);
  }

  async storeCs(ctx, revenue, revenueTs, cstype) {
    let _commission = 0;
    let _revenue = parseFloat(revenue);
    let _revenueTs = revenueTs;

    if (cstype === "reco") {
      _commission = (_revenue / 100) * 1;
    } else if (cstype === "reve") {
      _commission = (_revenue / 100) * 10;
    }

    let model = {
      revenue: _revenue,
      commission: _commission,
      revenueTs: _revenueTs,
      cstype: cstype,
      txId: this.TxId,
    };

    try {
      // store the composite key with a the value
      let indexName = "year~month~txid";
      let _keyHelper = new Date(_revenueTs);
      let _keyYearAsString = _keyHelper.getFullYear().toString();
      let _keyMonthAsString = _keyHelper.getMonth().toString();
      let yearMonthIndexKey = await ctx.stub.createCompositeKey(indexName, [
        _keyYearAsString,
        _keyMonthAsString,
        this.TxId,
      ]);

      // store the new state
      await ctx.stub.pubState(yearMonthIndexKey, Buffer.from(JSON.stringify(model)));

      // compose the return values
      return {
        key: `${_keyYearAsString}~${_keyMonthAsString}~${this.TxId}`,
      };
    } catch (error) {
      throw new Error(`The tx ${this.TxId} can not be stored: ${e}`);
    }
  }

  async afterTransaction(ctx, result) {
    console.log(`TX ${this.TxId} done !!`);
  }
}

module.exports = Cs01Contract;
