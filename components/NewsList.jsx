import { FlatList, ScrollView } from "react-native";
import NewsListItem from "./NewsListItem";
import { useNavigation } from "@react-navigation/native";
import { useZustand } from "./../store/store";

export default function NewsList() {
  const { randomNewsData } = useZustand();
  const navigation = useNavigation();
  console.log(navigation);

  return (
    <FlatList
      data={randomNewsData}
      renderItem={({ item }) => <NewsListItem item={item} />}
    />
  );
}
