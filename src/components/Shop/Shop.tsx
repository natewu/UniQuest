import React from 'react'
import styles from "./Shop.module.scss"

function Shop() {
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
            <img style={{height:"150px"}} src="../images/logo.png"></img>
            <h1>Quest Shop</h1>          
            <div style={{margin: "8x"}}/>

            <div>
               <p>Catagories: </p>
               <select>
                  <option value="fruit">Fruit</option>
                  <option value="vegetable">Vegetable</option>
                  <option value="meat">Meat</option>
               </select>
            </div>  
         </div>
      </div>
   </div>
   )
}

export default Shop