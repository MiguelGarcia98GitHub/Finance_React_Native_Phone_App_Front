import { Redirect, Route, Switch } from "react-router-native";
import Screen_NewsStart from "../screens/Screen_NewsStart";
import Screen_StocksStart from "../screens/Screen_StocksStart";
import { View } from "react-native";
import AppBar from "./AppBar";

export default function Main() {
  return (
    <View style={{ flex: 1, backgroundColor: "teal" }}>
      <AppBar />
      <Switch>
        <Route path="/news_start" exact>
          <Screen_NewsStart />
        </Route>
        <Route path="/stocks_start" exact>
          <Screen_StocksStart />
        </Route>
        <Redirect to="/news_start" />
      </Switch>
    </View>
  );
}
