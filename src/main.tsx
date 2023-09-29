import ReactDOM from 'react-dom/client';
import './scss/main.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import Start from './redirects/Start';
import Check from './redirects/Check';
import Main from './redirects/Main';
import CreateUser from './redirects/CreateUser';
import ErrorPage from './redirects/ErrorPage';
import Redirect from './redirects/Redirect';
import API from './redirects/API';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Start />,
  },
  {
    path: '/check',
    element: <Check />,
  },
  {
    path: '/main',
    element: <Main />,
  },
  {
    path: '/createuser',
    element: <CreateUser />,
  },
  {
    path: '/redirect',
    element: <Redirect />,
  },
  {
    path: '/API',
    element: <API />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
