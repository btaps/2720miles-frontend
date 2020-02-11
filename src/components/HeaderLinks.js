import React from 'react'
import { NavLink } from 'react-router-dom'
import './HeaderLinks.css'

function HeaderLinks({currentUser, logout}){
 
  let links = (
      <div className='HeaderLinks'>
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
      <div className='HeaderLinks'>
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
      <div className='HeaderLinks-main-div'>
        { currentUser ? authLinks : links }
      </div>
    )
}

export default HeaderLinks
