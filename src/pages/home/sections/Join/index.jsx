import React, { Component } from "react";

import Container from "../../../../components/Container";
import Button from "../../../../components/Button";

import Image_src from "../../../../assets/Images/join.svg";

import Style from "./style.module.css";

export default class Join extends Component {
  render() {
    return (
      <div className={Style.container}>
        <Container>
          <div className={Style.content}>
            <img src={Image_src} alt="" className={Style.image} />
            <div className={Style.text_container}>
              <p>Come join us for a lunch this weekend and enjoy</p>
              <p>flat 10% off</p>
              <Button>Book Table</Button>
            </div>
            <img src={Image_src} alt="" className={Style.image} />
          </div>
        </Container>
      </div>
    );
  }
}
