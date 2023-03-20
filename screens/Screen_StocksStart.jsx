import { Text, View } from "react-native";
import { useZustand } from "./../store/store";
import { useEffect } from "react";
import StocksList from "../components/StocksList";

export default function Screen_StocksStart() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
      }}
    >
      <StocksList />
    </View>
  );
}
