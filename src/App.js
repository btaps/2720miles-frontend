import React, { Component } from 'react';
import  { withRouter } from 'react-router-dom'

import User from './models/UsersModel.js'
import './App.css'

import Header from './containers/Header'
import Footer from './containers/Footer'

import HeaderNav from './components/HeaderNav'
import Routes from './config/routes'

class App extends Component{

  state = {
    currentUser: localStorage.getItem('uid'),
    id: '',
    allUsers: [],
    isShowing: false,
    sideMenuWidth: "0",
  }
  
  componentDidMount(){
    User.all()
      .then(data=> {
	this.setState({allUsers: data})
      })
      .catch(err=> console.log('err fetchin all users', err))
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
    this.setState({ currentUser: null });
    this.props.history.push('/')
  };
  
  openSideMenu = () =>{
    console.log(this.state.sideMenuWidth)
    this.setState({sideMenuWidth: "50%"})
    console.log(this.state.sideMenuWidth)
  }

  render(){
    return (
      <div >
	  <div className='App-side-menu' onClick={this.openSideMenu} style={{width: this.state.sideMenuWidth}}>
            hello
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
