import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './components/header/header'
import Buttons from './components/buttons/btn'
import {Hero} from './components/hero/hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Hero/>
    
    </>
  )
}

export default App
