import React, { Component } from "react";

import Container from "../../../../components/Container";
import Button from "../../../../components/Button";

import Style from "./style.module.css";

export default class Subscribe extends Component {
  render() {
    return (
      <Container>
        <div className={Style.container}>
          <div className={Style.text}>
            <img src="" alt="" />
            <p>Subscribe to our Newsletter</p>
          </div>
          <div className={Style.subscribe}>
            <input type="text" placeholder="Your Email.." />
            <Button>Subscribe</Button>
          </div>
        </div>
      </Container>
    );
  }
}
