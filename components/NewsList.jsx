import { FlatList, ScrollView } from "react-native";
import { useStore } from "./../store/store";
import NewsListItem from "./NewsListItem";

export default function NewsList() {
  const { randomNewsData } = useStore();

  return (
    <FlatList
      data={randomNewsData}
      renderItem={NewsListItem}
      keyExtractor={(item) => item.id}
    ></FlatList>
  );
}
