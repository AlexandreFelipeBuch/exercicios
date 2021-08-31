import React from 'react'

export default function ContadorDisplay(props) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100px',
      width: '100px',
      borderRadius: '50px',
      backgroundColor: '#222',
      color: '#fff',
      fontSize: '4rem',
      margin: '20px'

    }}>
      {props.numero}

    </div>
  )
}
