import { Button, SwipeableDrawer } from "@mui/material";

import React from "react";
import Scanner from "./components/Scanner/Scanner";
import styles from './App.module.scss';

function App() {
   const [scanner, setScanner] = React.useState(false)

   function toggleScanner(boolean: boolean) {
      setScanner(boolean)
   }

   return (
      <div className={styles.App}>
         <Button onClick={()=>toggleScanner(true)}>QR</Button>
         <SwipeableDrawer className={styles.Scanner}
            anchor="bottom"
            open={scanner}
            onClose={()=>toggleScanner(false)}
            onOpen={()=>toggleScanner(true)}
         >
            <Scanner/>
         </SwipeableDrawer>
      </div>
   );
}

export default App;
