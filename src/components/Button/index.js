import React, { Component } from "react";

import Style from "./style.module.css";

export default class Button extends Component {
  render() {
    const { children } = this.props;
    return <button className={Style.btn}>{children}</button>;
  }
}
