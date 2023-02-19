import { Button, SwipeableDrawer } from "@mui/material";
import { selectScanner, setScanner } from "redux/reducers/drawerSlice";
import { useDispatch, useSelector } from "react-redux";

import Nav from "components/Nav/Nav";
import React from "react";
import Scanner from "./components/Scanner/Scanner";
import styles from './App.module.scss';

function App() {
   // const [scanner, setScanner] = React.useState(false)
   const openScanner = useSelector(selectScanner);
   const dispatch = useDispatch();
   
   function toggleScanner(boolean: boolean) {
      dispatch(setScanner(boolean));
   }

   return (
      <div className={styles.App}>
         <Button onClick={()=>toggleScanner(true)}>QR</Button>
         <SwipeableDrawer className={styles.Scanner}
            anchor="bottom"
            open={openScanner}
            onClose={()=>toggleScanner(false)}
            onOpen={()=>toggleScanner(true)}
         >
            <Scanner/>
         </SwipeableDrawer>
         <Nav/>
      </div>
   );
}

export default App;
