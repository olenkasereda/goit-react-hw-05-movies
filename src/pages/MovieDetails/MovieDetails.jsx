import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';

import { fetchDetails } from '../../components/MoviesAPI';

import {
  BackLink,
  Container,
  Image,
  InfoContainer,
  MovieTitle,
  Criteria,
  Details,
  Average,
  LinkContainer,
  StyledLink,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const { moviesId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    async function fetchDetailsByMovie() {
      try {
        const movieDetails = await fetchDetails(moviesId);
        setMovie(movieDetails);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDetailsByMovie();
  }, [moviesId]);

  const { poster_path, release_date, title, vote_average, overview, genres } =
    movie;

  return (
    <>
      <BackLink to={backLinkHref}>⇦ Back</BackLink>
      <Container>
        {poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
        ) : (
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/4/43/Illustration_of_an_image.png"
            alt={title}
          />
        )}

        <InfoContainer>
          <MovieTitle>
            {title} ({release_date && new Date(release_date).getFullYear()})
          </MovieTitle>
          <Details>
            User score: <Average> {Math.round(vote_average * 10)}%</Average>
          </Details>
          <Criteria>Overview</Criteria>
          <Details>{overview}</Details>
          <Criteria>Geners</Criteria>
          {genres && (
            <Details>{genres.map(genre => genre.name).join(' ')}</Details>
          )}
        </InfoContainer>
      </Container>
      <LinkContainer>
        <StyledLink to="cast" state={{ from: backLinkHref }}>
          Cast
        </StyledLink>
        <StyledLink to="reviews" state={{ from: backLinkHref }}>
          Reviews
        </StyledLink>
      </LinkContainer>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
