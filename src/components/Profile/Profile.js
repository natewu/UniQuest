import styles from "./Profile.module.scss"

export function Profile({data}){
    console.log(data);
    return (

        <div className={styles.card}>
            <div className={styles.cardBody}>
                <div>
                <img className={styles.profile} src={data.profile} alt="pic"></img>
                </div>
                <div>
                    <h6 className="card-title">{data.name}</h6>
                    <h7 className="card-subtitle mb-2 text-muted">{data.points} points</h7>
                </div>
            </div>
        </div>

    );
}