import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/main.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Check from './services/Check';
import Main from './services/Main';
import React from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/check',
    element: <Check />,
  },
  {
    path: '/main',
    element: <Main />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
