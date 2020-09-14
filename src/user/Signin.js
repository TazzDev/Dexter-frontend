import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Layout from '../core/Layout';
import { signin, authenticate, isAuthenticated } from '../auth';

//image import
import Loading from '../images/loading.gif';


const Signin = () => {
    //React Hooks are used
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        redirectToReferrer: false
    });

    const { email, password, loading, error, redirectToReferrer } = values;
    const { user } = isAuthenticated()

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        //sending the info to backend and acquring the JWT 
        signin({ email, password }).then(data => {
            console.log(data.token);
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                authenticate(data, () => {
                    setValues({
                        ...values,
                        redirectToReferrer: true
                    });
                });
            }
        });
    };
    //Layout for signin form(Bootstrap CSS is used)
    const signUpForm = () => (
        <form className="suform">
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email')} type="email" className="form-control" value={email} />
            </div>

            <div className="form-group">
                <label className="text-muted">Password</label>
                <input onChange={handleChange('password')} type="password" className="form-control" value={password} />
            </div>
            <button onClick={clickSubmit} className="btn btn-primary">
                Submit
            </button>
        </form>
    );

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="alert alert-info">
                <img src={Loading} className="load-gif" alt="Loading, please wait" loading="eager"/>
            </div>
        );

    const redirectUser = () => {
        /*user is directed to the respective dashboard after signin according to the role
        Admin(of role 1) will be redirected to the admin dashboard
        User(of role 0) will be redirected to the user dashboard */
        if (redirectToReferrer) {
            if (user && user.role === 1) {
                return <Redirect to="/admin/dashboard" />;
            } else {
                return <Redirect to="/user/dashboard" />;
            }
        }
        //If non-admin user tries to go to the admin dashboard,user will be redirected to Home
        if (isAuthenticated()) {
            return <Redirect to="/" />;
        }
    };

    return (
        //Layout is an artificial component built for the rendering of tile area(in /core/Layout.js)
        <Layout
            title="Signin"
            description="Signin to Dexter"
            className="container col-md-8 offset-md-2"
        >
            {showLoading()}
            {showError()}
            {signUpForm()}
            {redirectUser()}
        </Layout>
    );
};

export default Signin;