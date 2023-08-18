import React from 'react';

import styles from './StartScreen.module.css';

function StartScreen({ setGameDifficulty }) {
  return (
    <div className={styles.startScreen}>
      <div className={styles.container}>
        <h1>Welcome to Giphy Cards</h1>
        <p>Memory Game</p>
        <div className={styles.btns}>
          <button
            className={styles.btnEasy}
            onClick={() => setGameDifficulty(4)}
          >
            Easy
          </button>
          <button
            className={styles.btnMedium}
            onClick={() => setGameDifficulty(8)}
          >
            Medium
          </button>
          <button
            className={styles.btnHard}
            onClick={() => setGameDifficulty(12)}
          >
            Hard
          </button>
        </div>
      </div>
    </div>
  );
}

export default StartScreen;
