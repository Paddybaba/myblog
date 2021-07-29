import React from "react";
import "./sections.css";
const Header2 = () => {
  const image = "/resources/design/risingsun.jpg";
  return (
    <section id="landing-page" className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto bor1">
          <div className="row mt-5 tag-line">
            <h1 className="">
              There is <span style={{ color: "greenyellow" }}>hope</span> even
              if <br /> your brain tells you there{" "}
              <span style={{ color: "red" }}>isn't</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header2;
