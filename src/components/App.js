import React, { Component } from 'react';
import io from 'socket.io-client';

import CreateGame from './CreateGame.js';
import GameList from "./GameList.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      socket: null
    }
  }

  componentDidMount() {
    this.setState({ socket: io('http://127.0.0.1:3000/', { transports: ['websocket', 'xhr-polling'] }) } );
  }

  render() {
    return (
      <div>
        <CreateGame socket={this.state.socket}/>
        <GameList socket={this.state.socket}/>
      </div>
    );
  }
}

export default App;
