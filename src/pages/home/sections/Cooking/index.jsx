import React, { Component } from "react";

import Container from "../../../../components/Container";
import Button from "../../../../components/Button";
import Image from "../../../../assets/Images/cooking.svg";

import Style from "./style.module.css";

export default class CookingIngredient extends Component {
  render() {
    return (
      <div className={Style.cook_container}>
        <Container>
          <div className={Style.content}>
            <div className={Style.right_side}>
              <div className={Style.header}>
                <h2 className="section_header">cooking ingredient</h2>
                <p>what goes on</p>
              </div>
              <p className={Style.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at
                mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar
                orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor
                purus nunc tellus pellentesque nibh mattis. Malesuada integer
                nulla orci convallis sit. At libero lacus, eget fermentum sed
                turpis curabitur donec consectetur. Imperdiet aliquam quam
                mauris semper suscipit.
              </p>
              <Button>Read more</Button>
            </div>
            <img src={Image} alt="" className={Style.image} />
          </div>
        </Container>
      </div>
    );
  }
}
