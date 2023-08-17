import React from 'react';

import styles from './Card.module.css';

function Card({ img, title }) {
  return (
    <div className={styles.card}>
      <img src={img} alt={title} className={styles.img} />
    </div>
  );
}

export default Card;
