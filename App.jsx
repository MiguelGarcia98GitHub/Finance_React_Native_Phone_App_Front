import { NativeRouter } from "react-router-native";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Dimensions, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen_NewsStart from "./screens/Screen_NewsStart";
import Screen_StocksStart from "./screens/Screen_StocksStart";
import Screen_NewsDetails from "./screens/Screen_NewsDetails";
import { useZustand } from "./store/store";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Screen_StockDetails from "./screens/Screen_StockDetails";
import Screen_DividendsSearch from "./screens/Screen_DividendsSearch";
import Screen_ForexConverter from "./screens/Screen_ForexConverter";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TextSize } from "victory-native";
import NewsList from "./components/NewsList";
import NewsListItemDetails from "./components/NewsListItemDetails";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const deviceWidth = Dimensions.get("screen").width;
  const deviceHeight = Dimensions.get("screen").height;

  function NewsStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="NewsList" component={NewsList} />
        <Stack.Screen name="News Detail" component={NewsListItemDetails} />
      </Stack.Navigator>
    );
  }

  function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="News"
        screenOptions={{
          unmountOnBlur: true,

          tabBarActiveBackgroundColor: "#E2DFD2",
          tabBarActiveTintColor: "black",
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: "bold",
          },
        }}
      >
        <Tab.Screen
          name="News"
          component={NewsStack}
          options={{
            tabBarLabel: "News",
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <MaterialCommunityIcons
                  name="newspaper-variant-multiple-outline"
                  color={"grey"}
                  size={focused ? 28 : 24}
                />
              );
            },
          }}
        />

        <Tab.Screen
          name="Stocks"
          component={Screen_StocksStart}
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <MaterialCommunityIcons
                  name="cash"
                  color={"green"}
                  size={focused ? 28 : 24}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Dividends"
          component={Screen_DividendsSearch}
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <MaterialCommunityIcons
                  name="chart-bar"
                  color={"dodgerblue"}
                  size={focused ? 28 : 24}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Currency Converter"
          component={Screen_ForexConverter}
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <MaterialCommunityIcons
                  name="currency-usd"
                  color={"green"}
                  size={focused ? 28 : 24}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Tabs"
          component={MyTabs}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
