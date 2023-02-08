import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { fetchTrending } from '../../components/MoviesAPI';

import { Title, MovieItem } from '../Home/Home.styled';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMoviesTrending() {
      try {
        const trendingMovies = await fetchTrending();
        setMovies(trendingMovies.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMoviesTrending();
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      {movies && (
        <ul>
          {movies.map(movie => (
            <MovieItem key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <p>
                  {movie.title}
                  {movie.name}
                </p>
              </Link>
            </MovieItem>
          ))}
        </ul>
      )}
    </>
  );
}
