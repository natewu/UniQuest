import styles from './Status.module.scss';

export function Status(){

    return(

    <div class={styles.main}>
        <div className={styles.container}>
            <ul >
                <h3 className={styles.header}>Today</h3>
                <li className={styles.values}>Rewards</li>
                <li className={styles.values} >Points</li>
                <li className={styles.values}>Codes</li>
            </ul>
            <ul className={styles.valuesList}>
                <li className={styles.values}>$2</li>
                <li className={styles.values}>100</li>
                <li className={styles.values}>6</li>

            </ul>
        </div>

        <div className={styles.container}>
            <ul>
                <h3 className={styles.header}>Lifetime</h3>
                <li className={styles.values}>Rewards</li>
                <li className={styles.values}>Points</li>
                <li className={styles.values}>Codes</li>
            </ul>
            <ul className={styles.valuesList}>
                <li className={styles.values}>$20</li>
                <li className={styles.values}>840</li>
                <li className={styles.values}>42</li>
            </ul>
        </div>
        
   
    </div>

    );

}

export default Status;