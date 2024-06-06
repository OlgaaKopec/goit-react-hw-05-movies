import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const defaultImg = 'https://pl.wikipedia.org/wiki/Wiewi%C3%B3rka_pospolita#/media/Plik:Squirrel_by_mareckr.jpg';

  useEffect(() => {
    if (!movieId) return;

    const fetchCast = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=0c9852925fc46007f1157388b4da307f`);
        setCast(response.data.cast);
      } catch (error) {
        console.error('Error fetching cast:', error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>
          <img
            src={actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : defaultImg}
            alt={actor.name}
            width={100}
          />
          <p>{actor.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;