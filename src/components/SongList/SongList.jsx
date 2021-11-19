import 'bootstrap/dist/css/bootstrap.css';

const SongList = props => {
  console.log(props);
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
              <button
                type='button'
                className='btn btn-danger'
                onClick={() => {
                  props.deleteSong(song.id);
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
