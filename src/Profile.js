import React, { Component } from 'react';
import toast from 'toasted-notes';
import 'toasted-notes/src/styles.css';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  clicked = () => {
    toast.notify('Hello World!')
  }

  render() {
    return (
      <div>
        <button onClick={this.clicked}>Alert</button>
        <br></br>
        <img src="apel.jpg"/>
      </div>
    );
  }
}

export default Profile;
