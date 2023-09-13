import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
// import BankAccount from './bank-challenge/BankAccount';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BankAccount /> */}
    <App />
  </React.StrictMode>
);

