import { Dimensions, View } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import { useZustand } from "../store/store";

export default function DividendChart() {
  const { selectedDividendData } = useZustand();
  const deviceWidth = Dimensions.get("window").width;
  const deviceHeight = Dimensions.get("window").height;

  return (
    <View
      style={{
        height: deviceHeight * 0.65,
        justifyContent: "center",
        alignItems: "center",

        paddingHorizontal: deviceWidth * 0.05,
      }}
    >
      <VictoryChart width={deviceWidth * 0.9} theme={VictoryTheme.material}>
        <VictoryBar
          animate={{
            duration: 500,
          }}
          data={[
            ...selectedDividendData.map((item) => {
              const dataItem = {
                date: item.record_date.substring(0, 7),
                payment: `${item.cash_amount} $ `,
              };

              return dataItem;
            }),
          ]}
          x="date"
          y="payment"
          style={{
            data: {
              fill: "rgba(16, 123, 169, 1)",
              borderRadius: 100,
            },
          }}
        />
      </VictoryChart>
    </View>
  );
}
