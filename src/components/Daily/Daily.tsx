import React, { useEffect } from 'react'
import styles from './Daily.module.scss'

// Gacha daily 🤣🤣

function Daily() {
   const [screens, setScreens] = React.useState<any>([{}]);
   useEffect(() => {
      fetch(`/screens`)
         .then(res => res.json())
         .then(res => {
            setScreens(res);
         });

   }, [screens]);
   return (
      <div className={styles.Daily}>
         {/* Daily tasks  list*/}
         <h1>Check out today's quest at UCalgary</h1>
                  <div className={styles.Daily__list}>
         {
            screens.map((screen: any) => {
               return (
                     <DailyItem title={screen.location} description={screen.description} points={screen.points} image={screen.imageURL}/>
                     
               )
            })
         
         }
         </div>
      </div>
   )
}

export default Daily

function DailyItem({title, description, points, image}: any) {
   return (
      <div className={styles.Daily__item}>
         <div className={styles.Daily__item__image}>
            <img src={image} alt="daily task"/>
         </div>
         <div className={styles.Daily__item__content}>
            <h2 className={styles.title}>{title}</h2>
            {/* <p className={styles.description}>{description}</p> */}
            <p>{points} points</p>
         </div>
         {/* <div className={styles.Daily__item__separator}/> */}
      </div>
   )
}
