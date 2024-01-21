import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Link, Navigate, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
// import { CarCrashOutlined } from '@mui/icons-material';
// import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  
  const display = () => {
  const list = document.querySelector(".list");
  const closeIcon = document.querySelector(".close-icon");
  const menuIcon = document.querySelector(".menu-icon");
    console.log(closeIcon)
    menuIcon.style.visibility = "hidden";
    closeIcon.style.visibility = "visible";
    list.style.display = "block";
    console.log(list);
  };

  const close = () => {
    const list = document.querySelector(".list");
  const closeIcon = document.querySelector(".close-icon");
  const menuIcon = document.querySelector(".menu-icon");
    // const list = document.querySelector(".list");
    
     menuIcon.style.visibility = "visible";
    closeIcon.style.visibility = "hidden";
    list.style.display = "none";
    console.log(list);
  };

  return (
    <>
      <nav>
        <div className="brand">
          <div className="icon-menu" >
            <MenuIcon className="menu-icon" style={{ fontSize: "3rem" }} onClick={() => display()}/>
            <CloseIcon className="close-icon" style={{ fontSize: "3rem" }} onClick={() => close()} />
          </div>
          <h2>Yultrish</h2>
        </div>
        <ul className="list">
          {/* <div className="nav-item"> */}
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
          {/* </div> */}
          <li>
            <div className="icons-btn">
              <div className="nav-icons">
                <PersonOutlineIcon />
                <ShoppingCartIcon />
                <SearchIcon />
              </div>
              <button>Order Now</button>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

// export default Navbar;
