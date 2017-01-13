import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { videoSearch } from '../actions/action_video_search';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.videoSearch(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <div className="row search-bar">
        <div className="col-sm-8 col-sm-offset-2">
          <form onSubmit={this.onFormSubmit} className="input-group">
            <input
              placeholder="Search for awesome videos!"
              className="form-control"
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-secondary">Submit</button>
            </span>
          </form>
        </div>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ videoSearch }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
