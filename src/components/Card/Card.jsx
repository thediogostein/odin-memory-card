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
}) {
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  function endGame() {
    setBestScore((prev) => {
      if (currentScore > prev) {
        return currentScore;
      } else {
        return prev;
      }
    });
    setIsGameOver(true);
  }

  function handleClick() {
    if (hasBeenClicked) {
      endGame();
    } else {
      if (currentScore === gameDifficulty - 1) {
        setHasWonTheGame(true);
        endGame();
        return;
      }
      setCurrentScore((prev) => prev + 1);
      setHasBeenClicked(true);
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
      <p>{title}</p>
    </button>
  );
}

export default Card;
