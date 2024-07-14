import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CartaPresentacion from './components/CartaPresentacion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CartaPresentacion/>
    </>
  )
}

export default App
