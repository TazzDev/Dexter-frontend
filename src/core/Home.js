import React from 'react';
import Menu from "./Menu";
import Logo from '../images/logo.png';

//Home images imports

import ReactLogo from '../images/1.jpg';
import JSLogo from '../images/2.png';
import AWSLogo from '../images/3.jpg';
import HTMLLogo from '../images/4.jpg';
import PythonLogo from '../images/5.jpg';
import ReactNativeLogo from '../images/6.jpg';



//import Layout from './Layout'

import '../styles.css'

const Home = () => {
    return (
        // <Layout title='Home Page' description='Dexter App'>
        //     ......
        // </Layout>
        <React.Fragment>
        <Menu id="head-menu"/>
        <div id="homepage">
            
            <div id="brand">
                <img src={Logo} alt="logo" id="logo"></img>
                <h1 id="subtext">#Just Learning Happening</h1>
            </div>
                <div id="main-card-section">
                    <div className="home-card-section">

                        <div className="home-card">
                            <img src={ReactLogo}  alt="logo" className="card-logos"></img>
                            React
                        </div>

                        <div className="home-card">
                            <img src={JSLogo}  alt="logo" className="card-logos"></img>
                            JavaScript
                        </div>

                        <div className="home-card">
                            <img src={ReactNativeLogo}  alt="logo" className="card-logos"></img>
                            ReactNative
                        </div>
                    </div>
                    <div className="home-card-section">

                        <div className="home-card">
                            <img src={HTMLLogo}  alt="logo" className="card-logos"></img>
                            HTML
                        </div>

                        <div className="home-card">
                            <img src={PythonLogo}  alt="logo" className="card-logos"></img>
                            Python
                        </div>
                        
                        <div className="home-card">
                            <img src={AWSLogo}  alt="logo" className="card-logos"></img>
                            AWS
                        </div>
                    </div>
                </div>
        </div>
        </React.Fragment>
    )
}

export default Home;