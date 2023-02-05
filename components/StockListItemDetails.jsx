import { Text, View, Image } from "react-native";
import { useZustand } from "../store/store";
import { useEffect } from "react";

export default function StockListItemDetails() {
  const { selectedStockData } = useZustand();

  return (
    <View style={{ width: 340, height: 400, backgroundColor: "dodgerblue" }}>
      <View>
        <Text>
          Name:
          {Object.keys(selectedStockData).length > 0 && selectedStockData.name}
        </Text>
      </View>
      <View>
        {Object.keys(selectedStockData).length > 0 && (
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri: `${selectedStockData.branding.icon_url}?apiKey=cpLItb5XLdMpk_pFumxU0ZsDap9ndidz`,
            }}
          />
        )}
      </View>
      <View>
        <Text>
          Location:
          {Object.keys(selectedStockData).length > 0 &&
            selectedStockData.locale}
        </Text>
      </View>
      <View>
        <Text>
          Description:
          {Object.keys(selectedStockData).length > 0 &&
            selectedStockData.description}
        </Text>
      </View>
    </View>
  );
}
