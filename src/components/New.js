import React, { Component } from "react";
import ProductsModel from "../models/ProductsModel";

export default class New extends Component {
  state = {
    productsArr: null
  };

  componentDidMount() {
    ProductsModel.getOne(1).then(res => {
      this.setState({ productsArr: res.images });
      console.log(res);
    });
  }

  products = () => {
    let product = this.state.productsArr.map(image => {
      return (
        <div className="Photos">
          <a href="/" target="_blank">
            <img className="home-img" src={image} alt="New Product" />
          </a>
        </div>
      );
    });
    return product;
  };

  render() {
    return (
      <div className="wrapper">
        {this.state.productsArr !== null ? (
          this.products()
        ) : (
          <h3> Loading.... </h3>
        )}
      </div>
    );
  }
}
