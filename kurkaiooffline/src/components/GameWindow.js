import { useState, useEffect } from "react"
import React from "react";
import { ChickenShop } from "./ChickenShop/ChickenShop";
import { HomeFarm } from "./HomeFarm/HomeFarm";
import { Town } from './Town/Town'


export const GameWindow = (props) =>{

    const [currentStage, setCurrentStage] = useState(props.sessionInit("GameWindow", 1))

    useEffect(() => {
        localStorage.setItem("GameWindow", currentStage)
      }, [currentStage]);

    return(
        <div>
            {currentStage == 1 && <HomeFarm setCurrentStage={setCurrentStage}/>}
            {currentStage == 2 && <Town setCurrentStage={setCurrentStage}/>}
            {currentStage == 3 && <ChickenShop setCurrentStage={setCurrentStage} functionWrapper={props.functionWrapper}/>}
        </div>
    )
}