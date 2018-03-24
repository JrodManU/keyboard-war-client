import React, { Component } from 'react';
import Game from "./Game.js";

class GameList extends Component {
  constructor(props) {
    super(props);

    this.setState({ games: [] });
  }
  componentDidMount() {
    this.props.socket.on("games changed", (games) => {
      this.setState({ games: games });
    });
  }
  render() {
    let games = [];
    for(var i = 0; i < this.state.games.length; i++) {
      games.push(
        <Game game={this.state.games[i]} />
      );
    }

    return(
      <ul className="gameList">
        {games}
      </ul>
    );
  }
}

export default GameList;
