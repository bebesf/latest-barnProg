
import React from "react";

export default function CartTitle({ title, icon }) {
  return (
    <div
      className="title-container"
      style={{ display: "flex", alignItems: "center" }}
    >
      <span
        className="material-symbols-outlined"
        style={{ margin: "3px 8px 0 10px", color: "#168ADE" }}
      >
        {icon}
      </span>
      <p style={{ margin: 0, fontSize: "20px", fontWeight: "500" }}>{title}</p>
    </div>
  );
}
