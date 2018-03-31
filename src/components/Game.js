import React, { Component } from 'react';

import JoinGame from "./JoinGame.js";

class Game extends Component {
  render() {
    return(
      <div>
        <p className="game">{this.props.game.name}</p>
        <JoinGame gameId={this.props.game.id} />
      </div>
    );
  }
}

export default Game;
