import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavbarComponent from './Component/NavbarComponent'
import MainPage from './Template/MainPage'
import FooterComponent from './Component/FooterComponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavbarComponent />
    <MainPage />
    </>
  )
}

export default App
