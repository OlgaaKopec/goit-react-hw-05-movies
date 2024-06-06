import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div>
      <h3>{movie.title}</h3>
      <Link to={`/movies/${movie.id}`}>More details</Link>
    </div>
  );
};

export default MovieCard;