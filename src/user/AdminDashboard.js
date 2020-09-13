import React from "react";
import Layout from "../core/Layout";

//image imports 

import ReactLogo from '../images/1.jpg';
import JSLogo from '../images/2.png';
import AWSLogo from '../images/3.jpg';
import HTMLLogo from '../images/4.jpg';
import PythonLogo from '../images/5.jpg';
import ReactNativeLogo from '../images/6.jpg';

//Layout of the dashboard strictly for Admin 
class AdminDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.renderAdminStream = this.renderAdminStream.bind(this);
    }

    renderAdminStream = (e) => {
        this.props.history.push(`/admin/dashboard/${e.target.parentNode.children[1].tagName==='P' ? 
                                                            e.target.parentNode.children[1].innerText : 
                                                            e.target.parentNode.children[0].innerText}`)
    }

    render() {
    return (
        <React.Fragment>
        <Layout title='Dashboard' description='Your Educator Dashboard'>
        </Layout>
        <h1 id="edu-dash-title">Pick a course to start a session:</h1>
        <div id="edu-courses">

            <div className="edu-card" onClick={this.renderAdminStream}>
                <img src={ReactLogo}  alt="logo" className="card-logos"></img>
                <p>React</p>
            </div>

            <div className="edu-card" onClick={this.renderAdminStream}>
                <img src={JSLogo}  alt="logo" className="card-logos"></img>
                <p>JavaScript</p>
            </div>

            <div className="edu-card" onClick={this.renderAdminStream}>
                <img src={AWSLogo}  alt="logo" className="card-logos"></img>
                <p>AWS</p>
            </div>

            <div className="edu-card" onClick={this.renderAdminStream}>
                <img src={PythonLogo}  alt="logo" className="card-logos"></img>
                <p>Python</p>
            </div>

            <div className="edu-card" onClick={this.renderAdminStream}>
                <img src={ReactNativeLogo}  alt="logo" className="card-logos"></img>
                <p>React Native</p>
            </div>

            <div className="edu-card" onClick={this.renderAdminStream}>
                <img src={HTMLLogo}  alt="logo" className="card-logos"></img>
                <p>HTML</p>
            </div>

        </div>
        </React.Fragment>
    )}
}

export default AdminDashboard;