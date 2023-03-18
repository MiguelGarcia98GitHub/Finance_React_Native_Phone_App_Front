import { useNavigation } from "@react-navigation/native";
import { Image, Text, Pressable, View, Linking } from "react-native";
import { useZustand } from "./../store/store";

export default function NewsListItem({ item }) {
  const { changeSelectedNews } = useZustand();
  const navigation = useNavigation();

  return (
    <Pressable
      style={{
        backgroundColor: "rgba(16, 123, 169, 1)",
        borderRadius: 16,
        width: 250,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "baseline",
        borderWidth: 1,
        borderColor: "grey",
      }}
      to="/news_details"
      onPress={() => {
        Linking.openURL(item.article_url);
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
            height: 115,
            marginTop: "2%",
            borderRadius: 10,
          }}
          source={{ uri: item.image_url }}
        />
      </View>
      <Text
        style={{
          marginTop: "3%",
          color: "white",
          fontWeight: "bold",
          fontSize: 14,
        }}
      >
        {item.title}
      </Text>

      <Text
        style={{
          color: "white",
          fontSize: 12,
        }}
      >
        {item.description}
      </Text>
      <View
        style={{
          marginTop: "10%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            borderRadius: 20,
            padding: 6,
            backgroundColor: "white",
            height: "100%",
          }}
        >
          <Image
            style={{ width: 26, height: 26 }}
            source={{ uri: item.publisher.favicon_url }}
          />
        </View>
        <View
          style={{
            marginLeft: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 13,
            }}
          >
            {item.publisher.name}
          </Text>
        </View>
      </View>
      <View>
        <View style={{ flexDirection: "row", marginTop: "3%" }}>
          {item.tickers.slice(0, 5).map((tickerName, index) => (
            <View key={Math.random()}>
              <Text
                style={{
                  color: "white",
                  fontSize: 13,
                }}
              >
                {tickerName}{" "}
                {index === item.tickers.slice(0, 5).length - 1 &&
                  item.tickers.slice(0, 5).length !== item.tickers.length &&
                  "..."}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </Pressable>
  );
}
