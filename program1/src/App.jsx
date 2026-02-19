import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeToggle from './component/Theme/ThemeToggle.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeToggle />
  )
}

export default App;
