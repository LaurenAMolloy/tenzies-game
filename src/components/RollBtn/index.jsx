import React from 'react'

export default function RollBtn({ setDice }) {
    
  function handleRoll() {
    //map over the dice
    //if dice is not held update value to a new new random number
    setDice(oldDice => {
      return oldDice.map(die => 
          die.isHeld === false ?
          {...die,
          value: Math.floor(Math.random() * 6) +1 
          } : die
      );
    });
  }
      
  

  return (
    <button onClick={handleRoll}>Roll</button>
  )
}
