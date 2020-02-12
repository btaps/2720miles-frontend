import React,{ Component } from 'react'
//import Logo from '../logo.png'

//import HeaderLinks from '../components/HeaderLinks.js'
import './Header.css'

class Header extends Component{
  
  render(){
    return(
      <div className='Header'>
	<div className='Header-side-menu'>
	</div>
	      {/*<div className='logo'>*/}
        <div className='Header-link'>
	  <span onClick={this.props.openSideMenu}className='Header-side-menu-icon'>&#9776;</span>
	  <a href='/' className='Header-text-logo'>2720 MILES</a>
        </div>
	      {/*</div>*/}
	      {/*<HeaderLinks currentUser={this.props.currentUser} logout={this.props.logout}/>
	<div className='search'>
	  <form>
            <input type='text' className='search-field' placeholder='Search for items here...'/>
	    <button className='Header-button' type='button'>Search</button>
          </form>
	</div>*/}
      </div>
    )
  }
}

export default Header
