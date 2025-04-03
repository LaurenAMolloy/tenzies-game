import React from 'react'

export default function RollBtn({generateAllNewDice, setDice}) {
    function handleRoll(){
        setDice(generateAllNewDice())
    }

  return (
    <button onClick={handleRoll}>Roll</button>
  )
}
