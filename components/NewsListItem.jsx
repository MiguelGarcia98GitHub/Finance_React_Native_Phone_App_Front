import { Image, Text, Pressable } from "react-native";

export default function NewsListItem({ item }) {
  console.log(item);

  return (
    <Pressable style={{ backgroundColor: "grey", width: 300, height: 200 }}>
      <Text>Title: {item.title}</Text>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: item.image_url }}
      />
      <Text>Description: {item.description}</Text>
    </Pressable>
  );
}
