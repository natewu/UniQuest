import React, { useEffect } from 'react'
import { setDataJSON, setMessages } from "redux/reducers/drawerSlice";

import { QrReader } from "react-qr-reader"
import styles from './Scanner.module.scss'
import { useDispatch } from "react-redux";

function Scanner() {
   // const [imgSrc, setImgSrc] = React.useState(null)
   const [data, setData] = React.useState<any>({
      valid: "",
      points: "",
      description: "",
      image: "",
   });
   const [res, setRes] = React.useState<any>(0);
   const [points, setPoints] = React.useState<any>(0);
   const dispatch = useDispatch();

   useEffect(() => {
      if(data.valid !== ""){
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
            setRes(res)
            
         });
      }
   }, [data]);

   useEffect(() => {
      
      const interval = setInterval(() => {
         fetch(`/user`)
         .then(res => res.json())
         .then(res => {
            console.log(res);
            setPoints(res.points);
         });
      }, 1000);

   }, [points, data]);

   useEffect(() => {
      if(res === "Good job!"){
         dispatch(
            setMessages(true)
         );
         dispatch(
            setDataJSON(res)
         );
      }
   }, [res]);

   return (
      <div className={styles.Scanner}> 
         <div className={styles.Close}>
            <div className={styles.Line}/>
         </div>
            <h1>Scanner</h1>
            {/* <h1>{res ? res : ""}</h1> */}
            <h2>You have {points} points</h2>
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