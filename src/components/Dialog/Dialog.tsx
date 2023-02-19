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
      </div>
   )
}