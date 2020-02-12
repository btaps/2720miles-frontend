import React, { Component } from 'react';
import  { withRouter } from 'react-router-dom'

import User from './models/UsersModel.js'
import Routes from './config/routes'
import './App.css'

import Header from './containers/Header'
import Footer from './containers/Footer'

import HeaderLinks from './components/HeaderLinks.js'
import HeaderNav from './components/HeaderNav'


class App extends Component{

  state = {
    currentUser: localStorage.getItem('uid'),
    id: '',
    allUsers: [],
    isShowing: false,
    sideMenuOpen: "256px",
    sideMenuClose: "0"
  }
  
  componentDidMount(){
    User.all()
      .then(data=> {
	this.setState({allUsers: data})
      })
      .catch(err=> console.log('err fetchin all users', err))

    console.log('App rerendered')
  }

  setCurrentUser = (token, userId) => {
	  this.setState({
		  id: userId,
		  currentUser: token
	  })
      localStorage.setItem('uid', token);
  };
  
  logout = () => {
    localStorage.removeItem('uid');
    this.setState({ currentUser: null, isShowing: false });
    this.props.history.push('/')
  };
  
  openSideMenu = () =>{
    this.setState({isShowing: true})
  }

  closeSideMenu = () =>{
    this.setState({isShowing: false})
  }

  render(){
    return (
      <div >
	  <div 
	    className='App-side-menu' 
	    style={{width: this.state.isShowing ? this.state.sideMenuOpen : this.state.sideMenuClose}}
	  >
            <span className='close-side-menu-btn' onClick={this.closeSideMenu} >x</span>
            <HeaderLinks currentUser={this.state.currentUser} logout={this.logout} closeSideMenu={this.closeSideMenu}/>
	  </div>
          <Header openSideMenu ={this.openSideMenu} currentUser={this.state.currentUser} logout={this.logout} className="container"/>
	  <HeaderNav />
	  <Routes userId={this.state.id} currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser}/>
	  <Footer className="container"/>
      </div>
    );
  }
}

export default withRouter(App);
