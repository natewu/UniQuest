import {Link, Route, Routes} from "react-router-dom";

import React from "react";
import Scanner from "./components/Scanner/Scanner";
import styles from './App.module.scss';

function App() {
   return (
      <div className={styles.App}>
         <Scanner/>
      </div>
   );
}

export default App;
