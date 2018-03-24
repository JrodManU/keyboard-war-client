import React, { Component } from 'react';

class CreateGame extends Component {
  createGame() {
    this.props.socket.emit("create game", "wow");
  }
  render() {
    return(
      //we have to use an arrow function, or else 'this' will be undefined
      <button className="createGame" onClick={() => this.createGame()}>Create Game</button>
    );
  }
}

export default CreateGame;
