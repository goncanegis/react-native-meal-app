import {useState, useEffect} from 'react';
import axios from 'axios';

function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data: responseData} = await axios.get(url);
        setData(responseData);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };
    fetchData();
  }, [url]);

  return {error, loading, data};
}

export default useFetch;
