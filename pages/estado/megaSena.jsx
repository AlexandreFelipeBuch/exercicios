import React, { useState } from 'react'
import { mega } from '../../functions/mega'
import ContadorDisplay from '../../components/indireta1/ContadorDisplay'

export default function megaSena() {

  const [numeros, setNumeros] = useState (mega())

  function renderizarNumeros() {
    return numeros.map(numero => <ContadorDisplay key={numero} numero={numero} />)
  }

  return (
    <div
      style={{

        display: 'flex',
        flexDirection: "column",
        alignItems: 'center'

      }}
    >
      <h1> Mega Sena</h1>
      <div style={{ display: 'flex' }}>{renderizarNumeros()}</div>
      <div>
        <button onClick={() => setNumeros(mega())}>
          Gerar Aposta
        </button>
      </div>
    </div >

  )
}
