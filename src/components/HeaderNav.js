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
                <Link to="/">Tops</Link>
              </li>
              <li>
                <Link to="/">Bottoms</Link>
              </li>
            </ul>
          </li>
          <li className="drop drop-width">
            <Link to="/accessories">Accessories</Link>
            <ul className="sub-menu">
              <li>
                <Link to="/">Handbags</Link>
              </li>
              <li>
                <Link to="/">Shoes</Link>
              </li>
              <li>
                <Link to="/">Jewelery</Link>
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
                <Link Link="/">Bottoms</Link>
              </li>
              <li>
                <Link href="/">Accessories</Link>
              </li>
            </ul>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default HeaderNav;
