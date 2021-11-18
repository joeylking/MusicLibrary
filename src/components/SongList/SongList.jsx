import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

const SongList = props => {
  //   const deleteSong = id => {
  //     axios.delete(`http://127.0.0.1:8000/music/${id}`).then(res => {
  //       console.log(res);
  //       const newList = songs.filter(song => id !== song.id);
  //       setSongs(newList);
  //     });
  //   };

  return (
    <table className='table table-dark'>
      <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Genre</th>
          <th>Release Date</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.songs.map(song => (
          <tr key={song.id}>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.genre}</td>
            <td>{song.release_date}</td>
            <td>
              <button type='button' className='btn btn-success'>
                Edit
              </button>
            </td>
            <td>
              {/* <button
                type='button'
                className='btn btn-danger'
                onClick={() => {
                  deleteSong(song.id);
                }}
              >
                Delete
              </button> */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SongList;
