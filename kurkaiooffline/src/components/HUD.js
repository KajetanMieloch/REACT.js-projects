import { GameWindow } from "./GameWindow"
import { useState } from "react"
import { useEffect } from "react"

export const HUD = () =>{

    const sessionInit = (name, starterValue) =>{
        let present
        {localStorage.getItem(name) === null ? present = starterValue : present = parseFloat(localStorage.getItem(name))}
        return present 
}


    const [money, setMoney] = useState(sessionInit("Money",1000 ))
    const [eggPrice, setEggPrice] = useState(sessionInit("EggPrice",0.2 ))
    const [eggCount, setEggCount] = useState(sessionInit("EggCount",0 ))
    const [eggPerMin, setEggPerMin] = useState(sessionInit("EggPerMin",0 ))


    const functionWrapper = (ver, price, id, eggAmount, buyAmount) =>{
        if(ver == "Birds"){
            buyChicken(price, id, eggAmount, buyAmount); 
        }
        else if(ver == "Food"){
            buyFood(price, id, buyAmount)
        }
        else if(ver == "Seed"){
            buySeed(price, id, buyAmount)
        }
   
    }


    const buyChicken = (price, id, eggAmount, buyAmount) =>{
        if(money - price >= 0){
            setMoney((money - price).toFixed(2))
            let previousCount = parseInt(localStorage.getItem("Chicken" + id))
            localStorage.setItem("Chicken" + id, previousCount += buyAmount)
            localStorage.setItem("Money", (money - price).toFixed(2))
            eggHandler(eggAmount);
            
        }
        else{
            popUp()
        }

    }

    const buyFood = (price, id, buyAmount) =>{
        if(money - price >= 0){
            setMoney((money - price).toFixed(2))
            let previousCount = parseInt(localStorage.getItem("Food" + id))
            localStorage.setItem("Food" + id, previousCount += buyAmount)
            localStorage.setItem("Money", (money - price).toFixed(2))
            
        }
        else{
            popUp()
        }

    }

    const buySeed = (price, id, buyAmount) =>{
        if(money - price >= 0){
            setMoney((money - price).toFixed(2))
            let previousCount = parseInt(localStorage.getItem("Seed" + id))
            localStorage.setItem("Seed" + id, previousCount += buyAmount)
            localStorage.setItem("Money", (money - price).toFixed(2))
            
        }
        else{
            popUp()
        }

    }

    const popUp = () =>{
        window.alert("No funds")
    }

    const eggHandler = (addEggPerMin) =>{
        setEggPerMin(parseInt(eggPerMin) + parseFloat(addEggPerMin))
        localStorage.setItem("EggPerMin", eggPerMin + parseFloat(addEggPerMin))
    }

    const clearAll = () =>{
        localStorage.clear();
        document.location.reload();
    }

    const giveMoney = () =>{
        localStorage.setItem("Money", 100000)
        document.location.reload()
    }

    useEffect(() => {
        //Egg Count updater (1sec)
        const interval = setInterval(() => {
        if(eggPerMin != 0){
            setEggCount((prevCounter) => prevCounter + ((parseFloat(eggPerMin)))/1200);
            localStorage.setItem("EggCount", eggCount)
        }
        else{

        }

        }, 50);
    
        return () => clearInterval(interval);
      });


      
      useEffect(() => {
        //Money rounder
        let moneyF = parseFloat(money)
        setMoney(moneyF.toFixed(2))
      }, [money]);

    return(
        <>
        <h2>{`Money: ${money}`}</h2>
        <h2>{`Egg price $${eggPrice}`}</h2>
        <h2>{`Egg count: ${Math.floor(eggCount)}`}</h2>
        <button onClick={() => clearAll()}>debug.ClearAll</button>
        <button onClick={() => giveMoney()}>debug.SetMoney100000</button>
        <hr/>
        <GameWindow sessionInit={sessionInit} functionWrapper={functionWrapper}/>
        </>
    )

}