import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";

import HomePage from "../components/HomePage";
import Signin from "../components/Signin";
import Profile from "../components/private/Profile";
import ShoppingCart from "../components/ShoppingCart";

import Deals from "../components/Deals";
import Default from "../components/Default";
import Accessories from "../components/Accessories";
import Clothing from "../components/Clothing";
import New from "../components/New";

import Tops from "../components/Tops";
import Bottoms from "../components/Bottoms";
import Handbags from "../components/Handbags";
import Shoes from "../components/Shoes";
import Jewelery from "../components/Jewelery";

export default withRouter(
  ({ userId, setCurrentUser, currentUser, history }) => {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          currentUser ? (
            <Component {...rest} {...props} />
          ) : (
            <Redirect to="/account/signin" />
          )
        }
      />
    );

    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/account/signin"
          render={() => (
            <Signin
              userId={userId}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          )}
        />
        <Route path="/accessories/handbags" component={Handbags} />
        <Route path="/accessories/shoes" component={Shoes} />
        <Route path="/accessories/jewlery" component={Jewelery} />
        <Route path="/clothing/tops" component={Tops} />
        <Route path="/clothing/bottoms" component={Bottoms} />
        <Route path="/accessories" component={Accessories} />
        <Route path="/cart" component={ShoppingCart} />
        <Route path="/clothing" component={Clothing} />
        <Route path="/new" component={New} />
        <PrivateRoute
          exact
          path="/account/Profile"
          component={Profile}
          userId={userId}
        />
        }/>
        <Route path="/shop/deals" component={Deals} />
        <Route component={Default} />*
      </Switch>
    );
  }
);
