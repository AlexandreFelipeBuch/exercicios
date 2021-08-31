import React from 'react'
import Filho from './Filho'

export default function Pai(props) {
  function falarComigo() {
    console.log("Falou comigo")
  }
  return (
    <div>
      <Filho funcao ={falarComigo}/>
    </div>
  )
}
