import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todocard from './component/TO-DO-List/Todocard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Todocard/>
  )
   
}

export default App
