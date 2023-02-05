import { FlatList } from "react-native";
import NewsListItem from "./NewsListItem";
import { useZustand } from "./../store/store";
import { useEffect } from "react";

export default function NewsList() {
  const { fetchRandomNewsData, randomNewsData } = useZustand();

  useEffect(() => {
    fetchRandomNewsData();
  }, []);

  return (
    <FlatList
      data={randomNewsData}
      renderItem={({ item }) => <NewsListItem item={item} />}
    />
  );
}
