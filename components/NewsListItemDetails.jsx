import { Text, View, Image, ScrollView } from "react-native";
import { useZustand } from "../store/store";

export default function NewsListItemDetails() {
  const { selectedNews } = useZustand();
  console.log(selectedNews);

  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {Object.keys(selectedNews).length > 0 && (
        <View
          style={{
            backgroundColor: "rgba(16, 123, 169, 1)",
            borderRadius: 16,
            width: "80%",
            marginVertical: 10,
            paddingVertical: 10,
            paddingHorizontal: 20,
            justifyContent: "center",
            alignItems: "baseline",
            borderWidth: 1,
            borderColor: "grey",
          }}
        >
          <View
            style={{
              width: "100%",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: "100%",
                height: 165,
                marginTop: "2%",
                borderRadius: 10,
              }}
              source={{ uri: selectedNews.image_url }}
            />
          </View>
          <Text
            style={{
              marginTop: "3%",
              color: "white",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            {selectedNews.title}{" "}
          </Text>
          <Text> {JSON.stringify(selectedNews)} </Text>
        </View>
      )}
    </ScrollView>
  );
}
