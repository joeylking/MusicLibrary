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
  console.log(songs);
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
            <button>Edit</button>
            <button>Delete</button>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SongList;
