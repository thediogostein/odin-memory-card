import React, { useEffect, useState } from 'react';

import styles from './Card.module.css';

function Card({ img, title, shuffle, setIsGameOver, setCurrentScore }) {
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  function endGame() {
    console.log('game over');
  }

  function handleClick() {
    if (hasBeenClicked) {
      setIsGameOver(true);
      endGame();
    } else {
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
