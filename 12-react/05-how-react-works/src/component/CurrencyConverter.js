import React, { useEffect, useState } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCur, setFromCur] = useState('EUR');
  const [toCur, setToCur] = useState('USD');
  const [converted, setConverted] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const convert = async () => {
      setIsLoading(true);
      const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`);
      const data = await res.json();
      setConverted(data.rates[toCur]);
      setIsLoading(false);
    };
    if (fromCur === toCur) return setConverted(amount);
    convert();
  }, [amount, fromCur, toCur]);

  return (
    <div>
      <input type="text" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
      <select value={fromCur} onChange={(e) => setFromCur(e.target.value)} disabled={isLoading}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={toCur} onChange={(e) => setToCur(e.target.value)} disabled={isLoading}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>
          {converted} {toCur}
        </p>
      )}
    </div>
  );
};

export default CurrencyConverter;
