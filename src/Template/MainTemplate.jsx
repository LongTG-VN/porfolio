import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../Component/NavbarComponent'

const MainTemplate = () => {
  return (
    <>
    <NavbarComponent />
    <Outlet />
    </>
  )
}

export default MainTemplate