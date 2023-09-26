import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/main.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Check from './services/Check';
import Main from './services/Main';
import React from 'react';
import Error from './services/Error';
import CreateUser from './services/CreateUser';
import { Provider } from 'react-redux';
import { store } from './redux/store';

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
  {
    path: '/error',
    element: <Error />,
  },
  {
    path: '/createuser',
    element: <CreateUser />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
