import { Pressable, TextInput, View, Text } from "react-native";
import DividendChart from "../components/DividendsChart";
import { useZustand } from "../store/store";
import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

export default function Screen_DividendsSearch() {
  const [searchValue, setSearchValue] = useState();

  const { fetchSelectedDividendData, selectedDividendData } = useZustand();
  const debouncedInputValue = useDebounce(searchValue, 500);

  useEffect(() => {
    if (searchValue !== "") {
      fetchSelectedDividendData(searchValue);
    }
  }, [debouncedInputValue]);

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: "lightgreen",
      }}
    >
      <View
        style={{
          width: "100%",
          height: 100,
          backgroundColor: "lightblue",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            backgroundColor: "green",
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextInput
            placeholder="Search for a stock Ticker like MSFT, AAPL, etc."
            style={{
              borderColor: "grey",
              borderWidth: 1,
              paddingHorizontal: 10,
              paddingVertical: 4,
              marginHorizontal: 40,
              width: "80%",
              height: 30,
            }}
            onChangeText={(value) => {
              setSearchValue(value);
            }}
          />
        </View>
        {/* <View
          style={{
            width: "25%",
            height: "100%",
            backgroundColor: "orange",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pressable
            style={{
              width: "80%",
              backgroundColor: "teal",
              borderRadius: 20,
              paddingHorizontal: 12,
              paddingVertical: 6,
            }}
            onPress={() => {
              fetchSelectedDividendData(searchValue);
            }}
          >
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>
              Search
            </Text>
          </Pressable>
        </View> */}
      </View>

      {selectedDividendData && <DividendChart />}
    </View>
  );
}
