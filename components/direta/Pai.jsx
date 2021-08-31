import React from 'react'
import Filho from './Filho'

export default function Pai(props) {
  return (
    <div>
      <Filho
        nome='Carlos'
        familia={props.familia}
      />
      <Filho
        nome='Tereza'
        familia={props.familia}

      />
      <Filho
        nome='Joao'
        familia={props.familia}
      />
    </div>
  )
}
