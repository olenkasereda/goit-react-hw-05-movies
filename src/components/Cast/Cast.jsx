import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchCast } from '../../components/MoviesAPI';

import {
  List,
  Item,
  Image,
  Name,
  Character,
  Notification,
} from '../Cast/Cast.styled';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    async function fetchFilmCast() {
      try {
        const movieCast = await fetchCast(moviesId);
        setCast(movieCast.cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchFilmCast();
  }, [moviesId]);

  return (
    <>
      {cast.length !== 0 ? (
        <List>
          {cast.map(actor => (
            <Item key={actor.id}>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  alt={actor.name}
                />
              ) : (
                <Image
                  src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/username-icon.svg"
                  alt={actor.name}
                />
              )}

              <Name>{actor.name}</Name>
              <Character>{actor.character}</Character>
            </Item>
          ))}
        </List>
      ) : (
        <Notification>Cast not found</Notification>
      )}
    </>
  );
}
