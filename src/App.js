import React, { Component } from 'react';
import './App.css'

import Header from './containers/Header'
import Footer from './containers/Footer'

import HeaderNav from './components/HeaderNav'
import UsersModel from './models/UsersModel'
import Routes from './config/routes'

class App extends Component{

  state = {
    currentUser: localStorage.getItem('uid'),
    id: ''
  }

  componentDidMount(){
    if(this.state.id){
      UsersModel.getOne(this.state.id)
        .then(data=> console.log(data))
    }
  }

  setCurrentUser = (token, id) => {
      this.setState({ id: id })
      this.setState({ currentUser: token });
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

export default App;
