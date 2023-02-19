import { Button } from "@mui/material";
import styles from './Dialog.module.scss'
import { useEffect } from "react";

export function Dialog({open, onClose, children}: {open: boolean, onClose: () => void, children: React.ReactNode}){
  

   // useEffect(() => {
   //    const timeout = setTimeout(() => {
   //       onClose();
   //    }, 5000);

   //    return () => {
   //       clearTimeout(timeout);
   //    }

   // }, [open]);

   if(!open) return null;

   return (
      <div className={styles.Dialog}>
         <div className={styles.Dialog__container}>
            <div className={styles.Dialog__content}>
               {children}
            </div>
         </div>
         <Button onClick={() => onClose()}>Close</Button>
      </div>
   )
}