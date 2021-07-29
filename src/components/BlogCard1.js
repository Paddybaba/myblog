import React from "react";
import "./card.css";

const BlogCard1 = ({
  author_name,
  uploaded_duration,
  blog_title,
  blog_preface,
  blog_image,
}) => {
  return (
    <div className="cards">
      <div className="cards-item">
        <div className="card">
          <div className="card_image">
            <img src={blog_image} />
          </div>
          <div className="card_content mt-auto">
            <div className="author-info">
              <div>
                <h5 className="author-name">{author_name}</h5>
                <h5 className="duration">{uploaded_duration}</h5>
              </div>
            </div>
            <p className="card_text">{blog_title}</p>
            <p className="preface">{blog_preface}</p>
            <button type="button" className="">
              Read Blog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogCard1;
