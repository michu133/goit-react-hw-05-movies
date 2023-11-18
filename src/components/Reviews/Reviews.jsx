import { movieReviews } from 'api/fetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { id } = useParams();
  const [reviewsData, setReviewsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reviewsData = await movieReviews(id);
        setReviewsData(reviewsData);
      } catch (error) {
        console.error('Błąd podczas pobierania danych:', error);
      }
    };

    fetchData();
  }, [id]);
  if (!reviewsData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {reviewsData.total_results > 0 ? (
        <ul>
          {reviewsData.results.map(review => (
            <li key={reviewsData.id}>
              <p>
                <b>Author: </b>
                {review.author}
              </p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews found</p>
      )}
    </div>
  );
};
