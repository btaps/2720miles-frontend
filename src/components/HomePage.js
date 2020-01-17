import React,{ Component } from 'react'
import './HomePage.css'

import PhotoA1 from '../photos/picA1.png'
import PhotoA2 from '../photos/picA2.png'
import PhotoA3 from '../photos/picA3.png'

import PhotoB1 from '../photos/picB1.jpg'
import PhotoB3 from '../photos/picB3.jpg'

import PhotoC1 from '../photos/picC1.png'
import PhotoC2 from '../photos/picC2.png'
import PhotoC3 from '../photos/picC3.png'

import PhotoD1 from '../photos/picD1.jpg'
import PhotoD2 from '../photos/picD2.jpg'
import PhotoD3 from '../photos/picD3.jpg'

class HomePage extends Component{

  render(){
    return(
      <div className='HomePage'>
        <div className='wrapper'>
          <div className='Photos'>
            <img src={PhotoA1} alt='product' />
	  </div>
          <div className='Photos'>
            <img src={PhotoA2} alt='product' />
	  </div>
          <div className='Photos'>
            <img src={PhotoA3} alt='product' />
	  </div>
          <div className='Photos'>
            <img src={PhotoB1} alt='product' />
	  </div>
          <div className='Photos'>
            <img src={PhotoB3} alt='product' />
	  </div>
          <div className='Photos'>
            <img src={PhotoC1} alt='product' />
	  </div>
          <div className='Photos'>
            <img src={PhotoC2} alt='product' />
	  </div>
          <div className='Photos'>
            <img src={PhotoC3} alt='product' />
	  </div>
          <div className='Photos'>
            <img src={PhotoD1} alt='product' />
	  </div>
          <div className='Photos'>
            <img src={PhotoD2} alt='product' />
	  </div>
          <div className='Photos'>
            <img src={PhotoD3} alt='product' />
	  </div>
        </div>
      </div>	 
    )
  }
}

export default HomePage
