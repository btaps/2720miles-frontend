import React, { Component } from 'react'
import './HomeSlideshow.css'

import Slide1 from '../photos/slide1.jpg'
import Slide2 from '../photos/slide2.jpg'
import Slide3 from '../photos/slide3.jpg'
import Slide4 from '../photos/slide4.jpg'
import Slide5 from '../photos/slide5.jpg'

class HomeSlideshow extends Component{
  
  render(){
    return(
      <div className='slider-show middle'>

        <div className='slides'>
          <input type='radio' name='r' id='r1' defaultChecked/>
          <input type='radio' name='r' id='r2'/>
          <input type='radio' name='r' id='r3'/>
          <input type='radio' name='r' id='r4'/>
          <input type='radio' name='r' id='r5'/>

          <div className='slide s1'>
            <img src={Slide1} alt='slide1'/>
          </div>
          <div className='slide'>
            <img src={Slide2} alt='slide2'/>
          </div>
          <div className='slide'>
            <img src={Slide3} alt='slide3'/>
          </div>
          <div className='slide'>
            <img src={Slide4} alt='slide4'/>
          </div>
          <div className='slide'>
            <img src={Slide5} alt='slide5'/>
          </div>
        </div>

        <div className='slide-navigation'>
          <label htmlFor='r1' className='bar'></label>
          <label htmlFor='r2' className='bar'></label>
          <label htmlFor='r3' className='bar'></label>
          <label htmlFor='r4' className='bar'></label>
          {/*<label htmlFor='r5' className='bar'></label>*/}
        </div>
      </div>
    )
  }
}

export default HomeSlideshow 
