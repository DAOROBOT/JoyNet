import React from "react";
import "./widgets.css";

const Widgets = () => {
  return (
    <div className="widgets">
      <h2>Trends for you</h2>
      <ul className="trending-list">
        <li>#ReactJS <span>120K posts</span></li>
        <li>#OpenAI <span>98K posts</span></li>
        <li>#SpaceX <span>88K posts</span></li>
        <li>#ElonMusk <span>75K posts</span></li>
      </ul>
    </div>
  );
};

export default Widgets;
