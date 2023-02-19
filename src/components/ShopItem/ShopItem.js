import styles from "./ShopItem.module.scss"

export function ShopItem({data}){
    console.log(data);
    return (

        <div className={styles.card}>
            <div className={styles.cardBody}>
                <div className={styles.card__info}>
                    <h6>{data.offer}</h6>
                    <h7 className="card-subtitle mb-2 text-muted">{data.points} points</h7>
                </div>

                <div className={styles.card__info}>
                    <button className={styles.butt}>Redeem</button>
                </div>
            </div>
        </div>

    );
}