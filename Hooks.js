import { useState, useEffect } from "react";
import axios from "axios";

export function useGeckoMarkets(currentPage) {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCoins = () => {
    setIsLoading(true);
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false`
      )
      .then((res) => {
        const sanitizedCoins = res.data.map(
          ({ id, symbol, name, image, current_price, high_24h, low_24h }) => ({
            id,
            symbol,
            name,
            image,
            current_price,
            high_24h,
            low_24h,
          })
        );
        setCoins([...coins, ...sanitizedCoins]);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    getCoins();
  }, [currentPage]);

  return {
    coins,
    isLoading,
  };
}
