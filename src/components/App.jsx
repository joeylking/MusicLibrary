import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Search from './Search/Search';
import SongList from './SongList/SongList';
import AddSong from './AddSong/AddSong';

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

  deleteSong = id => {
    axios.delete(`http://127.0.0.1:8000/music/${id}`).then(res => {
      console.log(res);
      const newList = this.state.songs.filter(song => id !== song.id);
      this.setState({
        songs: newList,
      });
    });
  };

  render() {
    return (
      <div className='App'>
        <Search />
        <SongList songs={this.state.songs} deleteSong={this.deleteSong} />
        <AddSong />
      </div>
    );
  }
}

export default App;
