import { useState } from "react";

// custom hook for fetching data
export const useFetch = async (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  try {
    setLoading(true);
    const response = await fetch(url, { method: "GET" });
    const result = await response.json();
    setData(result);
    return { data, loading };
  } catch (error) {
    console.log(error);
    return { loading, error };
  } finally {
    setLoading(false);
  }
};
