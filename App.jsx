import { NativeRouter } from "react-router-native";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen_NewsStart from "./screens/Screen_NewsStart";
import Screen_StocksStart from "./screens/Screen_StocksStart";
import Screen_NewsDetails from "./screens/Screen_NewsDetails";
import { useZustand } from "./store/store";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Screen_StockDetails from "./screens/Screen_StockDetails";
import Screen_DividendsSearch from "./screens/Screen_DividendsSearch";

const Stack = createNativeStackNavigator();

export default function App() {
  const Tab = createMaterialTopTabNavigator();

  function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="News_Start"
        style={{ width: "100%", height: 100, backgroundColor: "green" }}
      >
        <Tab.Screen name="News_Start" component={Screen_NewsStart} />
        <Tab.Screen name="Stocks_Start" component={Screen_StocksStart} />
        <Tab.Screen
          name="Dividends_Search"
          component={Screen_DividendsSearch}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen
          name="Tabs"
          component={MyTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="News_Start" component={Screen_NewsStart} />
        <Stack.Screen name="News_Details" component={Screen_NewsDetails} />
        <Stack.Screen name="Stocks_Start" component={Screen_StocksStart} />
        <Stack.Screen name="Stock_Details" component={Screen_StockDetails} />
        <Stack.Screen
          name="Dividends_Search"
          component={Screen_DividendsSearch}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
