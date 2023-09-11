import React, { useState } from 'react';

const Calculator = () => {
  const [bill, setBill] = useState('');
  const [percentageOne, setPercentageOne] = useState(0);
  const [percentageTwo, setPercentageTwo] = useState(0);

  const tip = bill * ((percentageOne + percentageTwo) / 2 / 100);

  const handleReset = () => {
    setBill('');
    setPercentageOne(0);
    setPercentageTwo(0);
  };

  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercentage percentage={percentageOne} setPercentage={setPercentageOne}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentageTwo} setPercentage={setPercentageTwo}>
        How did your friend like the service?
      </SelectPercentage>
      <Output bill={bill} tip={tip} />
      <Reset handleReset={handleReset} />
    </div>
  );
};

function BillInput({ bill, setBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input type="text" placeholder="Bill value" value={bill} onChange={(e) => setBill(Number(e.target.value))} />
    </div>
  );
}

function SelectPercentage({ children, percentage, setPercentage }) {
  return (
    <div>
      <label>{children}</label>
      <select value={percentage} onChange={(e) => setPercentage(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}

function Reset({ handleReset }) {
  return <button onClick={handleReset}>Reset</button>;
}

export default Calculator;
