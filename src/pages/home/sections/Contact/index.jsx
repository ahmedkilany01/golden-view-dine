import React, { Component } from "react";

import Container from "../../../../components/Container";
import Button from "../../../../components/Button";
import Style from "./style.module.css";

export default class Contact extends Component {
  render() {
    return (
      <div className={Style.contact_container}>
        <Container>
          <div className={Style.contact_links_container}>
            <div className={Style.content}>
              <div className={Style.social_media}>
                <div className={Style.logo}>
                  <img src="/assets/Images/logo.svg" alt="Logo" />
                  <p>Golden View Dine</p>
                </div>
                <p className={Style.logo_info}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sollicitudin
                </p>
                <div className={Style.social_media_icons}>
                  <img
                    src="/assets/Images/Instagram.svg"
                    alt=""
                    width={10}
                    height={10}
                  />
                  <img
                    src="/assets/Images/Twitter.svg"
                    alt=""
                    width={10}
                    height={10}
                  />
                  <img
                    src="/assets/Images/Youtube.svg"
                    alt=""
                    width={10}
                    height={10}
                  />
                </div>
              </div>
              <div className={Style.other_links}>
                <p className={Style.list_header}>Other Links</p>
                <ul className={Style.list_container}>
                  <li>Privacy Policy</li>
                  <li>Terms & conditions</li>
                  <li>Blogs</li>
                  <li>our team</li>
                  <li>Our kitchen</li>
                </ul>
              </div>
              <div className={Style.contact_us}>
                <p className={Style.list_header}>Contact Us</p>
                <div className={Style.contact_info}>
                  <img src="" alt="" height={10} width={10} />
                  <p>Gogreendineservice@gmail.com</p>
                </div>
                <div className={Style.contact_info}>
                  <img src="" alt="" height={10} width={10} />
                  <p>AZ complex bylane3 Mandari Rd Mumbai 1100867 </p>
                </div>
                <div className={Style.contact_info}>
                  <img src="" alt="" height={10} width={10} />
                  <p>+1800 287 256</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
