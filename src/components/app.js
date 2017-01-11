import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import VideoList from '../containers/video_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList />
      </div>
    );
  }
}
