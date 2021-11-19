import 'bootstrap/dist/css/bootstrap.css';
import './Search.css';

const Search = props => {
  const handleChange = event => {
    props.filterSongs(event.target.value);
  };

  return (
    <input
      type='text'
      id='music-search'
      placeholder='Search your music'
      name='search'
      onChange={handleChange}
    />
  );
};

export default Search;
