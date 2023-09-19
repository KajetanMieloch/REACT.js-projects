import Records from './SeedRecords.json'
import Styles from './SeedList.module.css'
import { useEffect } from 'react';


export const SeedList = (props) =>{

    return(
        Records.map( record =>{
            return(
                <div className={Styles.container} key={record.id}>
                    <div className={Styles.leftCont}>
                       <img className={Styles.img} src={record.Img}></img>
                       {localStorage.getItem("Seed" + record.id) === null && localStorage.setItem("Seed" + record.id, "0")}
                       <p className={Styles.textO}>{`Owned: ${localStorage.getItem("Seed" + record.id)} kg`}</p>
                    </div>
                    <div className={Styles.rightCont}>
                        <h3 className={Styles.title}>{record.Name}</h3>
                        <p className={Styles.text}>{`Growth time: ${record.Growth}`}</p>
                        <p className={Styles.text}>{record.Desc}</p>
                        <p className={Styles.textI}>{`*From one seed you will get 0.1kg of grown product`}</p>
                        <button onClick={() => props.functionWrapper("Seed", record.Cost, record.id, 0, 1)} className={Styles.btn}>Buy 1 seed - ${record.Cost}</button>
                        <br/>
                        <button onClick={() => props.functionWrapper("Seed", record.Cost*10, record.id, 0, 10)} className={Styles.btn}>Buy 10 seed - ${record.Cost*10}</button>
                        <br/>
                        <button onClick={() => props.functionWrapper("Seed", record.Cost*100, record.id, 0, 100)} className={Styles.btn}>Buy 100 seed - ${record.Cost*100}</button>
                    </div>
                </div>)

        })
    )
}