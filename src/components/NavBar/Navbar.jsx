import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
// import { CarCrashOutlined } from '@mui/icons-material';
// import { useState } from 'react';


const Navbar = () => {

  return (
    <>
    <nav>
        <div className="brand">
            <MenuIcon className='menu-icon'/>
            <span>Yultrish</span>          
        </div>
        <ul className="list">
            <Link to="/">
            <li className="item active">Home</li>
            </Link>
            <Link to="/menu">
            <li className="item">Menu</li>
            </Link>
            <Link to="/about">
            <li className="item">About</li>
            </Link>
            <li className="item">Book Table</li>
            
        </ul>
        <div className="icons-btn">
          <PersonOutlineIcon/>
          <ShoppingCartIcon/>
          <SearchIcon/>
           <button>Order Now</button> 
        </div>
    </nav>
    </>
  )
}

export default Navbar