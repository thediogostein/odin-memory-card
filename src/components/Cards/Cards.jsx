import React, { useState } from 'react';
import Card from '../Card/Card';

import styles from './Cards.module.css';

function Cards({ data, shuffle, setIsGameOver, setCurrentScore }) {
  return (
    <div className={styles.grid}>
      {data.map((item) => (
        <Card
          key={item.id}
          img={item.images.fixed_width.url}
          title={item.title}
          shuffle={shuffle}
          setIsGameOver={setIsGameOver}
          setCurrentScore={setCurrentScore}
        />
      ))}
    </div>
  );
}

export default Cards;
