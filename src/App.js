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
    allUsers: []
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
  

  render(){
    return (
      <div >
          <Header currentUser={this.state.currentUser} logout={this.logout} className="container"/>
	  <HeaderNav />
	  <Routes userId={this.state.id} currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser}/>
	  <Footer className="container"/>
      </div>
    );
  }
}

export default withRouter(App);
