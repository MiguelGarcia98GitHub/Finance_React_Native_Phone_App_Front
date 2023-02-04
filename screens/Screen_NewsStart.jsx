import { View } from "react-native";
import NewsList from "./../components/NewsList";

export default function Screen_NewsStart() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: "grey",
      }}
    >
      <NewsList />
    </View>
  );
}
