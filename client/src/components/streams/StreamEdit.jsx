import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchStream } from '../../actions';

// props come from react-router-dom
class StreamEdit extends Component {
  // component fetching state to prevent dependencies from navigation
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return <div>{this.props.stream.title}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  // ownProps - props object that shows up inside the component
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
