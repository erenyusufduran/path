let myAccount = {
  name: "Gökşen Ayar",
  expenses: 0,
  income: 0,
};

function addExpense(account, amount) {
  account.expenses += amount;
}

function addIncome(account, amount) {
  account.income += amount;
}

function resetAccount(account) {
  account.expenses = 0;
  account.income = 0;
}

function getAccountSummary(account) {
  const balance = account.income - account.expenses;
  console.log(`${account.name} has $${balance}`);
}

addIncome(myAccount, 2500);
addExpense(myAccount, 250);
addExpense(myAccount, 500);
getAccountSummary(myAccount);
