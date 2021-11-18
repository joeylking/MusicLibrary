import 'bootstrap/dist/css/bootstrap.css';

const Search = () => {
  return (
    <form action=''>
      <input
        type='text'
        id='music-search'
        placeholder='Search your music'
        name='search'
      />
      <button type='submit'>Search</button>
    </form>
  );
};

export default Search;
