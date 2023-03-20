import { StatusBar } from "expo-status-bar";
import { Dimensions } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen_DividendsSearch from "./screens/Screen_DividendsSearch";
import Screen_ForexConverter from "./screens/Screen_ForexConverter";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import NewsList from "./components/NewsList";
import NewsListItemDetails from "./components/NewsListItemDetails";
import LoadingScreen from "./components/LoadingScreen";
import StocksList from "./components/StocksList";
import StockListItemDetails from "./components/StockListItemDetails";

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

  function StocksStack() {
    return (
      <Stack.Navigator
        screenOptions={
          {
            // headerShown: false,
          }
        }
      >
        <Stack.Screen name="StocksList" component={StocksList} />
        <Stack.Screen name="Stock Detail" component={StockListItemDetails} />
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

        {/* <Tab.Screen
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
        /> */}
        <Tab.Screen
          name="Stocks"
          component={StocksStack}
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
