const account = {
  name: "Eren Yusuf Duran",
  expenses: [],
  incomes: [],
  addExpense: function (description, amount) {
    this.expenses.push({
      description,
      amount,
    });
  },
  addIncome: function (description, amount) {
    this.incomes.push({
      description,
      amount,
    });
  },
  getAccountSummary: function () {
    let totalExpenses = 0;
    let totalIncomes = 0;

    this.expenses.forEach((expense) => {
      totalExpenses += expense.amount;
    });
    this.incomes.forEach((income) => {
      totalIncomes += income.amount;
    });

    return `${
      this.name
    } has ${totalExpenses} expense & ${totalIncomes} incomes. His balance is ${
      totalIncomes - totalExpenses
    }`;
  },
};

account.addExpense("Rent", 950);
account.addExpense("Coffee", 5);
account.addIncome("Salary", 1400);
console.log(account.getAccountSummary());
