import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { videoSearch } from '../actions/action_video_search';

class VideoDetail extends Component {
  constructor(props) {
    super(props);

    this.props.videoSearch();
  }

  render() {
    console.log(this.props.videos, 'videos');
    if (!this.props.video) {
      return <div className="col-md-8">Start by searching for a video.</div>;
    }

    const videoId = this.props.video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&autohide=1`;

    return (
      <div className="col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url} frameBorder="0" allowFullScreen></iframe>
        </div>
        <div>
          <div>{this.props.video.snippet.title}</div>
          <div>{this.props.video.snippet.description}</div>
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
  return bindActionCreators({ videoSearch }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoDetail);
