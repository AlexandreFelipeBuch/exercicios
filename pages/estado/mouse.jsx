import React, { useState } from 'react'

export default function mouse() {

  const [x, alteraX] = useState(0)

  const [y, alteraY] = useState(0)


  const estilo = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
    color: "#fff",
    height: "100vh",
  }
  function quandoMover(event) {
    alteraX(event.clientX)
    alteraY(event.clientY)
  }
  return (
    <div div style={estilo} onMouseMove={quandoMover}>

      <div>Eixo X: {x}</div>
      <div>Eixo Y: {y}</div>

    </div>
  )
}
