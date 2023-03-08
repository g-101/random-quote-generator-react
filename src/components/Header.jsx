import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  function refreshPage() {
    useNavigate('/');
  }

  return (
    <header className={styles.header}>
      <div>
        <Link to="/" onClick={refreshPage}>
          random
        </Link>
        <Link to="/" onClick={refreshPage} className="material-symbols-outlined">
          autorenew
        </Link>
      </div>
    </header>
  );
};

export default Header;
