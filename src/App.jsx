import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';

function App() {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRandomQuoteHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await axios.get('https://quote-garden.onrender.com/api/v3/quotes/random');
      const response = data.data;

      const transformedQuote = response.map(quoteData => {
        return {
          id: quoteData._id,
          quoteText: quoteData.quoteText,
          quoteAuthor: quoteData.quoteAuthor,
        };
      });
      setQuote(transformedQuote);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchRandomQuoteHandler();

    // return () => {
    //   second;
    // };
  }, [fetchRandomQuoteHandler]);

  // console.log('quotes', quotes);

  let content = <p>Found no movies.</p>;

  if (quote) {
    content = (
      <div>
        <p>"{quote['0'].quoteText}"</p>
        <a href="#">{quote['0'].quoteAuthor}</a>
      </div>
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }
  return (
    <>
      <section>
        <button onClick={fetchRandomQuoteHandler}>Random</button>
      </section>
      <section>{content}</section>
    </>
  );
}

export default App;
