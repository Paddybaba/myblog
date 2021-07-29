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
            <BlogCard1
              author_name="Rachna Padamwar"
              uploaded_duration="3 days ago ..."
              blog_title="Solution to Depression"
              blog_preface="Depression is a mood disorder that can affect a person's daily life. It may be described as feelings of sadness, loss, or anger. Learn the causes, symptoms, ..."
              blog_image="https://static.toiimg.com/thumb/msid-77716328,imgsize-81570,width-800,height-600,resizemode-75/77716328.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <BlogCard1
              author_name="Rachna Padamwar"
              uploaded_duration="6 days ago ..."
              blog_title="Anxiet Management"
              blog_preface="Anxiety is your body's natural response to stress. It's a feeling of fear or apprehension about what's to come. The first day of school"
              blog_image="https://adaa.org/sites/default/files/styles/extra_large_767px_width_/public/2018-11/anxiety.PNG?itok=UK44lfZM"
            />
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Latest;
