import React from 'react'
import p2 from '/p2.jpg'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Menu = ({meal}) => {
  return (
    <>
       <section className="menu-list">
  <div className="menu-header">
    <h2>Our Menu</h2>
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
    {/* {meals.map((meal) => ( */}
      <div key={meal._id} className="menu-card">
        <div className="menu-img">
          <img src={meal.images} alt="" />
        </div>
        <div className="menu-text">
          <h3>{meal.name}</h3>
          <p>{meal.description}</p>
          <div className="price-cart">
            <p>20</p>
            <div className="cart">
              <ShoppingCartIcon className='btn-cart'/>
            </div>
          </div>
        </div>
      </div>
    {/* ))} */}
  </div>
</section>
    </>
  )
}

export default Menu