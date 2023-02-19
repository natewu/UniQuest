import { Button } from "@mui/material";
import styles from './Dialog.module.scss'

export function Dialog({open, onClose, children}: {open: boolean, onClose: () => void, children: React.ReactNode}){
   if(!open) return null;

   return (
      <div className={styles.Dialog}>
         <div className={styles.Dialog__container}>
            <div className={styles.Dialog__content}>
               {children}
            </div>
         </div>
         <div className={styles.button}>
            <Button style={{padding:"1rem 2rem !important", backgroundColor:"#cf0722"}} variant="contained" onClick={() => onClose()}>Close</Button>
         </div>
      </div>
   )
}

export function SuccessDialog({data}: any){
   return (
      <div className={styles.Success}>
         <h1 className={styles.Success__title}>You earned {data.points} points!</h1>
         <h2 className={styles.Success__subtitle}>About the location:</h2>
         <img className={styles.Success__image}src={data.imageURL} alt="location" />
         <p className={styles.Success__text}>{data.description}</p>
      </div>
   );
}