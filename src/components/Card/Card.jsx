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
}) {
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

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
      if (currentScore === 2) {
        setHasWonTheGame(true);
        endGame();
        return;
      }
      setCurrentScore((prev) => prev + 1);
      setHasBeenClicked(true);
      shuffle();
    }
  }

  return (
    <button className={`${styles.card}`} onClick={handleClick}>
      <img src={img} alt={title} className={styles.img} />
    </button>
  );
}

export default Card;
