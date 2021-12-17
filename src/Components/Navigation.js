import React from 'react';
import "./Styles/Navigation.css"
import logo from "../Assets/logo.png"

function Navigation() {
  return (
    <div className="navigation-container">
      <div className="nav-left">
          <img src={logo} className="logo"/>
          <p>E<span>Shop</span></p>
      </div>

      <div className="nav-center">
        <p>Men</p>
        <p>Women</p>
        <p>Kids</p>
      </div>

      <div className="nav-right">
        <i class="fas fa-search"></i>
        <i class="fas fa-shopping-cart"></i>
        <i class="far fa-user"></i>
      </div>

    </div>
  );
}

export default Navigation;
