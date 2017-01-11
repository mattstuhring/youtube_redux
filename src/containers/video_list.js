import React, { Component } from 'react';
import { connect } from 'react-redux';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBshkLdJ30M0o9GduqxQ-oSqj2OpFBDFFk';

class VideoList extends Component {
  renderVideos(video) {

    return (
      <li key={video.etag} className="list-group-item">
        {video.snippet.title}
      </li>
    );
  }

  render() {
    return (
      <ul className="col-md-4 list-group">
        {this.props.videos.map(this.renderVideos)}
      </ul>
    );
  }
};

function mapStateToProps(state) {
  return { videos: state.videos };
}

export default connect(mapStateToProps)(VideoList);
