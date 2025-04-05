import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const API_KEY = "b63923486bf77dfd4b427bd1";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currency}`
        );
        if (!response.ok) throw new Error(`API Error: ${response.status}`);

        const result = await response.json();
        if (result && result.conversion_rates) {
          setData(result.conversion_rates);
        } else {
          throw new Error("Invalid API response");
        }
      } catch (error) {
        console.error("Error fetching currency data:", error);
        setError(error.message);
      }
    };

    fetchData();
  }, [currency]);

  return { data, error };
}

export default useCurrencyInfo;