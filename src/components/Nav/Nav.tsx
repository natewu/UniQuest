import { useDispatch, useSelector } from "react-redux";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from "@mui/material";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import React from 'react'
import { setScanner } from "../../redux/reducers/drawerSlice";
import styles from './Nav.module.scss'
import { useNavigate } from "react-router-dom";

function Nav() {
   const dispatch = useDispatch();
   const history = useNavigate();

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
               Icon={HomeIcon}
               toggle={()=>history('/')}
            />
            <Button 
               Icon={LocalAtmIcon}
               toggle={()=>history('/shop')}
            />
            <Button 
               Icon={AddIcon}
               toggle={()=>toggleScanner(true)}
               className={styles.Scanner}
            />
            <Button 
               Icon={AccountCircleIcon} 
               toggle={()=>history('/profile')}
            />
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