import React, { Component } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import CourseCard from './CourseCard';

//image imports 

import ReactLogo from '../images/react_car.jpeg';
import AWSLogo from '../images/aws_car.jpg';
import HTMLLogo from '../images/4.jpg';

const contentStyle = {
  height: '100%',
  width: '60%',
  color: '#fff',
  lineHeight: '350px',
  textAlign: 'center',
  margin: 'auto',
  background: '#364d79',
  marginTop: 40,
  marginBottom: 40,
};

//const {user:{name}} = isAuthenticated();


class Dashboard extends Component {
  state = {};
  render() {
    return (
      <Layout
        title="Dashboard"
        description={`Welcome ${isAuthenticated().user.name}`}
        className="container-fluid">
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>
              <img
                className="d-block w-100"
                src={ReactLogo}
                alt="First slide"
                height="350px"
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img
                className="d-block w-100"
                src={AWSLogo}
                alt="First slide"
                height="350px"
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img
                className="d-block w-100"
                src={HTMLLogo}
                alt="First slide"
                height="350px"
              />
            </h3>
          </div>
        </Carousel>

        <div className="row">
          <h1 style={{ color: 'royalblue' }}>
            <b>Courses</b>
          </h1>
          <Row gutter={16}>
            <Col>
              <CourseCard                
                    alttext="JavaScript"
                    image="https://i.ytimg.com/vi/QIy874Wn1kM/maxresdefault.jpg"
                    redir='JavaScript'
                    title="JavaScript"
                    history={this.props.history}

                />
            </Col>
            <Col>
              <CourseCard
                    alttext="React"
                    image="https://hackernoon.com/images/z2xg2bpo.jpg"
                    redir='React'
                    title='React'
                    history={this.props.history}

                />
            </Col>
            <Col>
              <CourseCard
                    alttext="HTML"
                    image="https://pixelmechanics.com.sg/wp-content/uploads/2019/06/html5-logo-for-web-development.png"
                    redir="HTML"
                    title='HTML'
                    history={this.props.history}
              />
            </Col>
            <Col>
              <CourseCard
                    alttext="Python"
                    image="https://ictslab.com/wp-content/uploads/2019/03/d1326ca6cca8038cd115a061b4e2b3bc.png"
                    redir='Python'
                    title='Python'
                    history={this.props.history}
                />
            </Col>
            <Col>
              <CourseCard
                    alttext="AWS"
                    image="https://analyticsindiamag.com/wp-content/uploads/2020/04/AWS-Logo-scaled.jpg"
                    title="AWS"
                    redir='AWS'
                    history={this.props.history}
                 />
            </Col>
            <Col>
              <CourseCard 
                alttext="React Native" 
                image="https://www.futuremind.com/m/cache/c8/15/c8150d863e584ed42ccfbdc3f3f1aa3a.jpg" 
                title="React Native"
                redir="React Native"
                history={this.props.history}
              />
            </Col>
          </Row>
        </div>
      </Layout>
    );
  }
}

export default Dashboard;
