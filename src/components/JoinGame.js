import React, { Component } from 'react';

class JoinGame extends Component {

  joinGame() {
    this.props.socket.emit("join game", this.props.gameId);
  }
  render() {
    return(
      //we have to use an arrow function, or else 'this' will be undefined
      <button className="joinGame" onClick={() => this.joinGame()}>Join Game</button>
    );
  }
}

export default JoinGame;
