import React, { useEffect, useState } from 'react';

import styles from './Card.module.css';

function Card({
  img,
  title,
  shuffle,
  setIsGameOver,
  currentScore,
  setCurrentScore,
  setBestScore,
  setHasWonTheGame,
  gameDifficulty,
  setNumberOfWins,
  setNumberOfLoses,
}) {
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  function endGame() {
    setBestScore((prev) => {
      if (currentScore >= prev) {
        return currentScore;
      } else {
        return prev;
      }
    });
    setIsGameOver(true);
  }

  function handleClick() {
    if (hasBeenClicked) {
      setNumberOfLoses((prev) => prev + 1);
      endGame();
      setHasWonTheGame(false);
    } else {
      setHasBeenClicked(true);
      setCurrentScore((prev) => prev + 1);

      if (currentScore === gameDifficulty - 1) {
        endGame();
        setHasWonTheGame(true);
        setNumberOfWins((prev) => prev + 1);
      }

      shuffle();
    }
  }

  function handleLoad() {
    setIsLoading(false);
  }

  return (
    <button className={`${styles.card}`} onClick={handleClick}>
      <img onLoad={handleLoad} src={img} alt={title} className={styles.img} />
      {isLoading && <span className={styles.loading}>loading...</span>}
    </button>
  );
}

export default Card;
