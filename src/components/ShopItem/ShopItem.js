import styles from "./ShopItem.module.scss"
import React, { useState, useEffect } from "react";


export function ShopItem({data}){
    console.log(data);
    function purchase(points) {
        fetch(`/purchase`, {
            method: "POST", 
            body: `points=${points}`,
            headers: {
               "Content-Type": "application/x-www-form-urlencoded"
            }
         })
         .then(res => res.json())
         .then(res => {
         });
      }

    return (

        <div className={styles.card}>
            <div className={styles.cardBody}>
                <div className={styles.card__info}>
                    <h6>{data.offer}</h6>
                    <h7 className="card-subtitle mb-2 text-muted">{data.points} points</h7>
                </div>

                <div className={styles.card__info}>
                    <button className={styles.butt} onClick={() => purchase(data.points)}>Redeem</button>
                </div>
            </div>
        </div>

    );
}