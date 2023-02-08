import axios from 'axios';

const KEY = '88e21d85616f2eea57c4948e250da063';

export const fetchTrending = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/all/day',
    {
      params: {
        api_key: KEY,
      },
    }
  );
  return response.data;
};

export const fetchSearch = async input => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/search/movie',
    {
      params: {
        query: input,
        api_key: KEY,
      },
    }
  );
  return response.data;
};

export const fetchDetails = async id => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    params: {
      api_key: KEY,
    },
  });
  return response.data;
};

export const fetchCast = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits`,
    {
      params: {
        api_key: KEY,
      },
    }
  );
  return response.data;
};

export const fetchReviews = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews`,
    {
      params: {
        api_key: KEY,
      },
    }
  );
  return response.data;
};
