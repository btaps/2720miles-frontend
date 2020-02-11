import React,{ Component } from 'react'
import HeaderLinks from '../components/HeaderLinks'
import './Footer.css'

class Footer extends Component{

  render(){
    return(
      <div className='background'>
        <div className='icons'>
          Icons go here
        </div>
          <HeaderLinks />
      </div>
    )
  }
}

export default Footer
