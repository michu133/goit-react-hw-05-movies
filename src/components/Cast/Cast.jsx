import { castDetails } from 'api/fetch';
import { useParams } from 'react-router-dom';
import styles from './Cast.module.css';

import { useState, useEffect } from 'react';

export const Cast = () => {
  const { id } = useParams();
  const [castData, setCastData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const castData = await castDetails(id);
        setCastData(castData);
      } catch (error) {
        console.error('Błąd podczas pobierania danych:', error);
      }
    };

    fetchData();
  }, [id]);
  if (!castData) {
    return <div>Loading...</div>;
  }
  return (
    <ul className={styles.list}>
      {castData.cast.map(actor => (
        <li key={actor.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
            alt={actor.name}
            className={styles.img}
          />
          <p className={styles.title}>{actor.name}</p>
          <p>
            <b>Character: </b>
            {actor.character}
          </p>
        </li>
      ))}
    </ul>
  );
};
