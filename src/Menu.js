import React from "react";

const Menu = () => {
  return (
    <div className="ui fixed inverted menu">
      <div className="ui container">
        <a href="/" className="header item">
        <i class="code icon"></i>
          Code
        </a>
        <a href="/" className="item">
          Home
        </a>
        <a href="/" className="item">
          About
        </a>
      </div>
    </div>
  );
};

export default Menu;
