const xlsx = require("xlsx");

const wb = xlsx.readFile("./data/paymaster.xlsx", { cellDates: true });
const ws = wb.Sheets["Transactions"];
const data = xlsx.utils.sheet_to_json(ws);

let expenses = 0;
let incomes = 0;
console.log(data.length);
const newData = data.map((rec) => {
  if (rec.Type === "Expenses") {
    const sum = parseInt(rec.Sum.replace(",", ""));
    expenses += sum;
  } else {
    const sum = parseInt(rec.Sum.replace(",", ""));
    incomes += sum;
  }
  console.log(rec);
});

console.log({ incomes, expenses });
