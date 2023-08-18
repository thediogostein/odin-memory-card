import React from 'react';

import styles from './StartScreen.module.css';

function StartScreen({ setGameDifficulty }) {
  return (
    <div className={styles.startScreen}>
      <h1>Giphy Cards</h1>
      <p>Memory Game</p>
      <div className={styles.btns}>
        <button onClick={() => setGameDifficulty(4)}>Easy</button>
        <button onClick={() => setGameDifficulty(8)}>Medium</button>
        <button onClick={() => setGameDifficulty(12)}>Hard</button>
      </div>
    </div>
  );
}

export default StartScreen;
