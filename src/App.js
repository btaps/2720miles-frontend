import React, { Component } from "react";
import { withRouter } from "react-router-dom";
//import dotenv from "dotenv";
//import User from "./models/UsersModel";
import Routes from "./config/routes";
import "./App.css";

import Header from "./containers/Header";
import Footer from "./containers/Footer";

import SideMenuLinks from "./components/SideMenuLinks";
import HeaderNav from "./components/HeaderNav";

class App extends Component {
  state = {
    currentUser: localStorage.getItem("uid"),
    id: localStorage.getItem("userId"),
    allUsers: [],
    isShowing: false,
    sideMenuOpen: "256px",
    sideMenuClose: "0"
  };

  componentDidMount() {
    //dotenv.config();
    //console.log(process.env.TEST);
    //User.all()
    //.then(data => {
    //this.setState({ allUsers: data });
    //})
    //.catch(err => console.log("err fetchin all users", err));
    //console.log("App rerendered");
  }

  setCurrentUser = (token, userId) => {
    this.setState({
      id: userId,
      currentUser: token
    });
    localStorage.setItem("uid", token);
    localStorage.setItem("userId", userId);
  };

  logout = () => {
    localStorage.removeItem("uid");
    this.setState({ currentUser: null, isShowing: false });
    this.props.history.push("/");
  };

  openSideMenu = () => {
    this.setState({ isShowing: true });
  };

  closeSideMenu = () => {
    this.setState({ isShowing: false });
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="App-side-menu"
          style={{
            width: this.state.isShowing
              ? this.state.sideMenuOpen
              : this.state.sideMenuClose
          }}
        >
          <span className="close-side-menu-btn" onClick={this.closeSideMenu}>
            x
          </span>
          <SideMenuLinks
            currentUser={this.state.currentUser}
            logout={this.logout}
            closeSideMenu={this.closeSideMenu}
          />
        </div>
        <Header
          openSideMenu={this.openSideMenu}
          //currentUser={this.state.currentUser}
          //logout={this.logout}
          className="container"
        />
        <HeaderNav />
        <Routes
          userId={this.state.id}
          currentUser={this.state.currentUser}
          setCurrentUser={this.setCurrentUser}
        />
        <Footer className="container" />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
