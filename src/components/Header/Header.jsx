import React from 'react';

import styles from './Header.module.css';

function Header({ currentScore }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerDiv}>
        <h1>Memory Game</h1>
        <p>Built by Diogo Stein</p>
        <p>Current Score: {currentScore}</p>
      </div>
    </header>
  );
}

export default Header;
