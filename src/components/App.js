import React, { Component } from 'react';
import axios from 'axios';
import io from 'socket.io-client';

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
    /*axios({
      method: 'get',
      url: 'http://127.0.0.1:3000/'
    })
      .then((response) => {
        this.setState({ message: response.data.message });
      })
      .catch((error) => {
        console.log(error);
      });*/
  }

  render() {
    return (
      <div>
        <h1>{this.state.time}</h1>
      </div>
    );
  }
}

export default App;
