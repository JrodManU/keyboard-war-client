import React, { Component } from 'react';
import io from 'socket.io-client';

import CreateGame from './CreateGame.js';
import GameList from "./GameList.js";

let socket;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { time: Date.now() };
  }

  componentDidMount() {
    socket = io('http://127.0.0.1:3000/', { transports: ['websocket', 'xhr-polling'] });
    socket.on('update time', (time) => {
      this.setState({ time: time });
    });
  }

  render() {
    return (
      <div>
        <CreateGame socket={socket}/>
      </div>
    );
  }
}

export default App;
