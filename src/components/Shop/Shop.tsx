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
      const interval = setInterval(() => {
          fetch(`/getPointsFromUser?id=1`)
         .then((res) => res.json())
         .then((data) => {
           setData(data);
           console.log(data);
          });
       
      }, 1000);
      return () => clearInterval(interval);
      });

    const options = [

      { label: 'Fitness', value: 'fitness' },
   
      { label: 'Foods', value: 'food' },
   
      { label: 'Printing', value: 'printing' },
      { label: 'Campus', value: 'campus' },
   
    ];

    const offers = [
         {offer:"Free Printing for 100 Papers", points:100, catagory:"printing", description:"Utilize the printing within the taylor institute library!"},
         {offer:"Free Dinner at the Dining Center", points:700, catagory:"food", description:"Have some delicious food in the food services center!"},
         {offer:"Free Morning Coffee", points:600, catagory:"food", description:"Have some great coffee in the Good Earth Coffeehouse!"},
         {offer:"A Squash Ball", points:200, catagory:"fitness", description:"Go to Active Living Center Reception to redeem the ball!"},
         {offer:"A Racquetball Ball", points:200, catagory:"fitness", description:"Go to Active Living Center Reception to redeem the ball!"},  
         {offer:"Free Squash Raquet Rental", points:120, catagory:"fitness", description:"Go to Active Living Center Reception to redeem the raquet!"},  
         {offer:"Free Bouldering Lessons", points:100, catagory:"fitness", description:"Go to Active Living Center Reception to bouldering lessons!"},  
         {offer:"1 day parking", points:1300, catagory:"campus", description:"Go to Adminstrations Office to redeem the free parking!"},  
         {offer:"1 hour scooter rental", points:1000, catagory:"campus", description:"Go to Adminstrations Office to redeem the free parking!"},  
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
                        <ShopItem data ={{offer:filteredOffer.offer, points:filteredOffer.points,description:filteredOffer.description}} />
                     ))}
                  </div>
               <div style={{margin: "40px"}}/>
            </div>

         </div>
      </div>
   )
}

export default Shop