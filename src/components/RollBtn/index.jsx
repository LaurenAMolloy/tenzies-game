import React from 'react'

export default function RollBtn({generateAllNewDice, setRandomNumbers}) {
    function handleRoll(){
        setRandomNumbers(generateAllNewDice())
    }

  return (
    <button onClick={handleRoll}>Roll</button>
  )
}
