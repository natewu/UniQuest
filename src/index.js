import './index.scss';

// import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import App from './App.tsx';
import Daily from "components/Daily/Daily";
import { Leaderboard } from "./components/Leaderboard/Leaderboard";
import { Profile } from "components/Profile/Profile";
import { Provider } from "react-redux";
import { QR } from "./components/QR/QR";
import React from 'react';
import ReactDOM from 'react-dom/client';
import Shop from "components/Shop/Shop";
import { Status } from "./components/Status/Status";
import reportWebVitals from './reportWebVitals';
import { store } from "redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App><Daily/></App>,
  },
  {
    path: "/status",
    element: <App><Status/></App>,
  },
  {
    path: "/shop",
    element: <App><Shop/></App>,
  },
  {
    path: "/leaderboard",
    element: <App><Leaderboard/></App>,
  },
  {
    path: "/profile",
    element: <App><Profile data={{points:20, name:"kongaroo", profile:"https://i.pinimg.com/280x280_RS/e4/86/86/e4868681b6e2cc4ce83c3b9a5d010b6c.jpg"}}/></App>,
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
