import { Pressable, TextInput, View, Text } from "react-native";
import DividendChart from "../components/DividendsChart";
import { useZustand } from "../store/store";
import { useState } from "react";

export default function Screen_DividendsSearch() {
  const [searchValue, setSearchValue] = useState();

  const { fetchSelectedDividendData, selectedDividendData } = useZustand();

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
          height: "15%",
          backgroundColor: "lightblue",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            backgroundColor: "green",
            height: "100%",
            width: "75%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextInput
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
        <View
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
        </View>
        {/* <View style={{ height: 500, height: "25%", backgroundColor: "orange" }}>
          <Pressable style={{ padding: 20, backgroundColor: "lightgreen" }}>
            <Text></Text>
          </Pressable>
        </View> */}
      </View>

      {Object.keys(selectedDividendData).length > 0 && <DividendChart />}
    </View>
  );
}
