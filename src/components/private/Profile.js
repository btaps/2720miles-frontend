import React, { Component } from "react";
import UsersModel from "../../models/UsersModel";
import AWS from "./AWS-Upload";
import "./Profile.css";

class Profile extends Component {
  state = {
    firstName: "",
    selectedFile: null,
    selectedFiles: null
  };

  componentDidMount() {
    UsersModel.getOne(this.props.userId)
      .then(data => {
        this.setState({
          firstName: data.first_name
        });
      })
      .catch(err => console.log(err));
  }

  deleteAccount = () => {
    UsersModel.delete(this.props.userId).then(data => {
      alert(data.message);
      localStorage.removeItem("uid");
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div className="Deals">
        {this.state.firstName ? (
          <div>
            <h1> Welcome Back, {this.state.firstName}</h1>
            <p onClick={this.deleteAccount}> Delete Account?</p>
          </div>
        ) : (
          <h3>Loading...</h3>
        )}
        {this.props.userId === "044a61bd-add6-4f38-ae38-87618398c385" ? (
          <AWS />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Profile;
