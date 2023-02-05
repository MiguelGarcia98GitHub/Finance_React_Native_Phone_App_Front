import { Pressable, Text, View } from "react-native";
import { useZustand } from "../store/store";
import { useNavigation } from "@react-navigation/native";

export default function StockListItem({ item }) {
  const navigation = useNavigation();
  const { fetchSelectedStockData } = useZustand();

  return (
    <Pressable
      style={{
        width: 300,
        height: 80,
        marginTop: 10,
        backgroundColor: "pink",
      }}
      onPress={() => {
        fetchSelectedStockData(item.T);
        navigation.navigate("Stock_Details");
      }}
    >
      <View>
        <Text>Ticker: {item.T} </Text>
      </View>
      <View>
        <Text>Closing Price: {item.c} </Text>
      </View>
      <View>
        <Text>Average Price: {item.vw} </Text>
      </View>
    </Pressable>
  );
}
