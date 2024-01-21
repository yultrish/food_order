import React from "react";
import client1 from "/client1.jpg";
import client2 from "/client2.jpg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Testimonial = () => {
  return (
    <>
      <section className="testimonial-section">
        <div className="btnsT btns center">
          <h2 className="text-dark">What Says Our Customers</h2>
        </div>

        <div className="testimonial-cards promo-cards grid">
          <div className="promo-card cardT menu-text">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
              repudiandae obcaecati accusantium. Eius modi tempora repellendus
              corporis maxime .
            </p>
            <h3>Mike Hamel</h3>
            <p>Magna Alita</p>
          </div>
          <div className="promo-card cardT menu-text">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
              repudiandae obcaecati accusantium. Eius modi tempora repellendus
              corporis maxime .
            </p>
            <h3>Mike Hamel</h3>
            <p>Magna Alita</p>
          </div>
          <img src={client1} alt="" />
          <img src={client2} alt="" />
        </div>
        <div className="btnsT btns center arrows">
            <div className="arrow">
            <IoIosArrowBack />
            </div>
            <div className="arrow">
          <IoIosArrowForward />
            </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
