import { Level } from "../../helpers/imc";
import styles from "./GridItem.module.css";
import upImage from "../../assets/up.png";
import downImage from "../../assets/down.png";

type Props = {
    item: Level
};
export const GridItem = ({item}: Props) => {
    return <div 
    className={styles.main} 
    style={{backgroundColor: item.color}}>
    <div className={styles.gridIcon}>
        <img src={item.icon === 'down' ? downImage : upImage} alt={item.icon} width={30}/>
    </div>
    <div className={styles.gridTitle}>{item.title}</div>
    {
        item.yourBmi&&
        <div className={styles.gridYourBMI}>
            Seu IMC é {(item.yourBmi).toFixed(1)}.
        </div>
    }
     
    <div className={styles.gridInfo}>
        <>
        O IMC está entre <strong>{item.bmi[0]}</strong> e <strong>{item.bmi[1]}</strong>
        </>
    </div>
    </div>;
};