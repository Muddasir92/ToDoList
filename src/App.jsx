import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDolList from './assets/components/toDolList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ToDolList/>
    </>
  )
}

export default App
