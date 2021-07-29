import React, { useEffect, useState } from "react";

const Header = () => {
  useEffect(() => {
    var video = document.getElementById("myVideo");
    video.play();
  }, []);

  return (
    <>
      <header id="landing-page" className="">
        <video autoplay muted loop id="myVideo">
          <source src="/resources/design/video.mp4" type="video/mp4" />
        </video>
        <div className="tag-line">
          <h1>
            There is <span style={{ color: "greenyellow" }}>hope</span> even if{" "}
            <br /> your brain tells you there{" "}
            <span style={{ color: "red" }}>isn't</span>
          </h1>
        </div>
        <div className="line" />
      </header>
    </>
  );
};

export default Header;
