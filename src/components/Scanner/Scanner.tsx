import React from 'react'
import Webcam from "react-webcam"
import styles from './Scanner.module.scss'

function Scanner() {
   const webcamRef = React.useRef(null)

   return (
      <div className={styles.Scanner}>
         <h1>Scanner</h1>
         <div className={styles.Webcam}>
            <Webcam
               audio={false}
               // height={100}
               ref={webcamRef}
               screenshotFormat="image/jpeg"
               // width={100}
               style={{borderRadius: "5px"}}
               
            />
         </div>
      </div>
   )
}

export default Scanner