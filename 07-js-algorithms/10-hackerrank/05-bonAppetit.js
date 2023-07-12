function bonAppetit(bill, k, b) {
  let annasEatens = 0;
  for (let i = 0; i < bill.length; i++) {
    if (i !== k) {
      annasEatens += bill[i];
    }
  }
  const result = annasEatens / 2 === b ? "Bon Appetit" : b - annasEatens / 2;
  console.log(result);
}
