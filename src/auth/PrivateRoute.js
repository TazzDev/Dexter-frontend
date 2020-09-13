import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./index";

/*Private route for the user used in accessing the user dashboard after signin
so that user can not access the dashboard without signin */
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to={{
                            pathname: "/signin",
                            state: { from: props.location }
                        }}
                    />
                )
        }
    />
);

export default PrivateRoute;