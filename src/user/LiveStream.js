import React from 'react';
import Menu from "../core/Menu";


class LiveStream extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let callFrame = DailyIframe.createFrame(document.getElementById('active-video'));
        callFrame.join({ url: this.props.match.params.streamlink , showFullscreenButton: true});
    }

    render() {
        return (
            <React.Fragment>
                <Menu/>
                <div id="active-video">
                </div>
            </React.Fragment>
        )
    }
}

export default LiveStream;