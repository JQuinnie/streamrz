import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';

import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

// props come from react-router-dom
class StreamEdit extends Component {
  // component fetching state to prevent dependencies from navigation
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // ownProps - props object that shows up inside the component
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
