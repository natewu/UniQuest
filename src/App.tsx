import { Dialog, SuccessDialog } from "components/Dialog/Dialog";
import { selectData, selectMessages, selectScanner, setMessages, setScanner } from "redux/reducers/drawerSlice";
import { useDispatch, useSelector } from "react-redux";

import Nav from "components/Nav/Nav";
import React from "react";
import Scanner from "./components/Scanner/Scanner";
import { SwipeableDrawer } from "@mui/material";
import styles from './App.module.scss';
import { useNavigate } from "react-router-dom";

function App({children}: {children: React.ReactNode}) {
   // const [scanner, setScanner] = React.useState(false)
   const history = useNavigate();
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
         <h1 className={styles.Header} onClick={() => history('/leaderboard')}>
            <img alt="logo" src="/images/logo.png" width="32" height="32"
         />
            UniQuest
         </h1>
         {children}
         <Dialog open={openMessages} onClose={()=>toggleMessages(false)}>
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
