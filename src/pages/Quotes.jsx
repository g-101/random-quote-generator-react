import React, { useState, useEffect } from 'react';
import useFecth from '../hooks/useFecth';
import useQuery from '../hooks/useQuery';
import QuotesByAuthor from '../components/QuotesByAuthor';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const { isLoading, error, sendRequest: fetchQuotes } = useFecth();
  let query = useQuery();

  const fetchQuotesByAuthor = () => {
    const transformedQuotes = quotesObj => {
      let loadedQuotes = [];

      loadedQuotes = quotesObj.results.map(item => {
        return { id: item['_id'], content: item.content, author: item.author };
      });
      setQuotes(loadedQuotes);
    };

    fetchQuotes(`quotes?author=${query.get('author')}`, transformedQuotes);
  };

  useEffect(() => {
    console.log('useffect running');
    fetchQuotesByAuthor();
  }, []);

  if (quotes.length) {
    return <QuotesByAuthor quotes={quotes} />;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
};

export default Quotes;
