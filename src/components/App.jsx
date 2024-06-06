import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/SearchBar/Header.jsx';

const Home = lazy(() => import('../pages/Home.jsx'));
const Movies = lazy(() => import('../pages/Movies.jsx'));
const MovieDetails = lazy(() => import('../pages/MovieDetails.jsx'));
const MoviesSearch = lazy(() => import('../pages/MoviesSearch.jsx'));
const Cast = lazy(() => import('./Cast/Cast.jsx'));
const Reviews = lazy(() => import('./Reviews/Reviews.jsx'));

export const App = () => {
  return (
    <div>
      <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
  <Route path="cast" element={<Cast />} />
  <Route path="reviews" element={<Reviews />} />
</Route>
<Route path="/search" element={<MoviesSearch />} />
      </Routes>
    </Suspense>
    </div>
  );
};