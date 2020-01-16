import React,{ Component } from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

class NavBar extends Component{
  
  render(){
    return(
      <div className='NavBar'>
        <NavLink
          to = '/'exact
	  activeClassName = 'active'
	>Home
	</NavLink>
        <NavLink
          to = '/account/signin'exact
	  activeClassName = 'active'
	>Sign In
	</NavLink>
        <NavLink
          to = '/shop/deals'exact
	  activeClassName = 'active'
	>Deals
	</NavLink>
        <NavLink
          to = '/search'exact
	  activeClassName = 'active'
	>Search
	</NavLink>
        <NavLink
          to = '/word'exact
	  activeClassName = 'active'
	>word
	</NavLink>
      </div>
    )
  }
}

export default NavBar
