import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/main.scss';
const FLAG_DEV = true;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App FLAG_DEV={FLAG_DEV} />
  </React.StrictMode>,
);
