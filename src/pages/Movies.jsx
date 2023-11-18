import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const title = searchParams.get('title');

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${title}&api_key=e51471b023018c58d5d21de15db714da`
      );

      if (!response.ok) {
        throw new Error('Response error');
      }
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error('Błąd podczas pobierania danych:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        placeholder="Search by movie title..."
        onChange={e => setSearchParams({ title: e.target.value })}
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
      {title && searchResults.length > 0 ? (
        <ul>
          {searchResults.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        title && <p>No movies found, sorry.</p>
      )}
    </div>
  );
};
