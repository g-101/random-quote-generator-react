import React from 'react';
import styles from './QuotesByAuthor.module.css';

const QuotesByAuthor = props => {
  return (
    <div className={styles['quotes-author']}>
      <h1>{props.quotes[0].author}</h1>
      <ul className={styles['quotes-list']}>
        {props.quotes.map(quote => (
          <li key={quote.id}>"{quote.content}"</li>
        ))}
      </ul>
    </div>
  );
};

export default QuotesByAuthor;
