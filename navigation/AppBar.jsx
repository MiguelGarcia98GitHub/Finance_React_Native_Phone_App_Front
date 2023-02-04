import { View, Text, Pressable } from "react-native";
import { Link } from "react-router-native";

const AppBarItem = ({ children, to }) => {
  console.log("children:");
  console.log(children);
  console.log("to:");
  console.log(to);
  return (
    <Link
      to={to}
      component={Pressable}
      style={{ backgroundColor: "grey", margin: 10, padding: 8 }}
    >
      <Text>{children}</Text>
    </Link>
  );
};

export default function AppBar() {
  return (
    <View
      style={{
        backgroundColor: "orange",
        paddingVertical: 20,
        flexDirection: "row",
      }}
    >
      <AppBarItem to="/news_start">News_Start</AppBarItem>
      <AppBarItem to="/stocks_start">Stocks_Start</AppBarItem>
    </View>
  );
}
