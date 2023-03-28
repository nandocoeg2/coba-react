import React from 'react';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <h1>Profile</h1>
        <p>My name is {this.props.name}</p>
      </div>
    );
  }
}

export default Profile;