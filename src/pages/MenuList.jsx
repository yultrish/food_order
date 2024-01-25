import React, { useContext, useEffect } from "react";
import Navbar from "../components/NavBar/Navbar";
import { Outlet } from "react-router-dom";
import Menu from "../components/NavBar/Menu";
import Footer from "../components/NavBar/Footer";
import { useLoaderData } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AuthContext } from "../contextApi/authContext";
import Swal from "sweetalert2";

const MenuList = () => {
  const { setCartCount } = useContext(AuthContext);

  useEffect(() => {
    // Retrieve user information from local storage and update cart count on page load
    const user = JSON.parse(localStorage.getItem("userInfo"));
    console.log(user);
    if (user) {
      setCartCount(user.orders.length);
    }
  }, []);
  const meals = useLoaderData();
  console.log(meals);
  const token = localStorage.getItem("token");
  console.log(token);

  const createNewOrder = async (meal) => {
    const token = localStorage.getItem("token");
    console.log("Meal ID:", meals);
    console.log("Meal Object:", meal);
    console.log(meal.price);

    // const user = localStorage.getItem("user");
    try {
      const response = await fetch(`http://localhost:3080/d1/newOrder`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          orderItems: [{ _id: meal._id, name: meal.name, price: meal.price, totalQtyBuying: 1 }],
          shippingAddress: "123 Main St", 
          totalPrice: meal.price * 1, 
        }),
      });

      // console.log(response.user.orders)

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      if (result){
        Swal.fire({
          icon: "success",
          title: "Good Job",
          text: "Product added to cart successfully",
        });
      }
      console.log("New order created:", result);
      console.log("Result:", result);
      // if (result.orderItems && result.orderItems.length > 0) {
        setCartCount(result.user.orders.length);
      setCartCount(result.user.orders.length); 
    } catch (error) {
      console.error("Error creating new order:", error);
    }
  };

  // const meals = useLoaderData()
  console.log(meals);
  // console.log(meals.name);

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
          {meals.map((meal) => (
            <div key={meal._id} className="menu-card">
              <div className="menu-img">
                <img src={meal.images} alt="" />
              </div>
              <div className="menu-text">
                <h3>{meal.name}</h3>
                <p>{meal.description}</p>
                <div className="price-cart">
                  <p>{meal.price}</p>
                  <div className="cart">
                    <ShoppingCartIcon
                      // onClick={() => createNewOrder(meal._id)}
                      onClick={() => {
                        console.log("Meal Object Before Order:", meal);
                        createNewOrder(meal);
                      }}
                      className="btn-cart"
                    />
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MenuList;

export const mealsLoaderData = async () => {
  try {
    const meals = await fetch(`http://localhost:3080/v1/meals`);
    const response = await meals.json();
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error fetching meals:", error);
  }
};

{
  /* <section className="menu-list">
{meals.map((meal)=>(
  <Menu key={meal._id} meal={meal}/>  
))}
</section> */
}
