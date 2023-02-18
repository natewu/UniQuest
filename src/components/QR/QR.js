import React, { useState, useEffect } from "react";

export function QR({id}){
   //🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒
   //🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒
   //🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒
   //🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒

   const [data, setData] = useState([{}]);

   useEffect(() => {
      let id=1
      const interval = setInterval(() => {

         fetch(`/getQR?id=1`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          console.log(data);
        });

      }, 1000);
        return () => clearInterval(interval);
    }, []);
   return (

      <div>
         hi
      </div>
   );
}