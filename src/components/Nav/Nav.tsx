import { useDispatch, useSelector } from "react-redux";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from "@mui/material";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import React from 'react'
import { setScanner } from "../../redux/reducers/drawerSlice";
import styles from './Nav.module.scss'

function Nav() {
   const dispatch = useDispatch();

   function toggleScanner(toggle: boolean) {
      dispatch(
         setScanner(toggle)
      );

      console.log(toggle);
   }

   return (
      <div className={styles.Nav}>
         <div className={styles.Buttons}>
            <Button 
               Icon={LocalAtmIcon}
               toggle={()=>toggleScanner(true)}
            />
            <Button 
               Icon={AddIcon}
               toggle={()=>toggleScanner(true)}
               className={styles.Scanner}
            />
            <Button Icon={AccountCircleIcon} toggle={() => console.log("clicked")}/>
         </div>
      </div>  
   )
}

function Button({Icon, toggle, className}: {Icon: React.FC, toggle: () => void, className?: string}){
   return (
      <div className={styles.Button}>
         <IconButton className={className} onClick={toggle}>
            <Icon />
         </IconButton>
      </div>
   )
}

export default Nav