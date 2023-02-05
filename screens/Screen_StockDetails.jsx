import { View } from "react-native";
import StockListItemDetails from "../components/StockListItemDetails";

export default function Screen_StockDetails() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: "grey",
      }}
    >
      <StockListItemDetails />
    </View>
  );
}
