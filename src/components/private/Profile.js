import React,{ Component } from 'react'
import UsersModel from '../../models/UsersModel'
import './Profile.css'

class Profile extends Component{

  state = {
    firstName: ''
  }

  componentDidMount(){
	console.log(this.props.userId)  
    UsersModel.getOne(this.props.userId)
      .then(data=>{
        this.setState({
          firstName: data.first_name
	})
      })
      .catch(err => console.log(err))
  } 

  deleteAccount = ()=>{
    UsersModel.delete(this.props.userId)
      .then(data=> {
        alert(data.message)
        localStorage.removeItem('uid');
	this.props.history.push('/')
      })
  }

  render(){
    return(
      <div className='Deals'>
        { this.state.firstName ? 
            <div>
	      <h1> Welcome Back, {this.state.firstName}</h1>
              <p onClick={this.deleteAccount}> Delete Account?</p> 
            </div>
	    : <h3>Loading...</h3>}
        
      </div>
    )
  }
}

export default Profile
