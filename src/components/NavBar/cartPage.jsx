import React, { useEffect, useState } from 'react';
import p2 from '/p2.jpg';

const CartPage = () => {
  const [orders, setOrders] = useState([]);

  // useEffect(() => {
  // const token = localStorage.getItem("token");

  //   const fetchOrders = async () => {
  //     try {
  //       const response = await fetch('http://localhost:3080/d1/getAllOrders',{
  //           method: "GET",
  //           headers: {
  //           //   "Content-Type": "application/json",
  //             Authorization: `Bearer ${token}`,
  //           },
  //       });
  //       const data = await response.json();
  //       console.log(data)
  //       setOrders(data); // assuming the response is an array of orders
  //     } catch (error) {
  //       console.error('Error fetching orders:', error);
  //     }
  //   };

  //   fetchOrders();
  // }, []);

  return (
    <>
      <section className="main-content">
        <section className="content">
          <div className="content-list">
            <h1>Cart List</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>OrderNumber</th>
                  <th>Item</th>
                  <th>Price</th>
                  {/* <th>Category</th> */}
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th>Details</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* {orders.map((order) => ( */}
                  <tr key={order.ID}>
                    {/* <td>{order.orderNumber}</td> */}
                    <td>
                      <div className="flex-td">
                        {/* <img src={p2} alt="" />
                        <h3>{order.itemName}</h3> */}
                      </div>
                    </td>
                    {/* <td>{order.price}</td>
                    <td>{order.quantity}</td>
                    <td>{order.totalPrice}</td> */}
                    <td>
                      <button>View</button>
                    </td>
                  </tr>
                {/* // ))} */}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </>
  );
};

export default CartPage;
