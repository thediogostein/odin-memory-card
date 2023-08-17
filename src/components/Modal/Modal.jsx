import React from 'react';

import styles from './Modal.module.css';

function Modal({ setIsGameOver, setCurrentScore }) {
  function handleClick() {
    setIsGameOver(false);
    setCurrentScore(0);
  }

  return (
    <>
      <div className={styles.backdrop}></div>
      <article className={styles.modal}>
        <header>
          <h2>Game Over</h2>
        </header>
        <div>
          <p>You lost</p>
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
