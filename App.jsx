import { NativeRouter } from "react-router-native";
import { StatusBar } from "expo-status-bar";
import Main from "./navigation/Main";
import { useStore } from "./store/store";
import { useEffect } from "react";

export default function App() {
  const { fetchRandomNewsData } = useStore();

  useEffect(() => {
    fetchRandomNewsData();
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <NativeRouter>
        <Main />
      </NativeRouter>
    </>
  );
}
