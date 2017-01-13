import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectVideo } from '../actions/action_select_video';

class VideoDetail extends Component {
  render() {
    console.log(this.props.videos, 'video detail');

    if (!this.props.video) {
      return (
        <div className="col-md-8">
          <div className="yt-logo"></div>
        </div>
      );
    }

    const videoId = this.props.video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&autohide=1`;

    return (
      <div className="col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url} frameBorder="0" allowFullScreen></iframe>
        </div>
        <div className="video-detail">
          <h4>Title: {this.props.video.snippet.title}</h4>
          <p>Description: {this.props.video.snippet.description}</p>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    video: state.activeVideo,
    videos: state.videos
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectVideo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoDetail);
