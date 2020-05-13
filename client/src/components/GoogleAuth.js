import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

const KEY = process.env.REACT_APP_OAUTH_CLIENT_ID;

// responsible for changing the state of the app (this approach is easier to follow for auth flow)
// not best practice to have component manage state, action creators should manage it
class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: KEY,
          scope: 'email',
        })
        .then(() => {
          // after loading a library after initializing it, get reference to the auth library
          // and assign it to this.auth
          this.auth = window.gapi.auth2.getAuthInstance();
          // then update auth state inside of redux store
          this.onAuthChange(this.auth.isSignedIn.get());
          // wait for authentication status to change in the future
          this.auth.isSignedIn.listen(this.onAuthChange); // invoked anytime users auth changes
        });
    });
  }

  // called anytime the users auth status changes
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
}

// redux connect -> connect(state, actions)
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
