import React, { Component } from "react";
import { getLiveRooms } from "../../auth";
import Layout from "../../core/Layout";
import DailyIframe from '@daily-co/daily-js';


class CoursePage extends Component {

  constructor(props) {
    super(props);
    this.renderCards = this.renderCards.bind(this);
  }

  componentDidMount() {
    getLiveRooms().then(response => this.renderCards(response.streamdetails,this.props.match.params.courseName))
  }

  renderCards = (streams,course) => {
      
      streams.map(stream => {
        console.log(stream)
      if(stream.topic == course) {
        let ccard = document.createElement('div');
        ccard.setAttribute('class','learner-course-streams')
        ccard.innerHTML = stream.about;
        ccard.onclick = (e)=> {
                        document.getElementById('active-streams').innerHTML = '';
                        let callFrame = DailyIframe.createFrame(document.getElementById('active-streams'));
                        callFrame.join({ url: stream.streamlink , showFullscreenButton: true});
                      }
        document.getElementById('active-streams').appendChild(ccard)
      }

    })
  }

  render() {
    return (
      <div id="learner-course-page">
        <Layout title={this.props.match.params.courseName} description='Course Description'>
        </Layout>
        <div id="active-streams"></div>
      </div>
    );
  }
}

export default CoursePage;