import { Dialog, SuccessDialog } from "components/Dialog/Dialog";
import { selectData, selectMessages, selectScanner, setMessages, setScanner } from "redux/reducers/drawerSlice";
import { useDispatch, useSelector } from "react-redux";

import Nav from "components/Nav/Nav";
import React from "react";
import Scanner from "./components/Scanner/Scanner";
import { SwipeableDrawer } from "@mui/material";
import styles from './App.module.scss';

function App() {
   // const [scanner, setScanner] = React.useState(false)

   const openScanner = useSelector(selectScanner);
   const openMessages = useSelector(selectMessages);
   const data = useSelector(selectData);
   const dispatch = useDispatch();
   
   function toggleScanner(boolean: boolean) {
      dispatch(setScanner(boolean));
   }

   function toggleMessages(boolean: boolean) {
      dispatch(setMessages(boolean));
      toggleScanner(false);
   }

   return (
      <div className={styles.App}>
         <Dialog open={true} onClose={()=>toggleMessages(false)}>
            <SuccessDialog data={data}/>
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
