import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchData = (initialUrl, initialData) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        if (mounted) setData(result.data)
      } catch (error) {
        if (mounted) setIsError(true);
      }

      if (mounted) setIsLoading(false);
    };

    fetchData();

    return () => {
      mounted = false;
    }
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
};