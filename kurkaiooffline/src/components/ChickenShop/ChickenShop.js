import { ChickenList } from "./ChickenList";
import { FoodList } from "./FoodList";
import { SeedList } from "./SeedList";
import { useState, useEffect } from "react";
import Styles from "./ChickenShop.module.css"

export const ChickenShop = (props) =>{

    const [shopTab, setShopTab] = useState(1)

    return(
        <>
            <h1>CHICKMART</h1>
            <button className={Styles.navigation} onClick={() => props.setCurrentStage(2)}>Go to town</button>
            <div className={Styles.tabMenu}>
                <button onClick={() => setShopTab(1)}>Birds</button>
                <button onClick={() => setShopTab(2)}>Food</button>
                <button onClick={() => setShopTab(3)}>Seeds</button>
            </div>
            <div className={Styles.shopWindow}>
                {shopTab == 1 && <ChickenList functionWrapper={props.functionWrapper}/>}
                {shopTab == 2 && <FoodList functionWrapper={props.functionWrapper}/>}
                {shopTab == 3 && <SeedList functionWrapper={props.functionWrapper}/>}                                     
            </div>
        </>
    )
}