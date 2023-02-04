import { Image, Text, Pressable, View } from "react-native";

export default function NewsListItem({ item }) {
  console.log(item);

  return (
    <Pressable style={{ backgroundColor: "grey", width: 340, height: 300 }}>
      <Text>Title: {item.title}</Text>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: item.image_url }}
      />
      <Text>Description: {item.description}</Text>
      <Text>Publisher: {item.publisher_name}</Text>
      <Image
        style={{ width: 40, height: 40 }}
        source={{ uri: item.publisher.favicon_url }}
      />
      <View>
        <View>
          <Text>Related Tickers:</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          {item.tickers.map((tickerName) => (
            <View key={tickerName}>
              <Text> {tickerName} </Text>
            </View>
          ))}
        </View>
      </View>
    </Pressable>
  );
}
