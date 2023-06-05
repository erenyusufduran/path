"use strict";

class PhoneNumber {
  constructor() {
    this.number = "";
    this.owner = "";
    this.transferTo = "";
  }

  static from(bufferOrJson) {
    if (Buffer.isBuffer(bufferOrJson)) {
      if (!bufferOrJson.length) return;
      bufferOrJson = JSON.parse(bufferOrJson.toString("utf-8"));
    }
    return Object.assign(new PhoneNumber(), bufferOrJson);
  }

  toBuffer() {
    return Buffer.from(JSON.stringify(this));
  }
}

module.exports = { PhoneNumber };
