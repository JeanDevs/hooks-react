import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [startNumber, setStartNumber] = useState(1)
  const [endNumber, setEndNumber] = useState(100)

  const handleStartNumberChange = (event) => {
    setStartNumber(event.target.value);
    console.log()
  }

  const handleEndNumberChange = (event) => {
    setEndNumber(event.target.value);
    console.log()
  }

  return (
      <>
      <div>
        <header>
          <h1>
            SORTEO DE NUMEROS
          </h1>
        </header>
        <div>
          <p>Ingrese el rango de números a sortear</p>
        </div>
        <div>
          <input type="number" id="startNumber" placeholder='Ingresa el número inicial' onChange={handleStartNumberChange} value={startNumber}/>
        </div>
        <div>
          <input type="number" id="EndNumber" placeholder='Ingresa un rango' onChange={handleEndNumberChange} value={endNumber}/>
        </div>
        <div>
          <button>Inicia Sorteo</button>
        </div>

      </div>
    </>
  )
}

export default App
