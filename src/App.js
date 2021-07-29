import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./sections/Navbar";
import Header2 from "./sections/Header2";
import Latest from "./sections/Latest";

function App() {
  return (
    <>
      <div className="home">
        <Navbar />
        <hr></hr>
        <Header2 />
      </div>
      <Latest />
    </>
  );
}

export default App;
