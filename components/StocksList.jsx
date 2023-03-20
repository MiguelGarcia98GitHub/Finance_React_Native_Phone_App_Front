import { Dimensions, FlatList } from "react-native";
import { useZustand } from "../store/store";
import StockListItem from "./StockListItem";

export default function StocksList() {
  const { allStocksData } = useZustand();
  const deviceWidth = Dimensions.get("screen").width;

  return (
    <FlatList
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
        width: deviceWidth,
      }}
      data={allStocksData}
      renderItem={({ item }) => <StockListItem item={item} />}
    />
  );
}
