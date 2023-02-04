import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { fetchError } from "../errors/errorMessages";

export const useZustand = create(
  devtools((set, get) => ({
    randomNewsData: [],
    fetchRandomNewsData: async () => {
      const tickersArray = [
        "AAPL",
        "MSFT",
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

      fetch(
        `https://api.polygon.io/v2/reference/news?ticker=${randomTickerName}&limit=10&apiKey=cpLItb5XLdMpk_pFumxU0ZsDap9ndidz`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          set((state) => ({
            ...state,
            randomNewsData: data.results,
          }));
        })
        .catch((_err) => {
          set((state) => ({
            ...state,
            randomNewsData: fetchError,
          }));
        });
    },
    selectedNews: {},
    changeSelectedNews: (newsID) => {
      set((state) => ({
        ...state,
        selectedNews: get().randomNewsData.find((item) => item.id === newsID),
      }));
    },
  }))
);
