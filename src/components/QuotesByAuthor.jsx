import React from 'react';

const QuotesByAuthor = props => {
  return (
    <div>
      <h1>{props.quotes[0].author}</h1>
      <ul>
        {props.quotes.map(quote => (
          <li key={quote.id}>{quote.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuotesByAuthor;
