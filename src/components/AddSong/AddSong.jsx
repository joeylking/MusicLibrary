import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './AddSong.css';

class AddSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      artist: '',
      album: '',
      genre: '',
      release_date: '',
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addSong(this.state);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-row row'>
          <div className='form-group col-md'>
            <label for='inputTitle'>Song Title</label>
            <input
              type='text'
              className='form-control'
              id='inputTitle'
              placeholder='Song Title'
              name='title'
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>
          <div className='form-group col-md'>
            <label for='inputArtist'>Artist</label>
            <input
              type='text'
              className='form-control'
              id='inputArtist'
              placeholder='Artist'
              name='artist'
              onChange={this.handleChange}
              value={this.state.artist}
            />
          </div>
          <div className='form-group col-md'>
            <label for='inputAlbum'>Album</label>
            <input
              type='text'
              className='form-control'
              id='inputAlbum'
              placeholder='Album'
              name='album'
              onChange={this.handleChange}
              value={this.state.album}
            />
          </div>
          <div className='form-group col-md'>
            <label for='inputGenre'>Genre</label>
            <select
              id='inputGenre'
              className='form-control'
              name='genre'
              onChange={this.handleChange}
              value={this.state.genre}
            >
              <option selected>Choose...</option>
              <option>Rock</option>
              <option>Pop</option>
              <option>Jazz</option>
              <option>Metal</option>
              <option>Blues</option>
              <option>Country</option>
              <option>Folk</option>
              <option>Dance</option>
            </select>
          </div>
          <div className='form-group col-md'>
            <label for='inputDate'>Release</label>
            <input
              type='date'
              className='form-control'
              id='inputDate'
              placeholder='YYYY-MM-DD'
              name='release_date'
              onChange={this.handleChange}
              value={this.state.release_date}
            />
          </div>
        </div>
        <button type='submit' className='btn btn-success'>
          Add Song
        </button>
      </form>
    );
  }
}

export default AddSong;
