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

            {/* <div className={styles.egg}></div> */}
            <div class={styles.main}>
                <div>
                    <h3 className={styles.header}>Today</h3>

                    <div className={styles.container}>
                        <div className={styles.info} >
                            <p className={styles.values}>Rewards</p>
                            <p className={styles.values} >Points</p>
                            <p className={styles.values}>Codes</p>
                        </div>
                        <div className={styles.info2}>
                            <p className={styles.values}>$2</p>
                            <p className={styles.values}>100</p>
                            <p className={styles.values}>6</p>

                        </div>
                    </div>    
                </div>
                

                <div>
                    <h3 className={styles.header}>Lifetime</h3>


                    <div className={styles.container}>
                        <div className={styles.info}>
                            {/* <h3 className={styles.header}>pfetime</h3> */}
                            <p className={styles.values}>Rewards</p>
                            <p className={styles.values}>Points</p>
                            <p className={styles.values}>Codes</p>
                        </div>
                        <div className={styles.info2}>
                            <p className={styles.values}>$20</p>
                            <p className={styles.values}>840</p>
                            <p className={styles.values}>42</p>
                        </div>
                    </div>
                </div>
                
                
        
            </div>
        </div>
    </div>

    );

}

export default Status;