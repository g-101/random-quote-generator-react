import React from 'react';

const RandomQuote = props => {
  return (
    <div>
      {props.quote.content}
      {<a href="#">{props.quote.author}</a>}
    </div>
  );
};

export default RandomQuote;
