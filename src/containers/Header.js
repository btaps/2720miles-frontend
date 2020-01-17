import React,{ Component } from 'react'
import Logo from '../logo.png'

import NavBar from '../components/NavBar'
import './Header.css'
class Header extends Component{

  render(){
    return(
      <div className='Header'>
	<div className='logo'>
	  <img src={Logo} alt='2720miles logo'/>
	</div>
	<div className='search'>
	  <form>
            <input type='text' className='search-field' placeholder='Search for items here...'/>
	    <button type='button'>Search</button>
          </form>
	</div>
        <NavBar />
      </div>
    )
  }
}

export default Header
