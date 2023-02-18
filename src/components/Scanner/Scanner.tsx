import { QrReader } from "react-qr-reader"
import React from 'react'
import styles from './Scanner.module.scss'

function Scanner() {
   // const [imgSrc, setImgSrc] = React.useState(null)
   const [data, setData] = React.useState<any>({
      text: "Nothing",
   })

   console.log(data?.text)

   return (
      <div className={styles.Scanner}> 
         <div className={styles.Close}>
            <div className={styles.Line}/>
         </div>
            <h1>Scanner</h1>
         <div className={styles.Webcam}>
            <QrReader 
            
               onResult={(result, error) => {
                  if (!!result) {
                  setData(result?.getText());
                  }
   
               }}
               
               constraints={{facingMode: "environment"}}                
            />
         </div>
         <h1>{data?.text}</h1>
      </div>
   )
}

export default Scanner