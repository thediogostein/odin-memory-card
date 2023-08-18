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
          <p className={styles.message}>
            {hasWonTheGame ? 'You win!' : 'You lose!'}
          </p>
        </div>

        <button
          className={`${styles.button} ${
            hasWonTheGame ? styles.btnWin : styles.btnLose
          }`}
          onClick={handleClick}
        >
          Play again?
        </button>
      </article>
    </>
  );
}

export default Modal;
