import React, { useContext, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { AuthContext } from "../../contextApi/authContext";

const Navbar = () => {
  const { setCartCount, cartCount } = useContext(AuthContext);
  const [menuVisibility, setMenuVisibility] = useState(false);

  const toggleMenu = () => {
    setMenuVisibility((prevVisibility) => !prevVisibility);
  };

  return (
    <>
      <nav>
        <div className="brand">
          <div className="icon-menu">
            <MenuIcon
              className="menu-icon"
              style={{
                fontSize: "3rem",
                visibility: menuVisibility ? "hidden" : "visible",
              }}
              onClick={toggleMenu}
            />
            <CloseIcon
              className="close-icon"
              style={{
                fontSize: "3rem",
                visibility: menuVisibility ? "visible" : "hidden",
              }}
              onClick={toggleMenu}
            />
          </div>
          <h2>Yultrish</h2>
        </div>
        <ul className={`list ${menuVisibility ? "visible" : "hidden"}`}>
          <Link to="/home">
            <li className="item active">Home</li>
          </Link>
          <Link to="/menu">
            <li className="item">Menu</li>
          </Link>{" "}
          <Link to="/admin">
            <li className="item">Admin</li>
          </Link>
          <Link to="/about">
            <li className="item">About</li>
          </Link>
          <Link to="/book">
            <li className="item">Book Table</li>
          </Link>
          <li>
            <div className="icons-btn">
              <div className="nav-icons">
                <PersonOutlineIcon className="icon" />
                <Link to='/cart-page'>
                <ShoppingCartIcon className="icon" />
                </Link>
                <div className="cart-num">
                  <span>{cartCount}</span>
                </div>
                <SearchIcon className="icon" />
              </div>
              <button>Order Now</button>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
