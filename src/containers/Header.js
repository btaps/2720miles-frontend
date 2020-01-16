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
	<div className='drop-down-menu'>
          <ul className='main-menu'>
	    <li><a href='#'>Clothes</a>
	      <ul className='sub-menu'>
	        <li><a href='#'>Tops</a></li>
	        <li><a href='#'>Bottoms</a></li>
              </ul>
	    </li>
	    <li><a href='#'>Accessories</a>
	      <ul className='sub-menu'>
	        <li><a href='#'>Handbags</a></li>
	        <li><a href='#'>Shoes</a></li>
	        <li><a href='#'>Jewelery</a></li>
              </ul>
	    </li>
	    <li><a href='/shop/deals/'>Sale</a>
	      <ul className='sub-menu'>
	        <li><a href='#'>Tops</a></li>
	        <li><a href='#'>Bottoms</a></li>
	        <li><a href='#'>Accessories</a></li>
              </ul>
	    </li>
	  </ul>
	</div>
      </div>
    )
  }
}

export default Header
