import { selectScanner, setScanner } from "redux/reducers/drawerSlice";
import { useDispatch, useSelector } from "react-redux";

import { Dialog } from "components/Dialog/Dialog";
import Nav from "components/Nav/Nav";
import React from "react";
import Scanner from "./components/Scanner/Scanner";
import { SwipeableDrawer } from "@mui/material";
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
         <Dialog open={openScanner} onClose={()=>toggleScanner(false)}>
            it worked??
         </Dialog>
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
