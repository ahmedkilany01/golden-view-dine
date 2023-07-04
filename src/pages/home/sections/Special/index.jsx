import React, { Component } from "react";

import Style from "./style.module.css";

import Info from "../../../../mock/info";

export default class Special extends Component {
  render() {
    return (
      <div className={Style.container}>
        <div className={Style.content}>
          <div className={Style.header}>
            <h2 className="section_header">Special</h2>
            <p>what makes us special</p>
          </div>

          <div className={Style.cards_container}>
            {Info.special.map((card) => (
              <div key={card.id} className={Style.card}>
                <img src={card.icon} alt={card.title} />
                <p className={Style.title}>{card.title}</p>
                <p className={Style.description}>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
