import React, { useState, useEffect } from 'react';
import useFecth from '../hooks/useFecth';
import RandomQuote from '../components/RandomQuote';
import Loader from '../components/Loader';

const HomePage = () => {
  const [quote, setQuote] = useState(null);
  const { isLoading, error, sendRequest: fetchRandomQuote } = useFecth();

  useEffect(() => {
    const transformedQuotes = quotesObj => {
      setQuote({ id: quotesObj['_id'], content: quotesObj.content, author: quotesObj.author });
    };
    fetchRandomQuote('random', transformedQuotes);
  }, []);

  return (
    <section>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {quote && <RandomQuote quote={quote} />}
    </section>
  );
};

export default HomePage;
