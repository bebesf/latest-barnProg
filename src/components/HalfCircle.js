import React from "react";

const HalfCircle = ({ number }) => {
  return (
    <>
      <svg width="220" height="145">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#C589E1" stop-opacity="1" />
            <stop offset="50%" stop-color="#158DCF" stop-opacity="1" />
            <stop offset="100%" stop-color="#7FD3FF" stop-opacity="1" />
          </linearGradient>
        </defs>
        <text
          x="23"
          y="80"
          dy="9"
          text-anchor="middle"
          style={{
            fontSize: "16px",
            fontFamily: "Roboto, Arial, sans-serif",
            fill: "#000",
            fontWeight: "500",
          }}
        >
          1.5
        </text>
        <text
          x="23"
          y="95"
          dy="9"
          text-anchor="middle"
          style={{
            fontSize: "16px",
            fontFamily: "Roboto, Arial, sans-serif",
            fill: "#000",
            fontWeight: "500",
          }}
        >
          2024
        </text>

        <text
          x="200"
          y="85"
          dy="9"
          text-anchor="middle"
          style={{
            fontSize: "16px",
            fontFamily: "Roboto, Arial, sans-serif",
            fill: "#000",
            fontWeight: "500",
          }}
        >
          NYT
        </text>

        <circle
          cx="90"
          cy="110"
          r="90"
          fill-opacity="0"
          stroke-width="6"
          stroke="url(#grad1)"
          stroke-dasharray="236.5 502.6"
          stroke-linecap="round"
          transform="rotate(-165 100 100)"
        />
        <text
          x="110"
          y="80"
          dy="-12"
          text-anchor="middle"
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            fontFamily: "Robot,Arial, sans-serif",
          }}
        >
          {number}
        </text>
      </svg>
    </>
  );
};

export default HalfCircle;