import React, { Component } from 'react'
import './HeaderNav.css'

class HeaderNav extends Component{
  
  render(){
    return(
      <div>
        <ul className='navigation'>
          <li className='drop-width'><a className='New' href='/'>New</a></li>
          <li className='drop drop-width'><a href='/'>Clothing</a>
              <ul className='sub-menu'>
                <li><a href='/'>Tops</a></li>
                <li><a href='/'>Bottoms</a></li>
              </ul>
	  </li>
          <li className='drop drop-width'><a href='/'>Accessories</a>
              <ul className='sub-menu'>
                <li><a href='/'>Handbags</a></li>
                <li><a href='/'>Shoes</a></li>
                <li><a href='/'>Jewelery</a></li>
              </ul>
	  </li>
          <li className='drop drop-width'><a href='/shop/deals'>Sales</a>
              <ul className='sub-menu'>
                <li><a href='/'>Tops</a></li>
                <li><a href='/'>Bottoms</a></li>
                <li><a href='/'>Accessories</a></li>
              </ul>
	  </li>
        </ul>
      </div>
    )
  }
}

export default HeaderNav
