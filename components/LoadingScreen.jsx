import { ActivityIndicator, View } from "react-native";
import { useZustand } from "../store/store";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function LoadingScreen() {
  const { fetchRandomNewsData, fetchAllStocksData } = useZustand();
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchAllData() {
      const data1 = await fetchRandomNewsData();

      const data2 = await fetchAllStocksData();

      if (data1.status === "OK" && data2.status === "OK") {
        navigation.navigate("Tabs");
      }
    }
    fetchAllData();
  }, []);

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ActivityIndicator size="large" color="dodgerblue" />
    </View>
  );
}
