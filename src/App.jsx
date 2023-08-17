import { useEffect, useState } from 'react';
import Cards from './components/Cards/Cards';

import './global.css';

const API_KEY = 'cB9DSErDGugXmVLTjPcvkrxmaYA5GnDY';

const API_URL =
  'https://api.giphy.com/v1/gifs/trending?api_key=cB9DSErDGugXmVLTjPcvkrxmaYA5GnDY&limit=8&offset=0&rating=g&bundle=messaging_non_clips';
function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL) //
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <h1>Giphy Api</h1>
      {isLoading && <p>Loading ...</p>}
      {error && <p>{`Error fetching the data - ${error}`}</p>}

      {data && <Cards data={data.data} />}
    </>
  );
}

export default App;
