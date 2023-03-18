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
      console.log("data1:");
      console.log(data1);
      const data2 = await fetchAllStocksData();
      console.log("data2:");
      console.log(data2);

      if (data1.status === "OK" && data2.status === "OK") {
        console.log("data1 and data2 are OK");
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
