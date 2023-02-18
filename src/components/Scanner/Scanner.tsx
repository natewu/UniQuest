import { QrReader } from "react-qr-reader"
import React from 'react'
import styles from './Scanner.module.scss'

function Scanner() {
   // const [imgSrc, setImgSrc] = React.useState(null)
   const [data, setData] = React.useState<any>(null)

   return (
      <div className={styles.Scanner}> 
         <div className={styles.Close}>
            <div className={styles.Line}/>
         </div>
         <div className={styles.Wrapper}>
            <h1>Scanner</h1>
            <div className={styles.Webcam}>
               <QrReader 
               
                  onResult={(result) => {
                     setData(result)
                  }}
                  
                  constraints={{facingMode: "environment"}}                
               />
            </div>
         </div>
         {/* {data.text} */}
      </div>
   )
}

export default Scanner