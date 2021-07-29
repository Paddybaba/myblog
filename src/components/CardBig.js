import React from "react";

const CardBig = () => {
  return (
    <>
      <div className="container-fluid big-card">
        <div className="row">
          <div className="col-8 mx-auto">
            <div className="row">
              <div className="col-6 image-box">
                <img src="/resources/design/risingsun.jpg" />
              </div>
              <div className="col-6 blog-box1">
                <div className="row mx-3 mt-3 b1">
                  <div className="col-3 box-author">
                    <img src="/resources/design/logo.jpg" alt="LOGO" />
                  </div>
                  <div className="col-9 px-2  author">
                    <p>Dr Rachna Padamwar</p>
                    <p>1 day ago...</p>
                  </div>
                </div>
                <div className="row mx-3 b1"></div>
                <div className="row mx-3 b1"></div>
                <div className="row mx-3 b1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBig;
