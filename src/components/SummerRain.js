import React from 'react'
import "../style/SummerRain.css";
import "../style/HomePage.css";

import CartTitle from "./CartTitle.js";
import Droplet from './Droplet.js';

export default function SummerRain() {
  return (
    <div className="cart-container">
      <CartTitle title={"kesäinensademäärä"} icon={"water_drop"} />
      <div className="Droplet-box">
        <Droplet className="droplet" number={"8mm/vrk"} />
      </div>
    </div>
  );
}

  