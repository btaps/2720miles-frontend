import React,{ Component } from 'react'
//import ProductsModel from '../models/ProductsModel'

import HomeSlideshow from './HomeSlideshow'
import './HomePage.css'

import Banner from '../Banner.jpg'

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
  
  state ={
    products: []
  }
  
  componentDidMount(){
  //  this.fetchAll()
  }
  
  //fetchAll = () => {
  //  ProductsModel.all()
    //  .then(p => {
     //   this.setState({products: p.rows})
     // })
 //   }
  render(){
	//  let images = this.state.products.length ? this.state.products[0].images : "Nothing here yet"
	  //console.log(images)
    return(
      <div className='HomePage'>
	<div className='Banner-div'>
	  <img src={Banner} alt='Banner made by Pia' />
	</div>
	<h1 className='h1-Homepage hide-h1-Homepage'> OUR CUSTOMERS SETTING TRENDS </h1> 
	<HomeSlideshow />
	<h1 className='h1-Homepage'> SHOP THE GRAM </h1>
	<p className='p-Homepage'> Follow us on Instagram @2720miles </p>  
        <div className='wrapper'>
          <div className='Photos'>
            <a href='/' target='_blank'>
               <img className='home-img' src={PhotoA1} alt='product' />
            </a>
	  </div>
          <div className='Photos'>
            <a href='/' target='_blank'>
              <img className='home-img' src={PhotoA2} alt='product' />
            </a>
	  </div>
          <div className='Photos'>
            <a href='/' target='_blank'>
              <img className='home-img' src={PhotoA3} alt='product' />
            </a>
	  </div>
          <div className='Photos'>
            <a href='/' target='_blank'>
              <img className='home-img' src={PhotoB1} alt='product' />
            </a>
	  </div>
          <div className='Photos'>
            <a href='/' target='_blank'>
              <img className='home-img' src={PhotoB3} alt='product' />
            </a>
	  </div>
          <div className='Photos'>
            <a href='/' target='_blank'>
              <img className='home-img' src={PhotoC1} alt='product' />
            </a>
	  </div>
          <div className='Photos'>
            <a href='/' target='_blank'>
              <img className='home-img' src={PhotoC2} alt='product' />
            </a>
	  </div>
          <div className='Photos'>
            <a href='/' target='_blank'>
              <img className='home-img' src={PhotoC3} alt='product' />
            </a>
	  </div>
          <div className='Photos'>
            <a href='/' target='_blank'>
              <img className='home-img' src={PhotoD1} alt='product' />
            </a>
	  </div>
          <div className='Photos'>
            <a href='/' target='_blank'>
              <img className='home-img' src={PhotoD2} alt='product' />
            </a>
	  </div>
          <div className='Photos'>
            <a href='/' target='_blank'>
              <img className='home-img' src={PhotoD3} alt='product' />
            </a>
	  </div>
        </div>
      </div>	 
    )
  }
}

export default HomePage
