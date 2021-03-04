import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData(url) {
      try {
        const req = await fetch(url);
        const json = await req.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        console.error(error)
        setError(error)
      }
    }

    fetchData(url);
  }, [url]);

  return {
    data,
    error,
    loading
  }
}
