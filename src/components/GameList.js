import React, { Component } from 'react';
import Game from "./Game.js";
import axios from "axios";

class GameList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: [],
    }
  }
  componentDidMount() {
    axios.get("http://localhost:3000/get_games")
      .then((res) => {
        this.setState({ games: res.data});
      })
      .catch((err) => {
        console.log("Could not get games");
      });
  }
  render() {
    if(this.props.socket) {
      this.props.socket.on('update game list', (gamesString) => {
        this.setState({ games: JSON.parse(gamesString) });
      });
    }

    let games = [];
    for(var i = 0; i < this.state.games.length; i++) {
      games.push(
        <Game socket={this.props.socket} key={this.state.games[i].id} game={this.state.games[i]} />
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
