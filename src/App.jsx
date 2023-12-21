import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/NavBar/Navbar'
import Hero from './components/NavBar/Hero'
import FoodList from './components/NavBar/FoodList'
// import Menu from '@mui/icons-material/Menu'
import Menu from './components/NavBar/Menu'
import AboutHero from './components/NavBar/AboutHero'
import Table from './components/NavBar/Table'
import { RouterProvider } from 'react-router-dom'
import {router} from './routers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={router}/>
     
    </>
  )
}

export default App
