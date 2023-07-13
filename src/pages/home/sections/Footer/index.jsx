import React, { Component } from "react";
import Container from "../../../../components/Container";

import Style from "./style.module.css";

export default class Footer extends Component {
  render() {
    return (
      <div className={Style.footer_contaienr}>
        <Container>
          <div className={Style.content}>
            <p>Copyright © 2022 Golden Dine website</p>
            <p>All rights reserved</p>
          </div>
        </Container>
      </div>
    );
  }
}
