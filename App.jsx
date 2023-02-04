import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useStore } from "./store/store";
import { useEffect } from "react";
import NewsList from "./components/NewsList";

export default function App() {
  const { fetchRandomNewsData } = useStore();

  useEffect(() => {
    fetchRandomNewsData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Finance React Native App - Miguel Garcia</Text>
      <NewsList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
