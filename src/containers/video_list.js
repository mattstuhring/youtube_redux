import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectVideo } from '../actions/action_video_detail';
import { bindActionCreators } from 'redux';

class VideoList extends Component {
  renderVideos() {
    return this.props.videos.map((video) => {
      return (
        <li
          onClick={() => this.props.selectVideo(video)}
          key={video.etag}
          className="list-group-item">{video.snippet.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="col-md-4 list-group">
        {this.renderVideos()}
      </ul>
    );
  }
};

function mapStateToProps(state) {
  return { videos: state.videos };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectVideo: selectVideo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
