import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.nama}</p>
        <img src="apel.jpg"/>
      </div>
    );
  }
}

export default Profile;
