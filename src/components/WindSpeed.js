import React from "react";
import CartTitle from "./CartTitle.js";
import "../style/HomePage.css";
import "../style/ThermalSum.css";

export default function ThermalSum({ data = "999  °Cvrk" }) {
  return (
    <div className="cart-container">
      <CartTitle title={"Lämpösumma"} icon={"heat"} />
      <div className="data-box">{data}</div>
    </div>
  );
}
