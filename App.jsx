import { NativeRouter } from "react-router-native";
import { StatusBar } from "expo-status-bar";
import Main from "./navigation/Main";
import { useEffect } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen_NewsStart from "./screens/Screen_NewsStart";
import Screen_StocksStart from "./screens/Screen_StocksStart";
import Screen_NewsDetails from "./screens/Screen_NewsDetails";
import { useZustand } from "./store/store";

const Stack = createNativeStackNavigator();

export default function App() {
  const { fetchRandomNewsData } = useZustand();

  useEffect(() => {
    fetchRandomNewsData();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="News_Start">
        <Stack.Screen name="News_Start" component={Screen_NewsStart} />
        <Stack.Screen name="News_Details" component={Screen_NewsDetails} />
        <Stack.Screen name="Stocks_Start" component={Screen_StocksStart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
