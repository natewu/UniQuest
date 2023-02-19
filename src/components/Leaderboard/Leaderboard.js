import React, { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import styles from "./Leaderboard.module.scss"
import { Profile } from "../Profile/Profile";

export function Leaderboard(){
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
               <h1 style={{textAlign: "center", overflowWrap:"break-word"}}>Leaderboard</h1>
               <p>See who has earned the most points in campus!</p>

               <div className={`${styles.scroller} ${styles.center2}`}>
                  <Profile data={{profile: "https://i.pinimg.com/280x280_RS/e4/86/86/e4868681b6e2cc4ce83c3b9a5d010b6c.jpg",
                                 name: "Allan Kong",
                                 points: "1120"}}>               
                  </Profile>

                  <Profile data={{profile: "https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw",
                                 name: "Nate Wu",
                                 points: "1000"}}></Profile>
                  <Profile data={{profile: "https://media.licdn.com/dms/image/C5603AQGgtP3DJlsO0w/profile-displayphoto-shrink_100_100/0/1644706177708?e=1682553600&v=beta&t=Mtn9hkDnhKZm5suvwIoUFkP8XNWPA04kd7SXdrO3Qzw",
                                 name: "Ana DuCristea",
                                 points: "550"}}></Profile>
                  <Profile data={{profile: "https://media.licdn.com/dms/image/D5603AQHKzGXKEZkASg/profile-displayphoto-shrink_100_100/0/1665696865692?e=1682553600&v=beta&t=uzgCsAMjnFSWlO9OuP5BuRKQKDlCTTIhaynpcmMJAW0",
                                 name: "Lujaina Eldelebshany",
                                 points: "300"}}></Profile>
               </div>
               <div style={{margin: "40px"}}/>
            </div>
         </div>
      </div>
   );
}