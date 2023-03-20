import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { fetchError } from "../errors/errorMessages";
import { daysOfWeek } from "../helpers/daysOfWeek";
import { POLYGON_API_KEY } from "@env";

export const useZustand = create(
  devtools((set, get) => ({
    randomNewsData: [],
    fetchRandomNewsData: async () => {
      const tickersArray = [
        "AAPL",
        "MSFT",
        "AMZN",
        "GOOG",
        "BRK.A",
        "BRK.B",
        "TSLA",
        "NVDA",
        "META",
        "V",
        "JPM",
        "BAC",
      ];

      const randomTickerIndex = Math.floor(Math.random() * tickersArray.length);

      const randomTickerName = tickersArray[randomTickerIndex];

      const data = await fetch(
        `https://api.polygon.io/v2/reference/news?ticker=${randomTickerName}&limit=20&apiKey=${POLYGON_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          set((state) => ({
            ...state,
            randomNewsData: data.results,
          }));
          return data;
        })
        .catch((_err) => {
          set((state) => ({
            ...state,
            randomNewsData: fetchError,
          }));
        });

      return data;
    },
    selectedNews: {},
    changeSelectedNews: (newsID) => {
      set((state) => ({
        ...state,
        selectedNews: get().randomNewsData.find((item) => item.id === newsID),
      }));
    },
    allStocksData: [],
    fetchAllStocksData: async () => {
      let currentDate = new Date();
      const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];

      if (currentDayOfWeek === "Monday") {
        // API data works better within a 2 days space for stocks close data, also weekend dates wont provide any data.
        currentDate.setDate(currentDate.getDate() - 3);
      } else if (currentDayOfWeek === "Tuesday") {
        currentDate.setDate(currentDate.getDate() - 4);
      } else {
        currentDate.setDate(currentDate.getDate() - 2);
      }

      currentDate = currentDate.toISOString().split("T")[0];

      const data = await fetch(
        `https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/${currentDate}?adjusted=true&apiKey=${POLYGON_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          set((state) => ({
            // We will place some relevant stock names first (order randomized), then the rest of stocks in the list (also randomized)
            ...state,
            allStocksData: [
              ...data.results
                .filter(
                  (item) =>
                    item.T === "AAPL" ||
                    item.T === "MSFT" ||
                    item.T === "AMZN" ||
                    item.T === "GOOG" ||
                    item.T === "BRK.A" ||
                    item.T === "BRK.B" ||
                    item.T === "TSLA" ||
                    item.T === "NVDA" ||
                    item.T === "META" ||
                    item.T === "V" ||
                    item.T === "JPM" ||
                    item.T === "BAC"
                )
                .map((value) => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value),
              ...data.results
                .filter(
                  (item) =>
                    item.T !== "AAPL" ||
                    item.T !== "MSFT" ||
                    item.T !== "GOOG" ||
                    item.T !== "BRK.A" ||
                    item.T !== "BRK.B" ||
                    item.T !== "TSLA" ||
                    item.T !== "NVDA" ||
                    item.T !== "META" ||
                    item.T !== "V" ||
                    item.T !== "JPM" ||
                    item.T !== "BAC"
                )
                .map((value) => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value)
                .slice(
                  Math.floor(Math.random()),
                  Math.floor(Math.random() * 50)
                ),
            ],
          }));
          return data;
        })
        .catch((_err) => {
          set((state) => ({
            ...state,
            allStocksData: fetchError,
          }));
        });

      return data;
    },
    selectedStockData: null,
    fetchSelectedStockData: async (stockTicker) => {
      const data = await fetch(
        `https://api.polygon.io/v3/reference/tickers/${stockTicker}?apiKey=${POLYGON_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          set((state) => ({
            ...state,
            selectedStockData: data.results,
          }));
          return data;
        })
        .catch((_err) => {
          set((state) => ({
            ...state,
            selectedStockData: fetchError,
          }));
        });
      return data;
    },

    selectedDividendData: null,
    fetchSelectedDividendData: async (stockTicker) => {
      fetch(
        `https://api.polygon.io/v3/reference/dividends?ticker=${stockTicker}&limit=4&apiKey=${POLYGON_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          set((state) => ({
            ...state,
            selectedDividendData: data.results.reverse(),
          }));
        })
        .catch((_err) => {
          set((state) => ({
            ...state,
            selectedDividendData: fetchError,
          }));
        });
    },
    selectedForexData: null,
    fetchForexData: async (forex1stCurrency, forex2ndCurrency) => {
      fetch(
        `https://api.polygon.io/v2/aggs/ticker/C:${forex1stCurrency}${forex2ndCurrency}/prev?adjusted=true&apiKey=${POLYGON_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          set((state) => ({
            ...state,
            selectedForexData: data.results[0],
          }));
        })
        .catch((_err) => ({
          ...state,
          selectedForexData: fetchError,
        }));
    },
  }))
);
