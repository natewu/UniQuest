import { Profile } from "../Profile/Profile";
import styles from './Status.module.scss';

export function Status(){

    return(
    <div className={styles.QR}>
        <div style={{ 
            margin: "0",
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            transform: "translate(-50%, -50%)",
            }}>
            
            <Profile data={{points:20, name:"kongaroo", profile:"https://i.pinimg.com/280x280_RS/e4/86/86/e4868681b6e2cc4ce83c3b9a5d010b6c.jpg"}}/>

            <div className={styles.egg}></div>
            <div class={styles.main}>

            <h3 className={styles.header}>Today</h3>

                <div className={styles.container}>
                    <ul className={styles.firstValuesList} >
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

                <h3 className={styles.header}>Lifetime</h3>


                <div className={styles.container}>
                    <ul className={styles.firstValuesList}>
                        {/* <h3 className={styles.header}>Lifetime</h3> */}
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
        </div>
    </div>

    );

}

export default Status;