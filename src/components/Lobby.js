import React, { Component } from 'react';

import CreateGame from "./CreateGame.js";
import GameList from "./GameList.js";

class Lobby extends Component {
  render() {
    return(
      <div>
        <CreateGame socket={this.props.socket}/>
        <GameList socket={this.props.socket}/>
      </div>
    );
  }
}

export default Lobby;
