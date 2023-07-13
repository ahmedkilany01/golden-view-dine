import React, { Component } from "react";

import Container from "../../../../components/Container";

import Info from "../../../../mock/info";

import Style from "./style.module.css";

export default class Menu extends Component {
  render() {
    return (
      <div className={Style.menu_container}>
        <Container>
          <div className={Style.content}>
            <div className={Style.header}>
              <h2 className="section_header">straight from kitchen</h2>
              <p>our menu</p>
            </div>
            <div className={Style.meals}>
              {Info.menu.map((meal) => (
                <div key={meal.id} className={Style.meal}>
                  <img src={meal.image} alt="" className={Style.meal_img} />
                  <div className={Style.meal_details}>
                    <p className={Style.meal_name}>{meal.title}</p>
                    <p className={Style.meal_description}>{meal.description}</p>
                  </div>
                  <p className={Style.price}>Rs {meal.price}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
