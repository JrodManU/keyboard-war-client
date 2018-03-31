import React, { Component } from 'react';

class QuitGame extends Component {
  quitGame() {
    if(this.props.socket) {
      this.props.socket.emit("quit game");
    }
  }
  render() {
    return(
      <button className="quitGame" onClick={() => this.quitGame()}>Quit Game</button>
    );
  }
}

export default QuitGame;
