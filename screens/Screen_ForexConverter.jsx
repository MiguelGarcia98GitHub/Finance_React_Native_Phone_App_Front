import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { useZustand } from "../store/store";

export default function Screen_ForexConverter() {
  const { selectedForexData, fetchForexData } = useZustand();

  const [forexCurrencies, setForexCurrencies] = useState({
    forex1stCurrency: "EUR",
    forex2ndCurrency: "USD",
  });

  useEffect(() => {
    fetchForexData(
      forexCurrencies.forex1stCurrency,
      forexCurrencies.forex2ndCurrency
    );
  }, [forexCurrencies]);

  console.log("forexCurrencies:");

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: "lightblue",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "20%",
          backgroundColor: "grey",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <SelectDropdown
          defaultButtonText="EUR"
          buttonStyle={{ width: "40%" }}
          buttonTextStyle={{ fontSize: 13, fontWeight: "bold" }}
          data={["GBP", "EUR", "USD"]}
          onSelect={(value) => {
            setForexCurrencies({
              ...forexCurrencies,
              forex1stCurrency: value,
            });
          }}
        />
        <SelectDropdown
          defaultButtonText="USD"
          buttonStyle={{ width: "40%" }}
          buttonTextStyle={{ fontSize: 13, fontWeight: "bold" }}
          data={["GBP", "EUR", "USD"]}
          onSelect={(value) => {
            setForexCurrencies({
              ...forexCurrencies,
              forex2ndCurrency: value,
            });
          }}
        />
      </View>
      <View style={{ width: "100%", height: "50%", backgroundColor: "orange" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Currently 1 {forexCurrencies.forex1stCurrency} equals
          {selectedForexData.c} {forexCurrencies.forex2ndCurrency}
        </Text>
      </View>
    </View>
  );
}
