import React from 'react';
import './App.css'
import { Switch, Route } from 'react-router-dom' 

import Header from './containers/Header'
import Footer from './containers/Footer'

import HomePage from './components/HomePage'
import Deals from './components/Deals'
import Search from './components/Search'
import Signin from './components/Signin'

function App() {
  return (
    <div >
        <Header 
	  className="container"
	/>
	  <Switch>
  	    <Route path='/' exact component={HomePage}/>
	    <Route path='/account/signin' exact component={Signin}/>
	    <Route path='/shop/deals/' exact component={Deals}/>
	    <Route path='/search' exact component={Search}/>
          </Switch>
        <Footer
	  className="container"
	/>
    </div>
  );
}

export default App;
