import { View } from "react-native";

import {
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryTheme,
} from "victory-native";
import { useZustand } from "../store/store";

export default function DividendChart() {
  const { fetchSelectedDividendData, selectedDividendData } = useZustand();

  return (
    <View
      style={{
        height: "80%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5fcff",
      }}
    >
      <VictoryChart width={350} theme={VictoryTheme.material}>
        <VictoryBar
          data={[
            ...selectedDividendData.map((item) => {
              const dataItem = {
                date: item.record_date.substring(0, 7),
                payment: item.cash_amount,
              };

              return dataItem;
            }),
          ]}
          x="date"
          y="payment"
        />
      </VictoryChart>
    </View>
  );
}
