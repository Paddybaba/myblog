import React from "react";
import "./sections.css";
import Carousel from "react-bootstrap/Carousel";
import CardBig from "../components/CardBig";
import BlogCard1 from "../components/BlogCard1";

const Latest = () => {
  return (
    <>
      <section id="latest">
        <Carousel>
          <Carousel.Item>
            <BlogCard1 />
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Latest;
