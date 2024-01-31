import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Chalengs from './layouts/chalengs/Chalengs'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Chalengs/>
    <Footer/>
    </>
  )
}

export default App
