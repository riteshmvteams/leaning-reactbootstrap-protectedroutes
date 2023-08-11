import { useState } from "react";

// custom hook for fetching data
export const useFetch = async (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [err, setErr] = useState("");
  try {
    setLoading(true);
    const response = await fetch(url, { method: "GET" });
    if (!response.ok) {
      throw new Error("Something Went wrong Please try Again");
    }
    const result = await response.json();
    setData(result);
    return { data, loading, err };
  } catch (error) {
    console.log(error);
    setErr(error.message);
    return { loading, err, data };
  } finally {
    setLoading(false);
  }
};
