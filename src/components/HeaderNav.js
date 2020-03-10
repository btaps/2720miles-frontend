import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HeaderNav.css";

class HeaderNav extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className="navigation">
          <li className="drop-width">
            <Link className="New" to="/new">
              New
            </Link>
          </li>
          <li className="drop drop-width">
            <Link to="/clothing">Clothing</Link>
            <ul className="sub-menu">
              <li>
                <Link to="/clothing/tops">Tops</Link>
              </li>
              <li>
                <Link to="/clothing/bottoms">Bottoms</Link>
              </li>
            </ul>
          </li>
          <li className="drop drop-width">
            <Link to="/accessories">Accessories</Link>
            <ul className="sub-menu">
              <li>
                <Link to="/accessories/handbags">Handbags</Link>
              </li>
              <li>
                <Link to="/accessories/shoes">Shoes</Link>
              </li>
              <li>
                <Link to="/accessories/jewlery">Jewelery</Link>
              </li>
            </ul>
          </li>
          <li className="drop drop-width">
            <Link to="/shop/deals">Sales</Link>
            <ul className="sub-menu">
              <li>
                <Link to="/">Tops</Link>
              </li>
              <li>
                <Link to="/">Bottoms</Link>
              </li>
              <li>
                <Link to="/">Accessories</Link>
              </li>
            </ul>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default HeaderNav;
