import React from "react";
import { DAILYAPI } from "../config";
import Layout from "../core/Layout";
import DailyIframe from '@daily-co/daily-js';
import { addLiveRoom, deleteLiveRoom } from "../auth";


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

        let callFrame = DailyIframe.createFrame(document.getElementById('room-video'));
        
        callFrame.join({ url: room.url , showFullscreenButton: true});


        roomobj = room;

        //to add room details to backend

        const roomDetails = {
            educatorname: 'Thomson',
            streamlink: room.url,
            topic: this.props.match.params.courseName,
            about: 'components'
        }


        
        addLiveRoom(roomDetails)
        .then(res => console.log(res))
    }


    createRoom = (e) => {
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

    destroyRoom = (e) => {

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
    }

    componentWillUnmount() {
        this.destroyRoom()
    }

    render() {
    return (
        <React.Fragment>
        <Layout title='Dashboard' description='Your Educator Dashboard'>
        </Layout>
        <div id="room-video"><h1>Video will appear here once you've created a session</h1></div>
        <button id="create-room-button" onClick={this.createRoom}>Create a session</button>
        <button id="destroy-room-button" onClick={this.destroyRoom}>Close a session</button>
        </React.Fragment>
    )}
}

export default AdminStream;