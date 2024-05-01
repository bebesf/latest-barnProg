import React from 'react'
import "../style/HomePage.css";
import CartTitle from "./CartTitle.js";

export default function TemperatureData() {
  return (
    <div style={{height: "100%"}}>
        <div className="cart-container" style={{height: "100%"}}>
        <CartTitle title={"lämpötila"} icon={"partly_cloudy_day"} /> 
        <div className="data-box">99</div>
        </div>

    </div>
  )
}
