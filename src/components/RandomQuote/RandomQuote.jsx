import React from 'react';
import { Link } from 'react-router-dom';
import QuoteTags from './QuoteTags';
import styles from './RandomQuote.module.css';

const RandomQuote = props => {
  return (
    <div className={styles['random-quote']}>
      <div className={styles.quote}>
        <p>"{props.quote.content}"</p>
      </div>
      <Link to={`/quotes?author=${props.quote.author}`}>
        <div className={styles.author}>
          <span>
            <p>{props.quote.author}</p>
            <QuoteTags tags={props.quote.tags} />
          </span>
          <span className="material-symbols-outlined">arrow_right_alt</span>
        </div>
      </Link>
    </div>
  );
};

export default RandomQuote;
