import React,{ Component } from 'react'
import UsersModel from '../models/UsersModel'
import './Signin.css'
import { withRouter } from 'react-router-dom'

class Signin extends Component{

  state ={
      signEmail: '',
      signPassword: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      rePassword: ''
  }

  onFormSubmit = (e)=>{
    e.preventDefault()
    if(this.state.password !== this.state.rePassword){
      alert("Passwords don't match!")
    }else if(this.state.firstName){
      UsersModel.create({
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      })
        .then(data=> {
          UsersModel.login({
            email: this.state.email,
	    password: this.state.password
          })
            .then(data=>{
	      console.log(data)
              this.props.setCurrentUser(data.token, data.id)
              this.props.history.push('/account/profile')
            })
	})
    }else if(this.state.signEmail){
      UsersModel.login({
        email: this.state.signEmail,
	password: this.state.signPassword
      })
      .then(data=>{
        this.props.setCurrentUser(data.token, data.id)
        this.props.history.push('/account/profile')
	data.message === 'Username or password incorrect' ? alert(data.message) : alert(data.message)
      })
      this.setState({
        signEmail: '',
        signPassword: ''
      })
    }
    

  }  

  onChange = (e)=>{
    if(e.target.name === 'signin-email') this.setState({ signEmail: e.target.value })
    if(e.target.name === 'signin-password') this.setState({ signPassword: e.target.value })
    if(e.target.name === 'first-name') this.setState({ firstName: e.target.value })
    if(e.target.name === 'last-name') this.setState({ lastName: e.target.value })
    if(e.target.name === 'sign-up-email') this.setState({ email: e.target.value })
    if(e.target.name === 'sign-up-password') this.setState({ password: e.target.value })
    if(e.target.name === 'sign-up-rePassword') this.setState({ rePassword: e.target.value })
    
  }

  render(){
    return(
      <div>
      <h1 className='Search-h1'>WELCOME TO 2720MILES</h1>
      <div className='Signin'>
        <div className='Search-signin Search-flex-item'>
          <h1 className='Search-flex-item-h1'> Sign In </h1>
	  <form onSubmit={this.onFormSubmit}>
            <p className='Search-p'>Email</p>
            <input className='Search-input'  type='email' name='signin-email' placeholder='Sample@gmail.com' onChange={this.onChange} value={this.state.signEmail}/>
            <p className='Search-p'>Password</p>
            <input className='Search-input' type='password' name='signin-password' placeholder='123abc' onChange={this.onChange} value={this.state.signPassword}/>
            <input className='Search-input' type='submit' name='' value='Login' />
            <a className='Search-a' href='/account/signin'>Lost your password?</a>
            <a className='Search-a' href='/account/signin'>Forgot email?</a>
	  </form>
        </div>
        <div className='Search-signup Search-flex-item'>
          <h1 className='Search-flex-item-h1'> Sign Up </h1>
	  <form onSubmit={this.onFormSubmit}>
            <p className='Search-p'>First Name</p>
            <input className='Search-input' type='text' name='first-name' placeholder='Jess' onChange={this.onChange} value={this.state.firstName}/>
            <p className='Search-p'>Last Name</p>
            <input className='Search-input' type='text' name='last-name' placeholder='Smith' onChange={this.onChange} value={this.state.lastName}/>
            <p className='Search-p'>Email</p>
            <input className='Search-input' type='email' name='sign-up-email' placeholder='Sample@gmail.com' onChange={this.onChange} value={this.state.email}/>
            <p className='Search-p'>Password</p>
            <input className='Search-input' type='password' name='sign-up-password' placeholder='123abc' onChange={this.onChange} value={this.state.password}/>
            <p className='Search-p'>Repeat Password</p>
            <input className='Search-input' type='password' name='sign-up-rePassword' placeholder='123abc' onChange={this.onChange} value={this.state.rePassword}/>
            <input className='Search-input' type='submit' name='' value='Sing Up' />
          </form>
        </div>
      </div>
      </div>
    )
  }
}

export default withRouter(Signin)
