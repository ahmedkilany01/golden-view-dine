import React, { Component } from "react";

import Container from "../../../../components/Container";
import Button from "../../../../components/Button";

import Logo from "../../../../assets/Images/logo.svg";
import Search from "../../../../assets/Images/search.svg";

import Style from "./style.module.css";

export default class Hero extends Component {
  render() {
    return (
        <div className={Style.gradient}>
      <div className={Style.hero_container}>
          <Container>
            <div className={Style.hero_content}>
              <nav className={Style.nav_container}>
                <img src={Logo} alt="Logo" />
                <ul>
                  <li>Home</li>
                  <li>About us</li>
                  <li>Special</li>
                  <li>Menu</li>
                  <li>Blogs</li>
                  <li>
                    <img src={Search} alt="" />
                  </li>
                </ul>
                <button>Book now</button>
              </nav>
              <div className={Style.hero_text}>
                <h1>
                  welcome to <br />
                  golden view dine
                </h1>
                <p>
                  Explore the authentic vegan dishes with your friends and
                  family
                </p>
                <Button>Read more</Button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
