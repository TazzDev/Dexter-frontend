import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./index";

/* Private route for admin which is accessed only by the admin
Non-admin user can not access this route and even if they try to acces,
they will be taken to the home page */
const AdminRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() && isAuthenticated().user.role === 1 ? (
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

export default AdminRoute;