import { useState, useEffect } from "react";
import { View, Text, Alert } from "react-native";
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

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "20%",

          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <SelectDropdown
          defaultButtonText="EUR"
          buttonStyle={{ width: "40%", backgroundColor: "#6082B6" }}
          buttonTextStyle={{
            fontSize: 18,
            fontWeight: "bold",
            color: "white",
          }}
          data={["GBP", "EUR", "USD"]}
          onSelect={(value) => {
            if (value === forexCurrencies.forex2ndCurrency) {
              Alert.alert("Please select different currencies");
              return;
            }
            setForexCurrencies({
              ...forexCurrencies,
              forex1stCurrency: value,
            });
          }}
        />
        <SelectDropdown
          defaultButtonText="USD"
          buttonStyle={{ width: "40%", backgroundColor: "#6082B6" }}
          buttonTextStyle={{
            fontSize: 18,
            fontWeight: "bold",
            color: "white",
          }}
          data={["GBP", "EUR", "USD"]}
          onSelect={(value) => {
            if (value === forexCurrencies.forex1stCurrency) {
              Alert.alert("Please select different currencies");
              return;
            }
            setForexCurrencies({
              ...forexCurrencies,
              forex2ndCurrency: value,
            });
          }}
        />
      </View>
      <View
        style={{
          width: "100%",
          marginTop: "45%",
          height: "20%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {selectedForexData?.c && (
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            1 {forexCurrencies?.forex1stCurrency} equals{" "}
            {selectedForexData?.c?.toFixed(2)}{" "}
            {forexCurrencies.forex2ndCurrency}
          </Text>
        )}
      </View>
    </View>
  );
}
