import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SongList from './SongList/SongList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
  }

  componentDidMount() {
    this.getSongs();
  }

  async getSongs() {
    const request = await axios.get('http://127.0.0.1:8000/music/');
    this.setState({
      songs: request.data,
    });
  }

  render() {
    return (
      <div className='App'>
        <SongList songs={this.state.songs} />
      </div>
    );
  }
}

export default App;
