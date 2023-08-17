import React from 'react';
import Card from '../Card/Card';

import styles from './Cards.module.css';

function Cards({ data }) {
  console.log(data);
  return (
    <div className={styles.grid}>
      {data.map((item) => (
        <Card
          key={item.id}
          img={item.images.fixed_width.url}
          title={item.title}
        />
      ))}
    </div>
  );
}

export default Cards;
