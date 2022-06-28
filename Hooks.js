import { useState, useEffect } from "react";
import axios from "axios";

/**
 * Hook that fetches market data from coingecko API with increment factor of 10.
 * @param currentPage - Number of pages to fetch.
 * @returns coins: [object], isLoading: boolean
 * @type {(currentPage : number) => { coins: [object], isLoading: boolean }}
 */
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
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getCoins();
  }, [currentPage]);

  return {
    coins,
    isLoading,
  };
}

// Adds commas and € sign to marketCap
function wrapMarketCap(marketCap) {
  if (marketCap) {
    const marketCapString = "€ " + marketCap;
    return marketCapString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

/**
 * Hook that fetches specific coin information from coingecko API.
 * @param {string} coinId - Id of the coin
 * @returns coin: object, isLoading: boolean
 * @type {(coinId: string) => { coin: object, isLoading: boolean }}
 */
export function useGeckoCoin(coinId) {
  const [coin, setCoin] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getCoin = () => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
      )
      .then((res) => {
        const {
          hashing_algorithm,
          description,
          links,
          genesis_date,
          market_data,
        } = res.data;

        setCoin({
          hashingAlgorithm: hashing_algorithm,
          description: description.en.replace(/(?:\r\n|\r|\n)/g, "<br>"), // Library react-native-render-html does not respect \n\r as line break
          homepage: links.homepage[0],
          genesisDate: genesis_date,
          marketCap: wrapMarketCap(market_data?.market_cap?.eur),
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getCoin();
  }, [coinId]);

  return {
    coin,
    isLoading,
  };
}
