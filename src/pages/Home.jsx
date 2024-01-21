import React from "react";
import Menu from "../components/NavBar/Menu";
import Hero from "../components/NavBar/Hero";
import FoodList from "../components/NavBar/FoodList";
import AboutHero from "../components/NavBar/AboutHero";
import BookTable from "./BookTable";
import Testimonial from "../components/NavBar/Testimonial";
// import { MenuList } from "@mui/material";
import MenuList from "./MenuList";

const Home = ({meals}) => {
  return (
    <>
     <Hero/>
    <FoodList/>
    {/* <MenuList meals={meals}/> */}
    <BookTable/>
    <Testimonial/>
    </>
  );
};

export default Home;
