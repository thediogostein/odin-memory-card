import { useEffect, useState } from 'react';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';

import './global.css';
const API_KEY = 'cB9DSErDGugXmVLTjPcvkrxmaYA5GnDY';

const API_URL =
  'https://api.giphy.com/v1/gifs/trending?api_key=cB9DSErDGugXmVLTjPcvkrxmaYA5GnDY&limit=3&offset=0&rating=g&bundle=messaging_non_clips';
function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [hasWonTheGame, setHasWonTheGame] = useState(false);

  // Fisher-Yates sorting algorithm
  function shuffle() {
    console.log('shuffle');
    let array = [...data];
    let i = array.length;
    while (--i > 0) {
      let temp = Math.floor(Math.random() * (i + 1));
      [array[temp], array[i]] = [array[i], array[temp]];
    }
    setData(array);
  }

  useEffect(() => {
    fetch(API_URL) //
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        console.log('fetching');
        return response.json();
      })
      .then((actualData) => {
        setData(actualData.data);
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
      <Header currentScore={currentScore} bestScore={bestScore} />
      {isLoading && <p>Loading ...</p>}
      {error && <p>{`Error fetching the data - ${error}`}</p>}

      {data && !isGameOver && (
        <Cards
          data={data}
          shuffle={shuffle}
          setIsGameOver={setIsGameOver}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          setBestScore={setBestScore}
          setHasWonTheGame={setHasWonTheGame}
        />
      )}
      {isGameOver && (
        <Modal
          hasWonTheGame={hasWonTheGame}
          setIsGameOver={setIsGameOver}
          setCurrentScore={setCurrentScore}
        />
      )}
    </>
  );
}

export default App;
