import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import HomePage from '../components/HomePage'
import Signin from '../components/Signin'
import Profile from '../components/private/Profile'

export default withRouter(({ userId, setCurrentUser, currentUser, history }) => {
  const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
      currentUser
        ? <Component {...rest} {...props} />
        : <Redirect to='/account/signin' />
    )} />
  );

  return (
	    <Switch>
  	      <Route path='/' exact component={HomePage}/>
	      <Route path='/account/signin' render={()=> <Signin currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
	      <PrivateRoute path='/account/Profile' component={Profile} userId={userId} />}/>
            </Switch>
  );
});
