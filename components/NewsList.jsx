import { Dimensions, FlatList } from "react-native";
import NewsListItem from "./NewsListItem";
import { useZustand } from "./../store/store";
import { useEffect } from "react";

export default function NewsList() {
  const { fetchRandomNewsData, randomNewsData } = useZustand();
  const deviceWidth = Dimensions.get("screen").width;
  const deviceHeight = Dimensions.get("screen").height;

  useEffect(() => {
    fetchRandomNewsData();
  }, []);

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
