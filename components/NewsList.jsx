import { Dimensions, FlatList } from "react-native";
import NewsListItem from "./NewsListItem";
import { useZustand } from "./../store/store";

export default function NewsList() {
  const { randomNewsData } = useZustand();
  const deviceWidth = Dimensions.get("screen").width;

  return (
    <FlatList
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
        width: deviceWidth,
      }}
      data={randomNewsData}
      renderItem={({ item }) => <NewsListItem item={item} />}
    />
  );
}
