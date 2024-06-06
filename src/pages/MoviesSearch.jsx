import { useState } from 'react';
import { Link } from 'react-router-dom';

const MoviesSearch = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=0c9852925fc46007f1157388b4da307f&query=${query}`);
    const data = await response.json();
    setSearchResults(data.results);
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for a movie..." 
      />
      <button onClick={handleSearch}>Search</button>
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoviesSearch;