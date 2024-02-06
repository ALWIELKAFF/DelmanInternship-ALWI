import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";

const index = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <div>
        {" "}
        <Home />{" "}
      </div>
    </div>
  );
};

export default index;
