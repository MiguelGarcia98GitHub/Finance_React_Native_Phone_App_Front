import { Pressable, Text, View } from "react-native";
import { useZustand } from "../store/store";
import { useNavigation } from "@react-navigation/native";

export default function StockListItem({ item }) {
  const navigation = useNavigation();
  const { fetchSelectedStockData } = useZustand();

  return (
    <Pressable
      style={{
        backgroundColor: "rgba(16, 123, 169, 1)",
        borderRadius: 16,
        width: 250,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "baseline",
        borderWidth: 1,
        borderColor: "grey",
      }}
      onPress={() => {
        fetchSelectedStockData(item?.T).then((data) => {
          if (data.status === "OK") {
            navigation.navigate("Stock Detail");
          }
        });
      }}
    >
      <View>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          Ticker: {item?.T}
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: "white",
          }}
        >
          Closing Price: {item?.c?.toFixed(2)} $
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: "white",
          }}
        >
          Average Price: {item?.vw?.toFixed(2)} $
        </Text>
      </View>
    </Pressable>
  );
}
