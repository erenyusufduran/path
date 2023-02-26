let restaurant = {
  name: "ASB",
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    const seatsLeft = this.guestCapacity - this.guestCount;
    return seatsLeft >= partySize;
  },
  seatParty: (partySize) => {
    const seatsLeft = this.guestCapacity - this.guestCount;
    if (seatsLeft < partySize) return Error("Have no seat!");
    this.guestCount += partySize;
  },
  removeParty: (partySize) => {
    this.guestCount -= partySize;
  },
};

console.log(restaurant.checkAvailability(5));
