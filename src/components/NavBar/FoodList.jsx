import React from 'react'
import burger from '/burger.jpg'
import p2 from '/p2.jpg'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const FoodList = () => {
  return (
    <>
    <section className="food-section">
       <div className="promo-cards">
        <div className="food-promo-card">
           {/* <div className="img-card"> */}
            <img src={burger} alt="" />
            {/* </div> */}
            <div className="text-promo">
                <p>Tasty Thursday</p>
                <h2>20% <small>off</small></h2>
                <button>Order Now <ShoppingCartIcon/> </button>
                </div> 
        </div>

        <div className="food-promo-card">
           {/* <div className="img-card"> */}
            <img src={p2} alt="" />
            {/* </div> */}
            <div className="text-promo">
                <p>Piggy Days</p>
                <h2>15% <small>off</small></h2>
                <button>Order Now <ShoppingCartIcon className='btn-cart'/> </button>
                </div> 
        </div>
        </div> 
    </section>
    </>
  )
}

export default FoodList