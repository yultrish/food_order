import React from "react";
import AboutHeroImage from '/images/aboutimg.png'

const AboutHero = () => {
  return (
    <>
      <section className="abt-hero-section white-bg">
        <div className="text-btn hero-text-btn">
          <h2>Ghanaian dishes Restaurant</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All
          </p>
          <button>Order Now</button>
        </div>
        <div className="hero">
          <img src={AboutHeroImage} alt="" width={"90%"}/>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
