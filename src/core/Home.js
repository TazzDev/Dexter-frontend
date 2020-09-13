import React from 'react';
import Menu from "./Menu";
import Logo from '../images/logo.png';

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
                <img src={Logo} id="logo"></img>
                <h1 id="subtext">#Just Learning Happening</h1>
            </div>

            <div id="home-card-section">

                <div className="home-card">
                    React
                </div>

                <div className="home-card">
                    React
                </div>

                <div className="home-card">
                    React
                </div>

                <div className="home-card">
                    React
                </div>

                <div className="home-card">
                    React
                </div>
                
                <div className="home-card">
                    React
                </div>

            </div>
        </div>
        </React.Fragment>
    )
}

export default Home;