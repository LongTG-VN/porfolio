import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import NavbarComponent from './Component/NavbarComponent'
import MainPage from './Template/MainPage'
import FooterComponent from './Component/FooterComponent'
import ServicePage from './Template/ServicePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainTemplate from './Template/MainTemplate'
import DetailCoursePage from './Template/DetailCoursePage'
import ScrollToTop from './Component/ScrollToTop'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <NavbarComponent /> */}
    {/* <MainPage />
     */}

     {/* <ServicePage /> */}
<ScrollToTop/>
   <Routes>
      <Route path="/" element={<MainTemplate />} >
        <Route index element={<MainPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/service/:courseId" element={<DetailCoursePage />} />
      </Route>
    </Routes>



    </>
  )
}

export default App
