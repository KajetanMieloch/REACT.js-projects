import Records from './Records.json'
import Styles from './ChickenList.module.css'
import { useEffect } from 'react';


export const ChickenList = (props) =>{

    return(
        Records.map( record =>{
            return(
                <div className={Styles.container} key={record.id}>
                    <div className={Styles.leftCont}>
                       <img className={Styles.img} src={record.Img}></img>
                       {localStorage.getItem("Chicken" + record.id) === null && localStorage.setItem("Chicken" + record.id, "0")}
                       <p className={Styles.textO}>{`Owned: ${localStorage.getItem("Chicken" + record.id)}`}</p>
                    </div>
                    <div className={Styles.rightCont}>
                        <h3 className={Styles.title}>{record.Name}</h3>
                        <p className={Styles.text}>{`${record.EggAmount} Egg/Min`}</p>
                        <p className={Styles.text}>{`Min comfort lvl: ${record.Comfort}`}</p>
                        <p className={Styles.text}>{`Callories needed: ${record.FoodComsuption} kcal`}</p>
                        <p className={Styles.text}>{record.Desc}</p>
                        <button onClick={() => props.functionWrapper("Birds" ,record.Cost, record.id, record.EggAmount, 1)} className={Styles.btn}>Buy 1 chick - ${record.Cost}</button>
                        <br/>
                        <button onClick={() => props.functionWrapper("Birds" ,record.Cost*10, record.id, record.EggAmount*10, 10)} className={Styles.btn}>Buy 10 chicks - ${record.Cost*10}</button>
                    </div>
                </div>)

        })
    )
}