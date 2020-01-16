import React,{ Component } from 'react'

import NavBar from '../components/NavBar'
import './Header.css'
class Header extends Component{

  render(){
    return(
      <div className='Header'>
	<div className='logo'>
	  Logo goes here
	</div>
          <NavBar />
      </div>
    )
  }
}

export default Header
