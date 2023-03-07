import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RandomQuote.module.css';

const RandomQuote = props => {
  return (
    <div className={styles['random-quote']}>
      <div className={styles.quote}>
        <p>"{props.quote.content}"</p>
      </div>
      <Link to={`/quotes?author=${props.quote.author}`} className={styles.author}>
        <p>{props.quote.author}</p>
        <span to={`/quotes?author=${props.quote.author}`} className="material-symbols-outlined">
          arrow_right_alt
        </span>
        {/* <span className="material-symbols-outlined">autorenew</span> */}
      </Link>
    </div>
  );
};

export default RandomQuote;
