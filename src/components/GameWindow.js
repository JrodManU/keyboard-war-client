import React, { Component } from 'react';

import QuitGame from "./QuitGame.js";

class GameWindow extends Component {
  render() {
    return(
      <div>
        <p>GameWindow</p>
        <QuitGame socket={this.props.socket} />
      </div>
    );
  }
}

export default GameWindow;
