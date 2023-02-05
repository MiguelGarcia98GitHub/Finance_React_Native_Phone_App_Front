import { FlatList, View } from "react-native";
import { useZustand } from "../store/store";
import { useEffect } from "react";
import StockListItem from "./StockListItem";

export default function StocksList() {
  const { fetchAllStocksData, allStocksData } = useZustand();

  useEffect(() => {
    fetchAllStocksData();
  }, []);

  return (
    <FlatList
      data={allStocksData}
      renderItem={({ item }) => <StockListItem item={item} />}
    />
  );
}
