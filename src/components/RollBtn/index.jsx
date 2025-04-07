import React from 'react'

export default function RollBtn({ setDice, gameWon }) {
    
  function handleRoll() {
    //map over the dice
    //if dice is not held update value to a new new random number
    if(!gameWon) {
      setDice(oldDice => oldDice.map(die => 
            die.isHeld ?
            die :
            {...die,
            value: Math.floor(Math.random() * 6) }
        ))
    } else {
      setDice(generateAllNewDice())
    }
  }
    
  return (
    <button onClick={handleRoll}>{gameWon ? "Won" : "Roll"}</button>
  )
}
