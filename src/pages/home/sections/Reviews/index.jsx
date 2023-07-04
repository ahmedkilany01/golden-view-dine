import React, { Component } from "react";

import Style from "./style.module.css";

export default class Reviews extends Component {
  render() {
    return (
      <div className={Style.reviews_container}>
        <div className={Style.content}>
          <div className={Style.header}>
            <h2 className="section_header">reviews</h2>
            <p>words from our food lovers</p>
          </div>
          <div className={Style.cards}>
            <div className={Style.card}>
              <div className={Style.user_info}>
                <img src="" alt="" />
                <div className={Style.name}>
                  <p>Alex Andrina</p>
                </div>
              </div>
              <p className={Style.review}>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at
                mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar
                orci, egestas eget nulla duis at iaculis nunc, elit. “
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
