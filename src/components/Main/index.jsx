import React from 'react'
import Die from '../Die'
import RollBtn from '../rollBtn'
import  { useState } from 'react'
import { nanoid } from 'nanoid'

export default function Main() {
    //Initial Value set to an object created by the generateAllNewDice Function
    const [dice, setDice] = useState(generateAllNewDice())
    
    // //function to generate random number 1-10
    // function generateAllNewDice(min, max, n=1) {
    //    return Array.from(
    //    {length: n}, 
    //    () => (Math.floor(Math.random() * (max - min +1)) + min
    //    ))
    // }
    // console.log(generateAllNewDice(1, 6, 10));

    // function generateAllNewDice() {
    //     //create an empty array
    //     const newDiceArray = [];
    //     //loop 10 times
    //     for(let i = 0; i < 10; i++){
    //         const rand = Math.ceil(Math.random()*6)
    //         newDiceArray.push(rand)
    //     }
    //     return newDiceArray
    // }

    // console.log(generateAllNewDice())

    function generateAllNewDice(){
        //return a new array
        return new Array(10)
        //fill the array from index 0
        .fill(0)
        //map the 10 spaces in the array to MAKE AN OBJECT random numbers
        .map(() => ({
            value: Math.ceil(Math.random() * 6), 
            isHeld:false,
            id: nanoid(),
        }))
    }
 
    function hold(id){
        //console.log(id)
        //map over the dice
        //if the item has the same id as the one passed to the function
        setDice(oldDice => {
            return oldDice.map(die => {
             return die.id === id ? 
             {...die, isHeld: !die.isHeld} :
             die
        })
      })
    }

    //map over dice array of objects here
    const diceElements = dice.map((dieObj)=>  (
    <Die 
    value={dieObj.value} 
    key={dieObj.id}
    id={dieObj.id}
    isHeld={dieObj.isHeld}
    hold={hold}
     /> 
     ))


  return (
    <main className="mainElement">
    <div className="dice-container">
    {diceElements}
    </div>
    <RollBtn generateAllNewDice={generateAllNewDice} setDice={setDice} />
    </main>
  )
}
