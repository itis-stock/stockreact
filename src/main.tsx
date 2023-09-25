import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/main.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Check from './services/Check';
import Main from './services/Main';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/check" element={<Check />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  </BrowserRouter>,
);
