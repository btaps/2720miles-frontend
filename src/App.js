import React from 'react';
import './App.css'
import { Switch, Route } from 'react-router-dom' 

import Header from './containers/Header'
import Footer from './containers/Footer'

import HeaderNav from './components/HeaderNav'

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
	<HeaderNav />
	  <h1 className='h1-App'> OUR CUSTOMERS SETTING TRENDS </h1> 
	  <Switch>
  	    <Route path='/' exact component={HomePage}/>
	    <Route path='/account/signin' component={Signin}/>
	    <Route path='/shop/deals/' component={Deals}/>
	    <Route path='/search' component={Search}/>
          </Switch>
        <Footer
	  className="container"
	/>
    </div>
  );
}

export default App;
