import Records from './FoodRecords.json'
import Styles from './FoodList.module.css'
import { useEffect } from 'react';


export const FoodList = (props) =>{

    return(
        Records.map( record =>{
            return(
                <div className={Styles.container} key={record.id}>
                    <div className={Styles.leftCont}>
                       <img className={Styles.img} src={record.Img}></img>
                       {localStorage.getItem("Food" + record.id) === null && localStorage.setItem("Food" + record.id, "0")}
                       <p className={Styles.textO}>{`Owned: ${localStorage.getItem("Food" + record.id)} kg`}</p>
                    </div>
                    <div className={Styles.rightCont}>
                        <h3 className={Styles.title}>{record.Name}</h3>
                        <p className={Styles.text}>{`Laying egg multiplier: x${record.Multi}`}</p>
                        <p className={Styles.text}>{`Calorific value: ${record.Cal}`}</p>
                        <p className={Styles.text}>{record.Desc}</p>
                        <button onClick={() => props.functionWrapper("Food", record.Cost, record.id, 0, 1)} className={Styles.btn}>Buy 1 kg - ${record.Cost}</button>
                        <br/>
                        <button onClick={() => props.functionWrapper("Food", record.Cost*10, record.id, 0, 10)} className={Styles.btn}>Buy 10 kg - ${record.Cost*10}</button>
                        <br/>
                        <button onClick={() => props.functionWrapper("Food", record.Cost*100, record.id, 0, 100)} className={Styles.btn}>Buy 100 kg - ${record.Cost*100}</button>
                    </div>
                </div>)

        })
    )
}