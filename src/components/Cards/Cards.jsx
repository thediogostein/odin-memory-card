import React, { useState } from 'react';
import Card from '../Card/Card';

import styles from './Cards.module.css';

function Cards({
  data,
  shuffle,
  setIsGameOver,
  currentScore,
  setCurrentScore,
  setBestScore,
  setHasWonTheGame,
}) {
  return (
    <div className="wrapper">
      <p className={styles.rules}>
        *Get points by clicking on an image but don't click on any more than
        once!
      </p>

      <div className={styles.grid}>
        {data.map((item) => (
          <Card
            key={item.id}
            img={item.images.fixed_width.url}
            title={item.title}
            shuffle={shuffle}
            setIsGameOver={setIsGameOver}
            currentScore={currentScore}
            setCurrentScore={setCurrentScore}
            setBestScore={setBestScore}
            setHasWonTheGame={setHasWonTheGame}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
