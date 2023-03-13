import React, { useState, useEffect } from 'react';
import useFecth from '../hooks/useFecth';
import useQuery from '../hooks/useQuery';
import QuotesByAuthor from '../components/QuotesByAuthor';
import Loader from '../components/Loader';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const { isLoading, error, sendRequest: fetchQuotes } = useFecth();
  let query = useQuery();

  useEffect(() => {
    const transformedQuotes = quotesObj => {
      let loadedQuotes = [];

      loadedQuotes = quotesObj.results.map(item => {
        return { id: item['_id'], content: item.content, author: item.author };
      });
      setQuotes(loadedQuotes);
    };

    fetchQuotes(`quotes?author=${query.get('author')}`, transformedQuotes);
  }, []);

  return (
    <section>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {quotes.length > 0 && <QuotesByAuthor quotes={quotes} />}
    </section>
  );
};

export default Quotes;
