import React, { useEffect } from 'react'

import { QrReader } from "react-qr-reader"
import styles from './Scanner.module.scss'

function Scanner() {
   // const [imgSrc, setImgSrc] = React.useState(null)
   const [data, setData] = React.useState<any>("");
   const [res, setRes] = React.useState<any>(0);
   const [points, setPoints] = React.useState<any>(0);


   useEffect(() => {
   
      if(data !== ""){
         fetch(`/validQR`, {
            method: "POST", 
            body: `string=${data}`,
            headers: {
               "Content-Type": "application/x-www-form-urlencoded"
            }
         })
         .then(res => res.json())
         .then(res => {
            console.log(res);
            setRes(res.valid)
         });
      }

   }, [data]);

   useEffect(() => {
   
      fetch(`/user`)
      .then(res => res.json())
      .then(res => {
         console.log(res);
         setPoints(res.points);
      });

   }, [points, data]);

   return (
      <div className={styles.Scanner}> 
         <div className={styles.Close}>
            <div className={styles.Line}/>
         </div>
            <h1>Scanner</h1>
            <h1>{res ? "Yay!" : "Nay :("}</h1>
            <h2>{points}</h2>
         <div className={styles.Webcam}>
            <QrReader 
               // ViewFinder={(
               //    <div className={styles.ViewFinder}>
               //       Hi 
               //    </div>
               // )}
               scanDelay={50}
               onResult={(result, error) => {
                  if (!!result) {
                     setData(result?.getText());
                  }
   
               }}
               
               constraints={{facingMode: "environment"}}                
            />
         </div>
      </div>
   )
}

export default Scanner