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
    window.scrollTo(0,0);
    getLiveRooms().then(response => this.renderCards(response.streamdetails,this.props.match.params.courseName))
  }

  renderCards = (streams,course) => {
      document.getElementById('active-streams').innerHTML = '';

      let count = 0;

      streams.map(stream => {
  
        if(stream.topic == course) {
          count++;
          let ccard = document.createElement('div');
          ccard.setAttribute('class','learner-course-streams')
          ccard.innerHTML = `<h1>${stream.about}</h1><p>By ${stream.educatorname}</p>`;

          ccard.onclick = (e)=> {
            document.getElementById('active-streams').innerHTML = '';
            let callFrame = DailyIframe.createFrame(document.getElementById('active-streams'));
            callFrame.join({ url: stream.streamlink , showFullscreenButton: true});
         }
          document.getElementById('active-streams').appendChild(ccard)
      }
    })

    if (count < 1) {
      document.getElementById('active-streams').innerHTML = '<h1>No active streams</h1>';
    } else {
      document.getElementById('status').innerHTML = '<h1>Streams live now:</h1><br/>';
    }
  }

  render() {
    return (
      <div id="learner-course-page">
        <Layout title={this.props.match.params.courseName} description='Course Description'>
        </Layout>
        <div id="status"></div>
        <div id="active-streams"><h1>Content Loading, Please wait...</h1></div>
      </div>
    );
  }
}

export default CoursePage;