import React, { Component } from "react";
import AboutUs from "./sections/AboutUs";
import Blogs from "./sections/Bolgs";
import Contact from "./sections/Contact";
import CookingIngredient from "./sections/Cooking";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Join from "./sections/Join";
import Menu from "./sections/Menu";
import Reviews from "./sections/Reviews";
import Special from "./sections/Special";
import Status from "./sections/Status";
import Subscribe from "./sections/Subscribe";

import Style from "./style.module.css";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <Hero />
        <div className={Style.container}>
          <AboutUs />
          <Special />
          <Menu />
          <Join />
          <CookingIngredient />
          <Status />
          <Reviews />
          <Blogs />
          <Contact />
          <Subscribe />
          <Footer />
        </div>
      </>
    );
  }
}
