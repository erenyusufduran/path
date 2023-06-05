"use strict";

const { ContractBase } = require("./contract-base");
const { PhoneNumber } = require("./phone-number ");
const events = require("./events");

class NumberTransferContract extends ContractBase {
  constructor() {
    super("com.thinktecture.numbertransfer");
  }

  init() {
    console.log("Init has been called!");
  }

  async createAndAssignNumber(ctx, phoneNumber, to) {
    this._requireRegulator(ctx);
    this._require(phoneNumber, "phoneNumber");
    this._require(to, "to");

    if (await this._doesPhoneNumberExist(ctx.stub, phoneNumber)) {
      throw new Error(`PhoneNumber ${phoneNumber} already exists.`);
    }

    const phoneNumberBuffer = PhoneNumber.from({ number: phoneNumber, owner: to }).toBuffer();
    await ctx.stub.putState(this._createPhoneNumberCompositeKey(ctx.stub, phoneNumber), phoneNumberBuffer);
    ctx.stub.setEvent("Assigned", phoneNumberBuffer);
  }

  _requireRegulator(ctx) {
    if (ctx.clientIdentity.getMSPID() !== "RegulatorMSP") {
      throw new Error(`This chaincode function can only be called by the regulator.`);
    }
  }

  async _doesPhoneNumberExist(stub, phoneNumber) {
    const savedPhoneNumberBytes = await stub.getState(this._createPhoneNumberCompositeKey(stub, phoneNumber));
    return !!savedPhoneNumberBytes && savedPhoneNumberBytes.toString().length > 0;
  }

  async requestTransfer(ctx, phoneNumber) {
    this._require(phoneNumber, "phoneNumber");
    const checkTransferResult = await this._checkRequestTransfer(ctx, phoneNumber);
    if (checkTransferResult.code) {
      return this._toBuffer(checkTransferResult);
    }
    const phoneNumberInstance = await this._getPhoneNumber(ctx.stub, phoneNumber);
    phoneNumberInstance.transferTo = ctx.clientIdentity.getMSPID();
    await ctx.stub.putState(this._createPhoneNumberCompositeKey(ctx.stub, phoneNumber), phoneNumberInstance.toBuffer());
    ctx.stub.setEvent(
      "TransferRequested",
      this._toBuffer({ phoneNumber, from: phoneNumberInstance.owner, to: phoneNumberInstance.to })
    );
  }

  async _checkRequestTransfer(ctx, phoneNumber) {
    const phoneNumberInstance = await this._getPhoneNumber(ctx.stub, phoneNumber);
    if (!phoneNumberInstance) {
      return {
        code: 21,
        message: "Number is not assigned",
      };
    }
    if (phoneNumberInstance.transferTo) {
      return {
        code: 30,
        message: "Number is already in transfer",
      };
    }
    if (phoneNumberInstance.owner === ctx.clientIdentity.getMSPID()) {
      return {
        code: 33,
        message: "Sender is already the current owner",
      };
    }
    return { code: 0 };
  }

  async confirmTransfer(ctx, phoneNumber) {
    this._require(phoneNumber, "phoneNumber");
    const phoneNumberInstance = await this._getPhoneNumber(ctx.stub, phoneNumber);
    if (ctx.clientIdentity.getMSPID() !== phoneNumberInstance.owner) {
      throw new Error("Only the owner of the phone number can confirm the transfer.");
    }
    const oldOwner = phoneNumberInstance.owner;
    phoneNumberInstance.owner = phoneNumberInstance.transferTo;
    phoneNumber.transferTo = "";

    await ctx.stub.putState(this._createPhoneNumberCompositeKey(ctx.stub, phoneNumber), phoneNumberInstance.toBuffer());
    ctx.stub.setEvent(
      "TransferConfirmed",
      this._toBuffer({
        phoneNumber,
        from: oldOwner,
        to: phoneNumberInstance.owner,
      })
    );
  }

  async rejectTransfer(ctx, phoneNumber) {
    this._require(phoneNumber, "phoneNumber");
    const phoneNumberInstance = await this._getPhoneNumber(ctx.stub, phoneNumber);
    if (ctx.clientIdentity.getMSPID() !== phoneNumberInstance.owner) {
      throw new Error("Only the owner of the phone number can confirm the transfer.");
    }
    phoneNumber.transferTo = "";
    ctx.stub.setEvent(
      "TransferRejected",
      this._toBuffer({
        phoneNumber,
        from: phoneNumberInstance.owner,
      })
    );
  }

  async showNumbers(ctx) {
    const iterator = await ctx.stub.getStateByPartialCompositeKey("phoneNumber", []);
    const allResults = [];
    let result;
    do {
      result = await iterator.next();
      if (result.value && result.value.value.toString()) {
        const jsonResult = {};
        const splitCompositeKey = ctx.stub.splitCompositeKey(result.value.key);
        jsonResult.key = splitCompositeKey.attributes[0];
        jsonResult.value = result.value.value.buffer.toString("utf-8");
        allResults.push(jsonResult);
      }
    } while (!result.done);
    await iterator.close();
    return this._toBuffer(allResults);
  }
}

module.exports = NumberTransferContract;
