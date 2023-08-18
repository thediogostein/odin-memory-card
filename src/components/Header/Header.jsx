import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import styles from './Header.module.css';

function Header({
  currentScore,
  bestScore,
  numberOfWins,
  numberOfLoses,
  resetGame,
}) {
  return (
    <header className={styles.header}>
      <div className={styles.headerDiv}>
        <div>
          <h1 className={styles.title}>Memory Game</h1>
          <a
            href="https://github.com/thediogostein/odin-memory-card"
            target="_blank"
            rel="noreferrer"
            className={styles.credits}
          >
            Built by Diogo Stein <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className={styles.scoreContainer}>
          <div className={styles.scores}>
            <p className={styles.currentScore}>Current Score: {currentScore}</p>
            <p className={styles.bestScore}>Best Score: {bestScore}</p>
          </div>
          <div className={styles.totalScore}>
            <p>
              Wins: {numberOfWins} | Loses: {numberOfLoses}
            </p>
          </div>
        </div>
      </div>
      <div className={` wrapper`}>
        <button className={styles.restartBtn} onClick={() => resetGame()}>
          Restart game
        </button>
      </div>
    </header>
  );
}

export default Header;
