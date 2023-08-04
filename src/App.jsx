import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './components/Item'
import Intro from './components/Intro'
import Arr from './components/Arr'
import About from './components/About'
// import Game from './components/Game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Intro />
      <About/>
      <Item />

    </>
  )
}

export default App
