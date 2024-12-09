import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Cotizaciones</h1>
      <div className='square'>
        <div className='titulo'>
          titulo
        </div>

        <div className='cotizacion'>
          Cotizacion
        </div>
        
        <div className='variacion'>
          variacion
        </div>
                
      </div>
      
    </>
  )
}

export default App
