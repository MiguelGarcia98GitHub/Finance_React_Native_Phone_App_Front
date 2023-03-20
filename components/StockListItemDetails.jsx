import { Text, View, Image, ScrollView } from "react-native";
import { useZustand } from "../store/store";
import { POLYGON_API_KEY } from "@env";

export default function StockListItemDetails() {
  const { selectedStockData } = useZustand();

  return (
    <ScrollView
      contentContainerStyle={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 40,
        paddingHorizontal: 30,
      }}
    >
      <View
        style={{
          backgroundColor: "rgba(16, 123, 169, 1)",
          borderRadius: 16,
          width: "100%",
          marginVertical: 10,
          paddingVertical: 20,
          paddingHorizontal: 20,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "grey",
        }}
      >
        <View>
          {Object.keys(selectedStockData).length > 0 && (
            <Image
              style={{ width: 100, height: 100, borderRadius: 20 }}
              source={{
                uri: `${selectedStockData.branding.icon_url}?apiKey=${POLYGON_API_KEY}`,
              }}
            />
          )}
        </View>

        <View
          style={{
            marginTop: "3%",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "white",
            }}
          >
            {selectedStockData && selectedStockData.name}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Ticker: {selectedStockData && selectedStockData.ticker}
          </Text>
        </View>
        <View
          style={{
            width: "100%",
          }}
        >
          <View
            style={{
              marginTop: "1%",
            }}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              {selectedStockData && selectedStockData.description}
            </Text>
          </View>
          <View
            style={{
              marginTop: "1%",
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              Market Cap:{" "}
              {(
                selectedStockData && selectedStockData.market_cap / 1000000
              ).toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              M $
            </Text>
          </View>
          <View
            style={{
              marginTop: "1%",
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              Primary Exchange:{" "}
              {selectedStockData && selectedStockData.primary_exchange}
            </Text>
          </View>
          <View
            style={{
              marginTop: "1%",
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              Number of employees:{" "}
              {selectedStockData && selectedStockData.total_employees}
            </Text>
          </View>
          <View
            style={{
              marginTop: "1%",
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              Headquarters:{" "}
              {selectedStockData && selectedStockData.address.address1} (
              {selectedStockData &&
                selectedStockData.address.city.charAt(0).toUpperCase() +
                  selectedStockData.address.city.slice(1).toLowerCase()}
              )
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
