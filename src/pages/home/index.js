import React from "react";
import Navbar from "@/component/Navbar";
import Home from "@/component/Home";

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