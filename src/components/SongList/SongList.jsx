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
    <>
      {songs.map(song => (
        <h1>
          {song.title} - {song.artist}
        </h1>
      ))}
    </>
  );
};

export default SongList;
