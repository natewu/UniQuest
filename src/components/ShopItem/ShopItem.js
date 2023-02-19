import { Dialog } from "components/Dialog/Dialog";
import styles from "./ShopItem.module.scss"
import Popup from 'reactjs-popup';


export function ShopItem({data}){
    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }
    let randoCode = makeid(10);
    const PopupExample = () => (
        <Popup trigger={<button className={styles.butt} >Redeem</button>} position="top left">
            {close => (
              <div className={styles.bigCard}>
                <a className="close" onClick={close} style={{color:"black", textDecoration: "none",fontSize:"35px",margin:"15px"}}>
                    &times;
                </a>
                
                <div style={{margin:"10px"}}>
                    <h3 className={styles.center}>You got: {data.offer}!</h3>

                    <p className={styles.center}>{data.description}</p>
                    <p className={styles.center} style={{marginBottom:"0px", verticalAlign:"bottom",margin:"20px"}}>Coupon Code: {randoCode}</p>
                </div>

              </div>
              
            )}
          </Popup>
        );
    return (

        <div className={styles.card}>
            <Dialog>
                hi
            </Dialog>
            <div className={styles.cardBody}>
                <div className={styles.card__info}>
                    <h6>{data.offer}</h6>
                    <h7 className="card-subtitle mb-2 text-muted">{data.points} points</h7>
                </div>

                <div className={styles.card__info}>
                    <PopupExample data = {{offer:data.offer, description:data.description}} />
                </div>
            </div>
        </div>

    );
}