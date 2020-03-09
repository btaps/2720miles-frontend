import React, { Component } from "react";
import ProductsModel from "../models/ProductsModel";

export default class New extends Component {
  componentDidMount() {
    ProductsModel.all().then(res => console.log(res));
  }

  render() {
    return (
      <div>
        <div></div>
        New
      </div>
    );
  }
}
