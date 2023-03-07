import React from 'react';
import { useState, useEffect } from 'react';
import useFecth from '../hooks/useFecth';
import RandomQuote from '../components/RandomQuote';

const HomePage = () => {
  const [quote, setQuote] = useState(null);
  const { isLoading, error, sendRequest: fetchRandomQuote } = useFecth();

  const fetchNewQuote = () => {
    const transformedQuotes = quotesObj => {
      const loadedQuotes = [];

      loadedQuotes.push({ id: quotesObj['_id'], content: quotesObj.content });
      setQuote({ id: quotesObj['_id'], content: quotesObj.content, author: quotesObj.author });
    };
    fetchRandomQuote('random', transformedQuotes);
  };

  useEffect(() => {
    console.log('useffect running');
    fetchNewQuote();
  }, []);

  let content = <p>Found no movies.</p>;

  if (quote) {
    content = <RandomQuote quote={quote} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }
  return (
    <>
      <div>
        <button onClick={fetchNewQuote}>Random</button>
      </div>
      <section>{content}</section>
    </>
  );
};

export default HomePage;
