import React from 'react';

import styles from './Modal.module.css';

function Modal({
  hasWonTheGame,
  setIsGameOver,
  setCurrentScore,
  setBestScore,
}) {
  function handleClick() {
    if (hasWonTheGame) {
      setBestScore(0);
    }
    setIsGameOver(false);
    setCurrentScore(0);
  }

  return (
    <>
      <div className={styles.backdrop}></div>
      <article
        className={`${styles.modal} ${
          hasWonTheGame ? styles.win : styles.lose
        }`}
      >
        <header>
          <h2>{hasWonTheGame ? 'Congratulations' : 'Games over'}</h2>
        </header>
        <div>
          <p>{hasWonTheGame ? 'you win' : 'you lose'}</p>
        </div>
        <footer>
          <button className={styles.button} onClick={handleClick}>
            Play again?
          </button>
        </footer>
      </article>
    </>
  );
}

export default Modal;
