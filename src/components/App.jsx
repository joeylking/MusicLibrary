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
      filteredSongs: [],
    };
  }

  componentDidMount() {
    this.getSongs();
  }

  async getSongs() {
    const request = await axios.get('http://127.0.0.1:8000/music/');
    this.setState({
      songs: request.data,
      filteredSongs: request.data,
    });
  }

  deleteSong = id => {
    axios.delete(`http://127.0.0.1:8000/music/${id}`).then(res => {
      const newList = this.state.songs.filter(song => id !== song.id);
      this.setState({
        songs: newList,
      });
    });
  };

  addSong = newSong => {
    axios.post('http://127.0.0.1:8000/music/', newSong).then(res =>
      this.setState(prevState => ({
        songs: [...prevState.songs, res.data],
      }))
    );
  };

  filterSongs = query => {
    const filtered = this.state.songs.filter(song => {
      if (query === '') {
        return song;
      } else if (
        song.title.toLowerCase().includes(query.toLowerCase()) ||
        song.artist.toLowerCase().includes(query.toLowerCase()) ||
        song.album.toLowerCase().includes(query.toLowerCase()) ||
        song.genre.toLowerCase().includes(query.toLowerCase()) ||
        song.release_date.toString().includes(query)
      ) {
        return song;
      }
    });
    this.setState({
      filteredSongs: filtered,
    });
  };

  render() {
    return (
      <div className='App'>
        <Search filterSongs={this.filterSongs} />
        <SongList
          songs={this.state.filteredSongs}
          deleteSong={this.deleteSong}
        />
        <AddSong addSong={this.addSong} />
      </div>
    );
  }
}

export default App;
