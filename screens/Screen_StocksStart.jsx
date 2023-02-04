import { Text, View } from "react-native";
import { useZustand } from "zustand";

export default function Screen_StocksStart() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        padding: 10,
        backgroundColor: "grey",
      }}
    >
      <Text>Screen Stocks Start</Text>
    </View>
  );
}
