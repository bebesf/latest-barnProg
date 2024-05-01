import React from "react";
import "../style/RainAccumulation.css";
import "../style/HomePage.css";
import HalfCircle from "./HalfCircle.js";
import CartTitle from "./CartTitle.js";

export default function RainAccumulation() {
  return (
    <div className="cart-container">
      <CartTitle title={"Sadesumma"} icon={"rainy"} />
      <div className="circle-box">
        <HalfCircle className="halfCircle" number={"56 mm"} />
      </div>
    </div>
  );
}
