import React from 'react'
import Navbar from '../components/NavBar/Navbar'
import { Outlet } from 'react-router-dom'
import Menu from "../components/NavBar/Menu";

const MenuList = () => {
  return (
    <>
    <Navbar/>
    <Menu/>
    {/* <Outlet/> */}
    </>
  )
}

export default MenuList