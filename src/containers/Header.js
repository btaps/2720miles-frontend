import React,{ Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import NavBar from '../components/NavBar'
import HomePage from '../components/HomePage'
import Deals from '../components/Deals'
import Search from '../components/Search'
import Signin from '../components/Signin'
import './Header.css'
class Header extends Component{

  render(){
    return(
      <div>
	<div className='logo'>
	  Logo goes here
	</div>
	<Router>
          <NavBar />
	  <Route path='/' exact component={HomePage}/>
	  <Route path='/account/signin' exact component={Signin}/>
	  <Route path='shop/deals/' exact component={Deals}/>
	  <Route path='/search' exact component={Search}/>
	</Router>
      </div>
    )
  }
}

export default Header
