import React, { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import styles from "./QR.module.scss"

export function QR(){
   //🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒
   //🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒
   //🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒
   //🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒
   // 🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒
   // 🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒
   // 🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒
   // 🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒
   
   const [data, setData] = useState([{}]);
   const [data1, setData1] = useState("Loading...");
   const [data2, setData2] = useState("0");

   let curURL = window.location.href;
   let curID = parseInt(curURL.split("/").at(-1))

   useEffect(() => {
      const interval = setInterval(() => {
         fetch(`/getQR?id=${curID}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
         });

         fetch(`/getName?id=${curID}`)
        .then((res) => res.json())
        .then((data1) => {
         console.log(data1);
         setData1(data1);
         });

         fetch(`/getPoints?id=${curID}`)
         .then((res) => res.json())
         .then((data2) => {
          console.log(data2);
          setData2(data2);
          });

      }, 1000);
        return () => clearInterval(interval);
    }, []);
   return (
      

      <div className={styles.QR}>
         <div style={{ 
            margin: "0",
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            transform: "translate(-50%, -50%)",
            }}>
            
            <div style={{textAlign: "center"}}>
               <img style={{height:"150px"}} src="../images/logo.png"></img>

               <div style={{margin: "8x"}}/>
               <h1 style={{textAlign: "center", overflowWrap:"break-word"}}>{data1}</h1>
               <p>Scan Below to Earn {data2} Points to Redeem!</p>

               <div style={{margin: "40px"}}/>

               <QRCodeSVG value={data}
               size={250}
               style={{textAlign: "center"}}/>

               <div style={{margin: "30px"}}/>
               <div className = {styles.center}>
                  <p className={styles.butt} style={{color:"black"}}>Get UniQuest on the App Store!</p>
               </div>
            </div>
         </div>
      </div>
   );
}