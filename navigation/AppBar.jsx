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
      style={{ backgroundColor: "grey", padding: 10 }}
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
        padding: 20,
        flexDirection: "row",
      }}
    >
      <AppBarItem to="/news_start">News_Start - </AppBarItem>
      <AppBarItem to="/stocks_start">Home</AppBarItem>
    </View>
  );
}
