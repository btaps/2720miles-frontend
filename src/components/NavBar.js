import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

function NavBar({currentUser, logout}){
 
  let links = (
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
      </div>
  )

  let authLinks = (
      <div className='NavBar'>
        <NavLink
          to = '/'exact
	  activeClassName = 'active'
	>Home
	</NavLink>
        <NavLink
          to = '/account/profile'exact
	  activeClassName = 'active'
	>Profile
	</NavLink>
        <NavLink
          onClick={logout}
          to = '/'exact
	  activeClassName = 'active'
	>Log out
	</NavLink>
      </div>
  )
      
    return(  
      <div className='NavBar-main-div'>
        { currentUser ? authLinks : links }
      </div>
    )
}

export default NavBar
