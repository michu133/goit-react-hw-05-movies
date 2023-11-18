import { Outlet, useNavigate, useParams } from 'react-router-dom';
import React, { useState, useEffect, Suspense } from 'react';
import { movieDetails } from 'api/fetch';
import styles from './MovieDetails.module.css';
import { Link } from 'react-router-dom';

const Cast = React.lazy(() => import(`../Cast/Cast`));
const Reviews = React.lazy(() => import(`../Reviews/Reviews`));

export const MovieDetails = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await movieDetails(id);
        setMovieData(movieData);
      } catch (error) {
        console.error('Błąd podczas pobierania danych:', error);
      }
    };

    fetchData();
  }, [id]);
  const navigate = useNavigate();
  if (!movieData) {
    return <div>Loading...</div>;
  }
  const { title, poster_path, vote_average, overview, genres } = movieData;

  return (
    <main className={styles.movie_container}>
      <button onClick={() => navigate(-1)} type="button" className={styles.btn}>
        Go back
      </button>
      <div className={styles.movie_details}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        ></img>
        <div className={styles.movie_details_text}>
          <h1>{title}</h1>
          <p>User Score:{Math.round(vote_average * 10)}% </p>
          <h2>Overwiev</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          {genres.map(({ name }) => (
            <p>{name}</p>
          ))}
        </div>
      </div>
      <div className={styles.movie_info}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to={`/movies/${id}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${id}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet>
          <Cast />
          <Reviews />
        </Outlet>
      </Suspense>
    </main>
  );
};
