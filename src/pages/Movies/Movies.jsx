import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import Loader from '../../components/Loader/Loader';
import { fetchSearch } from '../../components/MoviesAPI';

import {
  SearchForm,
  SearchButton,
  SearchIcon,
  SearchInput,
  Item,
} from './Movies.styled';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const input = searchParams.get('input') ?? '';
  const [searchInput, setSearchInput] = useState(input ?? '');
  const location = useLocation();

  function updateInput(event) {
    setSearchInput(event.currentTarget.value);
    if (event.currentTarget.value === '') {
      setSearchParams({});
      setMovies([]);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (searchInput.trim() === '') {
      toast('Enter image name');
      return;
    }

    setSearchParams({ input: searchInput });
  }

  useEffect(() => {
    if (input === '') {
      return;
    }
    async function fetchMovies() {
      try {
        setLoading(true);

        const searchMovies = await fetchSearch(input);

        setMovies(searchMovies.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, [input]);

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <SearchIcon />
        </SearchButton>

        <SearchInput
          name="input"
          value={searchInput}
          onChange={updateInput}
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search movies..."
        />
      </SearchForm>

      {loading && <Loader loading={loading} />}
      {!loading && movies && input !== '' && (
        <ul>
          {movies.map(movie => (
            <Item key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                <p>{movie.title}</p>
              </Link>
            </Item>
          ))}
        </ul>
      )}

      <Toaster position="top-right" />
    </>
  );
}
