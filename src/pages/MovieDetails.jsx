import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [movie, setMovie] = useState();

  const defaultImg = 'https://pl.wikipedia.org/wiki/Wiewi%C3%B3rka_pospolita#/media/Plik:Squirrel_by_mareckr.jpg';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=0c9852925fc46007f1157388b4da307f`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const goBack = () => {
    if (location.state && location.state.from) {
      navigate(location.state.from);
    } else {
      navigate('/');
    }
  };

  return (
    <div>
      <button className="button" onClick={goBack}>Go back</button>
      <h2>{movie.title}</h2>
      <img 
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : defaultImg} 
        width={250} 
        alt="poster" 
      />
      <p>{movie.overview}</p>
      <ul>
        <li>
          <Link to={`cast`} state={{ from: location.state?.from }}>Cast</Link>
        </li>
        <li>
          <Link to={`reviews`} state={{ from: location.state?.from }}>Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;