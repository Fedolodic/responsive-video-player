import React from 'react';
import Video from './Video';
import Menu from './Menu';
import '../../public/styles.css';

const VIDEOS = {
    fast: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
    slow: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
    cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
    eek: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
};

/*<App/>'s job is to pass the src down to a stateless component, and to pass the ability to change
* the src down to a different stateless component.
*
* <App/> passes down this.state.src to <Video/>. <Video/> uses this info to display the chosen video.
* <App/> also passes down the ability to change this.state.src to <Menu/>. <Menu/> uses this ability
* to let a user select a new video.*/
export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            src: VIDEOS.fast
        };

        this.chooseVideo = this.chooseVideo.bind(this);
    }

    chooseVideo(newVideo) {
        this.setState({
            src: VIDEOS[newVideo]
        });
    }

    render() {
        return (
            <div>
                <h1>Video Player</h1>
                <Menu chooseVideo={this.chooseVideo}/>
                <Video src={this.state.src}/>
            </div>
        );
    }
}