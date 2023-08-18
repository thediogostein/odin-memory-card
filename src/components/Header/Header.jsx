import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import styles from './Header.module.css';

function Header({ currentScore, bestScore }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerDiv}>
        <h1 className={styles.title}>Memory Game</h1>
        <a className={styles.credits}>
          Built by Diogo Stein <FontAwesomeIcon icon={faGithub} />
        </a>
        <div className={styles.scoreContainer}>
          <p className={styles.currentScore}>Current Score: {currentScore}</p>
          <p className={styles.bestScore}>Best Score: {bestScore}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
