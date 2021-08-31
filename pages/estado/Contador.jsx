import React, { useState } from 'react'
import ContadorDisplay from '../../components/indireta1/ContadorDisplay'

export default function Contador() {

  const [numero, setNumero] = useState(0)

  const inc = () => setNumero(numero + 1)

  const dec = () => setNumero(numero - 1)

  return (

    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'

    }}>
      <h1>Contador</h1>
      <ContadorDisplay numero={numero} />
      <button onClick={dec}>-</button>
      <button onClick={inc}>+</button>

    </div>
  )
}
