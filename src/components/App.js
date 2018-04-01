import React, { Component } from 'react';
import io from 'socket.io-client';

import Lobby from './Lobby.js';
import GameWindow from "./GameWindow.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      socket: null,
      inGame: false
    }
  }

  componentDidMount() {
    this.setState({ socket: io('http://127.0.0.1:3000/', { transports: ['websocket', 'xhr-polling'] }) } );
  }

  render() {
    if(this.state.socket) {
      this.state.socket.on('game started', (game) => {
        this.setState({ inGame: true  });
      });
      this.state.socket.on('game ended', (game) => {
        this.setState({ inGame: false  });
      });

      if(this.state.inGame) {
        return (
          <GameWindow socket={this.state.socket} />
        );
      } else {
        return (
          <Lobby socket={this.state.socket} />
        );
      }
    } else {
      return (
        <p>Loading...</p>
      );
    }
  }
}

export default App;
