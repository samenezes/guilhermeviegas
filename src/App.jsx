import { useState } from 'react'
import Pagina from './pagina.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pagina/>
    </>
  )
}

export default App
