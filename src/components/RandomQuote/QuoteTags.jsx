import React from 'react';
import styles from './QuoteTags.module.css';

const QuoteTags = props => {
  return (
    <ul className={styles['genre-quote']}>
      {props.tags.map((tag, index) => (
        <li key={index}>{tag}</li>
      ))}
    </ul>
  );
};

export default QuoteTags;
