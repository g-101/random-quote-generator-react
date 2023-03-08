import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link to="/">random</Link>
        <span className="material-symbols-outlined">autorenew</span>
      </div>
    </header>
  );
};

export default Header;
