import React, { Component } from "react";

import Container from "../../../../components/Container";
import Button from "../../../../components/Button";

import Image from "../../../../assets/Images/aboutUS.svg";

import Style from "./style.module.css";

export default class AboutUs extends Component {
  render() {
    return (
      <div className={Style.about_us_container}>
        <Container>
          <div className={Style.container}>
            <div className={Style.content}>
              <div className={Style.header}>
                <h2 className="section_header">About Us</h2>
                <p>
                  Discover the taste of worldclass vegan dishes from the kitchen
                  of Go Green Dine
                </p>
              </div>
              <p className={Style.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at
                mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar
                orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor
                purus nunc tellus pellentesque nibh mattis. Malesuada integer
                consectetur. Imperdiet aliquam quam mauris semper suscipit.
                Molestie maecenas interdum pharetra id velit sed nec.tetur sit
                sagittis pretium eget vitae semper pellentesque pellentesque.
              </p>
              <Button>Read more</Button>
            </div>
            <img src={Image} alt="..." className={Style.image} />
          </div>
        </Container>
      </div>
    );
  }
}
