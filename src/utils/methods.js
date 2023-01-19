import axios from "../../node_modules/axios/index";
import { useEffect, useState } from 'react';


// TODO: Return list of services from "/services" endpoint
const useFetch = ({ endpoint }) => {
  const baseUrl = 'http://localhost:2000'
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(baseUrl + endpoint);
        setData(response);
      } catch (error) {
        setError(error)
      }
      setLoading(false);
    }
    fetchData();
  }, [endpoint]);

  return {
    data,
    loading,
    error
  }
};

export default useFetch;