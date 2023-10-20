import { useEffect, useState } from "react";
import conf from '../conf/conf'

function useCurrencyInfo(currency) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `${conf.apiUrl}` + `${currency}.json`,
      console.log('url=', `${conf.apiUrl} + ${currency}.json`)
    )
      .then((response) => response.json())
      .then((data) => setData(data[currency]))
      .catch((error) => console.error("Error fetching currency info:", error));
  }, [currency]);

  return data !== null ? data : null;
}

export default useCurrencyInfo;
