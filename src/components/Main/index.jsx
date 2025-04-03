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
        //map the 10 spaces in the array to random numbers
        .map(() => ({
            value: Math.ceil(Math.random() * 6), 
            isHeld:false,
            id: nanoid(),
        }))
    }

    //map over dice here
    const diceElements = dice.map((dieObj)=>  <Die value={dieObj.value} key={dieObj.id} /> )


  return (
    <main className="mainElement">
    <div className="dice-container">
    {diceElements}
    </div>
    <RollBtn generateAllNewDice={generateAllNewDice} setDice={setDice} />
    </main>
  )
}
