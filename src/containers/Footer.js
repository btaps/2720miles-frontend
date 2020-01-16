import React,{ Component } from 'react'
import NavBar from '../components/NavBar'
import './Footer.css'

class Footer extends Component{

  render(){
    return(
      <div className='background'>
        <div className='icons'>
          Icons go here
        </div>
          <NavBar />
      </div>
    )
  }
}

export default Footer
