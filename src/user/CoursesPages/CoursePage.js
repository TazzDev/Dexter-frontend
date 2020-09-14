import React, { Component } from "react";
import { getLiveRooms } from "../../auth";
import Layout from "../../core/Layout";
import DailyIframe from '@daily-co/daily-js';

//image imports
import Loading from '../../images/loading.gif';

class CoursePage extends Component {

  constructor(props) {
    super(props);
    this.renderCards = this.renderCards.bind(this);
  }

  componentDidMount() {
    //Call to the backend to get all the live room details and render the streams
    getLiveRooms().then(response => this.renderCards(response.streamdetails,this.props.match.params.courseName))
  }

  //rendering the stream cards / boxes
  renderCards = (streams,course) => {
      document.getElementById('active-streams').innerHTML = '';

      let count = 0;

      streams.map(stream => {
        //for each stream we're checking if the topic of the stream is the same as the name of the course we're on, if so, we render it.
        if(stream.topic === course) {
          count++;
          //creating a div / card element and adding the stream details to it
          let ccard = document.createElement('div');
          ccard.setAttribute('class','learner-course-streams')
          ccard.innerHTML = `<h1>${stream.about}</h1><p>By ${stream.educatorname}</p>`;

          //when you click on any stream card it'll load another player from the DAILY API
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
        <div id="active-streams"><img src={Loading} alt="Loading please wait" className="load-gif-course"/></div>
      </div>
    );
  }
}

export default CoursePage;