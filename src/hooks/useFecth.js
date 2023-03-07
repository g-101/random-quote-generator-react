import axios from 'axios';
import { useState, useCallback } from 'react';

const useFecth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (path, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(`https://api.quotable.io/${path}`);

      console.log('data', data);
      applyData(data);
    } catch (error) {
      setError(error.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useFecth;
