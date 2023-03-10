import { Text, View } from "react-native";
import { useZustand } from "../store/store";

export default function NewsListItemDetails() {
  const { selectedNews } = useZustand();

  return (
    <>
      {Object.keys(selectedNews).length > 0 && (
        <View style={{ backgroundColor: "lime", width: 300, height: 500 }}>
          <Text>NewsListItemDetails</Text>
          <Text>Title: {selectedNews.title} </Text>
        </View>
      )}
    </>
  );
}
