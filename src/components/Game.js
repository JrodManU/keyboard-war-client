import React, { Component } from 'react';

class Game extends Component {
  render() {
    return(
      <p className="game">{this.props.game.name}</p>
    );
  }
}

export default Game;
