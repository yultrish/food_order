import React from 'react'
import p2 from '/p2.jpg'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Menu = () => {
  return (
    <>
    <section className="menu-list">
        <div className="menu-header">
            <h3>Our Menu</h3>
        </div>
        <div className="menu-list">
            <ul>
                <li>All</li>
                <li>Burger</li>
                <li>Pasta</li>
               <li>Fries</li>
            </ul>
        </div>
        <div className="all-menu">
            <div className="menu-card">
                <div className="menu-img">
                  <img src={p2} alt="" />
                </div>
                <div className="menu-text">
                    <h3>Delicious Pizza</h3>
                    <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque </p>
                    <div className="price-cart">
                        <p>20</p>
                        <div className="cart">
                          <ShoppingCartIcon className='btn-cart'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="menu-card">
                <div className="menu-img">
                  <img src={p2} alt="" />
                </div>
                <div className="menu-text">
                    <h3>Delicious Pizza</h3>
                    <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque </p>
                    <div className="price-cart">
                        <p>20</p>
                        <div className="cart">
                          <ShoppingCartIcon className='btn-cart'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="menu-card">
                <div className="menu-img">
                  <img src={p2} alt="" />
                </div>
                <div className="menu-text">
                    <h3>Delicious Pizza</h3>
                    <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque </p>
                    <div className="price-cart">
                        <p>20</p>
                        <div className="cart">
                          <ShoppingCartIcon className='btn-cart'/>
                        </div>
                    </div>
                </div>
            </div>     
        </div>
        <div className="menu-btn">
                <button>View More</button>
            </div>
    </section>
    </>
  )
}

export default Menu