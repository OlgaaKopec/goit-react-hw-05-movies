import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList/MovieList.jsx';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=0c9852925fc46007f1157388b4da307f`);
      setMovies(response.data.results);
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
