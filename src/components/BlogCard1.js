import React from "react";
import "./card.css";

const BlogCard1 = ({ drname, degree, addQual, description, image }) => {
  return (
    <div className="cards">
      <div className="cards-item">
        <div className="card">
          <div className="card_image">
            <img src="/resources/design/depression.jpg" />
          </div>
          <div className="card_content mt-auto">
            <div className="author-info">
              <div>
                <h5 className="author-name">Dr Rachna Padamwar</h5>
                <h5 className="duration">3 days ago ....</h5>
              </div>
            </div>
            <p className="card_text">The solution for Depression</p>
            <p className="preface">
              Depression is a mood disorder that can affect a person's daily
              life. It may be described as feelings of sadness, loss, or anger.
              Learn the causes, symptoms, ...
            </p>
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
