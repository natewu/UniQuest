import './index.scss';

// import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import App from './App.tsx';
import { Provider } from "react-redux";
import { QR } from "./components/QR/QR";
import { Status } from "./components/Status/Status";
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { store } from "redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/qr/:id",
    element: <QR/>,
  }, 
  {
    path: "/status",
    element: <Status/>,
  }, 
  {
    path: "/leaderboard",
    element: <Leaderboard/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
