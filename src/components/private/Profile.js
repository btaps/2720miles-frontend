import React,{ Component } from 'react'
import UsersModel from '../../models/UsersModel'
import './Profile.css'

class Profile extends Component{

  

  componentDidMount(){
    UsersModel.getOne(this.props.userId)
      .then(data=> console.log(data))
  } 

  render(){
    return(
      <div className='Deals'>
        <h1>Profile</h1>
      </div>
    )
  }
}

export default Profile
