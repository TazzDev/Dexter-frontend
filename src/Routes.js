import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';
import PrivateRoute from './auth/PrivateRoute';
import AdminRoute from './auth/AdminRoute';
import Dashboard from './user/UserDashboard';
import AdminDashboard from './user/AdminDashboard';
import AdminStream from './user/AdminStream';
import CoursePage from './user/CoursesPages/CoursePage';
import './App.css';



const Routes = () => {
    return (
        /*All the required routes are shown here.
          Routes for user and admin are separate. */
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
                <PrivateRoute path="/user/dashboard/:courseName" exact component={CoursePage} />
                <AdminRoute path='/admin/dashboard' exact component={AdminDashboard} />
                <AdminRoute path='/admin/dashboard/:courseName' exact component={AdminStream} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;