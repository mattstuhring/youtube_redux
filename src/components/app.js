import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { videoSearch } from '../actions/action_video_search';
import Navbar from './navbar';
import SearchBar from '../containers/search_bar';
import VideoList from '../containers/video_list';
import VideoDetail from '../containers/video_detail';

class App extends Component {
  constructor(props) {
    super(props);

    this.props.videoSearch();
  }

  render() {
    return (
      <div>
        <Navbar />
        <SearchBar />
        <VideoDetail />
        <VideoList />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return { videos: state.videos };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ videoSearch }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
