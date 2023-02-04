import { useNavigation } from "@react-navigation/native";
import { Image, Text, Pressable, View } from "react-native";
import { useZustand } from "./../store/store";

export default function NewsListItem({ item }) {
  const { changeSelectedNews } = useZustand();
  const navigation = useNavigation();

  return (
    <Pressable
      style={{ backgroundColor: "grey", width: 340, height: 300 }}
      to="/news_details"
      onPress={() => {
        changeSelectedNews(item.id);
        navigation.navigate("News_Details");
      }}
    >
      <View>
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
      </View>
    </Pressable>
  );
}
