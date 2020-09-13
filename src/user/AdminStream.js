import React from "react";
import { DAILYAPI } from "../config";
import Layout from "../core/Layout";
import DailyIframe from '@daily-co/daily-js';
import { addLiveRoom, deleteLiveRoom, isAuthenticated } from "../auth";


let roomobj = {};

class AdminStream extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            link: '',
        }
        this.createRoom = this.createRoom.bind(this);
        this.createVideo = this.createVideo.bind(this);
        this.destroyRoom = this.destroyRoom.bind(this);
    }

    createVideo = (room) => {

        //converting div to playable iframe
        document.getElementById('room-video').innerHTML = '';

        let callFrame = DailyIframe.createFrame(document.getElementById('room-video'));
        
        callFrame.join({ url: room.url , showFullscreenButton: true});


        roomobj = room;

        //to add room details to backend

        
        const roomDetails = {
            educatorname: isAuthenticated().user.name || 'Educator',
            streamlink: room.url,
            topic: this.props.match.params.courseName,
            about: document.getElementById('about').value || 'Q-&-A'
        }

        addLiveRoom(roomDetails)
        .then(res => console.log(res))
    }


    createRoom = (e) => {
        document.getElementById('room-video').innerHTML = "<h1>Loading, please wait...</h1>"

        const url = "https://api.daily.co/v1/rooms/";
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer 2bd2f54b5622d07b584c375d39c46a24fe570c3554669f15ab6d37fc4e0e1f4f`
            }
        })
        .then(response => response.json())
        .then(final => this.createVideo(final))
    }

    destroyRoom = () => {

        //to delete from backend
        deleteLiveRoom(roomobj.url.toString())
        .then(response => console.log(response))


        //For the daily room destruction
        const url = `https://api.daily.co/v1/rooms/${roomobj.name}`;
        fetch(url,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer 2bd2f54b5622d07b584c375d39c46a24fe570c3554669f15ab6d37fc4e0e1f4f`
            }
        })
        .then(response => console.log(response))

        document.getElementById('room-video').innerHTML = "<h1>Please start another session to stream again</h1>"
    }

    componentWillUnmount() {
        if (roomobj.url !== undefined){
        this.destroyRoom()
        }
    }

    render() {
    return (
        <React.Fragment>
        <Layout title='Dashboard' description='Your Educator Dashboard'>
        </Layout>
        <div id="educator-player">
            <div id="controls-player">
                <label>Please mention the description for this course:</label>
                <input type="text" id="about"></input>
                <button id="create-room-button" onClick={this.createRoom}>Create a session</button>
                <button id="destroy-room-button" onClick={this.destroyRoom}>Close session</button>
            </div>
            <div id="room-video"><h1>Please click on 'Create a session' to begin.</h1></div>
        </div>
        </React.Fragment>
    )}
}

export default AdminStream;