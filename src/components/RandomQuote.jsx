import React from 'react';
import { Link } from 'react-router-dom';

const RandomQuote = props => {
  return (
    <div>
      {props.quote.content}
      {<Link to={`/quotes?author=${props.quote.author}`}>{props.quote.author}</Link>}
    </div>
  );
};

export default RandomQuote;
