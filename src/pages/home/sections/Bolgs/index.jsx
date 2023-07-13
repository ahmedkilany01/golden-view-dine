import React, { Component } from "react";

import Info from "../../../../mock/info";

import Style from "./style.module.css";

export default class Blogs extends Component {
  render() {
    return (
      <div className={Style.container}>
        <div className={Style.content}>
          <div className={Style.header}>
            <h2 className="section_header">blogs</h2>
            <p>words from our food lovers</p>
          </div>
          <div className={Style.blogs_container}>
            {Info.blogs.map((blog) => (
              <div
                key={blog.id}
                className={
                  blog.image_up
                    ? Style.blog
                    : `${Style.blog} ${Style.blog_image_bottom}`
                }
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className={Style.blog_image}
                />
                <div className={Style.blog_content}>
                  <h4>{blog.title}</h4>
                  <p>{blog.description}</p>
                  <span>Read More</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
