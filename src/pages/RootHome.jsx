import React from 'react'
import Navbar from '../components/NavBar/Navbar'
import { Outlet } from 'react-router-dom'
import AboutHero from '../components/NavBar/AboutHero'
import Hero from '../components/NavBar/Hero'
import Menu from '../components/NavBar/Menu'
import FoodList from '../components/NavBar/FoodList'
import Table from '../components/NavBar/Table'

const RootHome = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <FoodList/>
    <Menu/>
    <AboutHero/>
    <Table/>
    <Outlet/>
    </>
  )
}

export default RootHome