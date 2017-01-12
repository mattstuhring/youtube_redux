import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import VideoList from '../containers/video_list';
import VideoDetail from '../containers/video_detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail />
        <VideoList />
      </div>
    );
  }
};
