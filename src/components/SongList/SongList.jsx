import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SongList = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    async function getSongs() {
      const request = await axios.get('http://127.0.0.1:8000/music/');
      setSongs(request.data);
      return request;
    }
    getSongs();
  }, []);

  const deleteSong = id => {
    axios.delete(`http://127.0.0.1:8000/music/${id}`).then(res => {
      console.log(res);
      const newList = songs.filter(song => id !== song.id);
      setSongs(newList);
    });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Genre</th>
          <th>Release Date</th>
        </tr>
      </thead>
      <tbody>
        {songs.map(song => (
          <tr key={song.id}>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.genre}</td>
            <td>{song.release_date}</td>
            <td>
              <button>Edit</button>
            </td>
            <td>
              <button
                onClick={() => {
                  deleteSong(song.id);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SongList;
