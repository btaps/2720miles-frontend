import React, { Component } from "react";
import ProductsModel from "../models/ProductsModel";

export default class New extends Component {
  state = {
    ids: null
  };

  componentDidMount() {
    ProductsModel.getOne(1).then(res => this.setState({ ids: res.images[0] }));
  }

  render() {
    return (
      <div>
        <img src={this.state.ids} alt="purse" />
      </div>
    );
  }
}
