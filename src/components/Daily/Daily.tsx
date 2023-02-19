import React from 'react'
import styles from './Daily.module.scss'

// Gacha daily 🤣🤣

function Daily() {
   return (
      <div className={styles.Daily}>
         {/* Daily tasks  list*/}
         <h1>Check out what's happening today.</h1>
         <div className={styles.Daily__list}>
            <DailyItem title="Daily task 1" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." points={100} image="https://pmsigns.ca/wp-content/uploads/2021/02/1586847291-1260w__mg_8948b-1.jpg"/>
            <DailyItem title="Daily task 2" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." points={100} image="https://pmsigns.ca/wp-content/uploads/2021/02/1586847291-1260w__mg_8948b-1.jpg"/>
            <DailyItem title="Daily task 3" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." points={100} image="https://pmsigns.ca/wp-content/uploads/2021/02/1586847291-1260w__mg_8948b-1.jpg"/>
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
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{points} points</p>
         </div>
      </div>
   )
}
