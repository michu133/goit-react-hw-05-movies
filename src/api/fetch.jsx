export const trendingMovies = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTE0NzFiMDIzMDE4YzU4ZDVkMjFkZTE1ZGI3MTRkYSIsInN1YiI6IjY1NTNlNGFmOTAzYzUyMDExYjZhZjc3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.omVU6YvZ9tjvgJ-QoNxmACQl1PQoU7Bit9tGalQ70bk',
    },
  };

  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      options
    );

    const data = await response.json();

    const moviesData = data.results.map(movie => ({
      title: movie.title,
      id: movie.id,
    }));

    return moviesData;
  } catch (error) {
    console.log('error', error);
  }
};
export const movieDetails = async movieId => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTE0NzFiMDIzMDE4YzU4ZDVkMjFkZTE1ZGI3MTRkYSIsInN1YiI6IjY1NTNlNGFmOTAzYzUyMDExYjZhZjc3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.omVU6YvZ9tjvgJ-QoNxmACQl1PQoU7Bit9tGalQ70bk',
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log('error', error);
  }
};
export const castDetails = async movieId => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTE0NzFiMDIzMDE4YzU4ZDVkMjFkZTE1ZGI3MTRkYSIsInN1YiI6IjY1NTNlNGFmOTAzYzUyMDExYjZhZjc3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.omVU6YvZ9tjvgJ-QoNxmACQl1PQoU7Bit9tGalQ70bk',
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      options
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log('error', error);
  }
};
export const movieReviews = async movieId => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTE0NzFiMDIzMDE4YzU4ZDVkMjFkZTE1ZGI3MTRkYSIsInN1YiI6IjY1NTNlNGFmOTAzYzUyMDExYjZhZjc3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.omVU6YvZ9tjvgJ-QoNxmACQl1PQoU7Bit9tGalQ70bk',
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
      options
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log('error', error);
  }
};

