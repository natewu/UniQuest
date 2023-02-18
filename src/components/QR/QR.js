import React, { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";

export function QR({id}){
   //🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒
   //🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒
   //🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒
   //🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒

   const [data, setData] = useState([{}]);
   const [data1, setData1] = useState([{}]);

   useEffect(() => {
      const interval = setInterval(() => {

         fetch(`/getQR?id=1`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
         });

         fetch(`/getName?id=1`)
        .then((res) => res.json())
        .then((data1) => {
         console.log(data1);
         setData1(data1);
         });

      }, 1000);
        return () => clearInterval(interval);
    }, []);
   return (
      

      <div style={{ 
         margin: "0",
         position: "absolute",
         top: "50%",
         left: "50%",
         transform: "translate(-50%, -50%)",
         }}>
         
         <h1 style={{textAlign: "center"}}>{data1}</h1>
         
         <QRCodeSVG value={data}
         size={500}/>

      </div>
   );
}