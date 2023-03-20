import { TextInput, View, Text, Dimensions } from "react-native";
import DividendChart from "../components/DividendsChart";
import { useZustand } from "../store/store";
import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

export default function Screen_DividendsSearch() {
  const [searchValue, setSearchValue] = useState();

  const { fetchSelectedDividendData, selectedDividendData } = useZustand();
  const deviceWidth = Dimensions.get("window").width;
  const deviceHeight = Dimensions.get("window").height;
  const debouncedInputValue = useDebounce(searchValue, 500);

  useEffect(() => {
    if (searchValue) {
      fetchSelectedDividendData(searchValue);
    }
  }, [debouncedInputValue]);

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
          height: deviceHeight * 0.1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Search for a stock Ticker like MSFT, AAPL, etc."
          style={{
            borderRadius: 20,
            borderColor: "grey",
            borderWidth: 1,
            paddingHorizontal: 12,
            paddingVertical: 6,
            marginHorizontal: 40,
            width: "80%",
            height: 30,
          }}
          onChangeText={(value) => {
            setSearchValue(value);
          }}
        />
      </View>
      <View
        style={{
          width: "100%",
          height: deviceHeight * 0.12,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {selectedDividendData && (
          <>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Ticker: {selectedDividendData[0]?.ticker}
              </Text>
            </View>
            <View>
              <Text>
                Dividends per Year: {selectedDividendData[0]?.frequency}
              </Text>
            </View>
          </>
        )}
      </View>

      {selectedDividendData && <DividendChart />}
    </View>
  );
}
