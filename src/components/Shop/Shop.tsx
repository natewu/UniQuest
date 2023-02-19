import styles from "./Shop.module.scss"
import { ShopItem } from "../ShopItem/ShopItem";
import { off } from 'process';
import React, { useState, useEffect } from "react";

function Shop() {

   const [value, setValue] = React.useState('fitness');

   const handleChange = (event : any) => {
      setValue(event.target.value);
    };


    const [data, setData] = useState("0");
 
    useEffect(() => {
          fetch(`/getPointsFromUser?id=1`)
         .then((res) => res.json())
         .then((data) => {
           setData(data);
           console.log(data);
          });
       
      });

    const options = [

      { label: 'Fitness', value: 'fitness' },
   
      { label: 'Foods', value: 'food' },
   
      { label: 'Printing', value: 'printing' },
      { label: 'Campus', value: 'campus' },
   
    ];

    const offers = [
         {offer:"Free Printing for 100 Papers", points:100, catagory:"printing"},
         {offer:"Free Dinner at the Dining Center", points:200, catagory:"food"},
         {offer:"Free Morning Coffee", points:400, catagory:"food"},
         {offer:"A Squash Ball", points:100, catagory:"fitness"},
         {offer:"A Racquetball Ball", points:100, catagory:"fitness"},  
         {offer:"Free Squash Raquet Rental", points:20, catagory:"fitness"},  
         {offer:"Free Bouldering Lessons", points:100, catagory:"fitness"},  
         {offer:"1 day parking", points:1000, catagory:"campus"},  
         {offer:"1 hour scooter rental", points:800, catagory:"campus"},  
      ]

   return (
      <div className={styles.main}>
         <div style={{ 
            margin: "0",
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            transform: "translate(-50%, -50%)",
            }}>
            
         <div className="Shop">
            <div style={{margin: "1rem"}}/>
            <img style={{height:"64px", marginTop:"20px"}} src="../images/logo.png" alt="logo"></img>
                  <h1 style={{textAlign: "center", overflowWrap:"break-word"}}>Quest Shop</h1>
                  <p className={styles.description}>Redeem Your Points for On Campus Services!</p>

                  <div className={styles.box}>
                     <select value={value} onChange={handleChange}>
                        {options.map((option) => (
                           <option value={option.value}>{option.label}</option>
                        ))}
                     </select>
                  </div>  
                  
                  <div style={{marginTop: "5px"}}/>
                  <h5 style={{textAlign: "center", overflowWrap:"break-word"}}>Your points: {data}</h5>
                  <div className={`${styles.scroller} ${styles.center2}`}>
                     {offers.filter(offer => (offer.catagory === value)).map(filteredOffer => (
                        <ShopItem data ={{offer:filteredOffer.offer, points:filteredOffer.points}} />
                     ))}
                  </div>
               <div style={{margin: "40px"}}/>
            </div>

         </div>
      </div>
   )
}

export default Shop