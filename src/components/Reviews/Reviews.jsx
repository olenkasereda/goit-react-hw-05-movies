import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchReviews } from '../../components/MoviesAPI';

import { Author, Content, Notification } from '../Reviews/Reviews.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    async function fetchReviewsMovie() {
      try {
        const movieReviews = await fetchReviews(moviesId);
        setReviews(movieReviews.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviewsMovie();
  }, [moviesId]);

  return (
    <>
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <Author> Author: {author}</Author>
              <Content>{content}</Content>
            </li>
          ))}
        </ul>
      ) : (
        <Notification>Reviews not found</Notification>
      )}
    </>
  );
}
