import { View } from "react-native";
import NewsListItemDetails from "../components/NewsListItemDetails";

export default function Screen_NewsDetails() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: "grey",
      }}
    >
      <NewsListItemDetails />
    </View>
  );
}
