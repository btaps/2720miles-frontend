import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Logo from '../logo.png'

//import HeaderLinks from '../components/HeaderLinks.js'
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-link">
          <span
            onClick={this.props.openSideMenu}
            className="Header-side-menu-icon"
          >
            &#9776;
          </span>
          <Link to="/" className="Header-text-logo">
            2720 MILES
          </Link>
        </div>
        <div className="Header-shopping-cart-div">
          <Link to="/cart" className="Header-shopping-cart-link">
            My Cart
            <img
              src="https://img.icons8.com/metro/26/000000/shopping-cart.png"
              alt="shopping-cart-png-icon"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
