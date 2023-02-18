import { QrReader } from "react-qr-reader"
// import { Camera } from "react-camera-pro"
import React from 'react'
// import { Result } from "node_modules/@zxing/library/esm/core/Result"
// import Webcam from "react-webcam"
import styles from './Scanner.module.scss'

function Scanner() {
   // const [imgSrc, setImgSrc] = React.useState(null)
   const [data, setData] = React.useState<any>(null)

   return (
      <div className={styles.Scanner}> 
         <h1>Scanner</h1>
         <div className={styles.Webcam}>
            <QrReader 
            
               onResult={(result) => {
                  setData(result)
               }}
               
               constraints={{facingMode: "environment"}}                
            />
         </div>
         {/* {data.text} */}
      </div>
   )
}

export default Scanner