import React, { Component } from "react";

import Container from "../../../../components/Container";
import Info from "../../../../mock/info";

import Style from "./style.module.css";

export default class Status extends Component {
  render() {
    return (
      <div className={Style.status_container}>
        <Container>
          <div className={Style.content}>
            {Info.status.map((item) => (
              <div key={item.title} className={Style.item}>
                <img src="" alt="" />
                <div>
                  <p>{item.number}+</p>
                  <span>{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }
}
