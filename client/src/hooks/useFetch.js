import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    setLoading(true);

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "An Error Occurred");

      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const reFetch = () => {
    fetchData();
  };

  return { data, loading, setLoading, error, setError, reFetch };
};
