import { View, Pressable, Text, Image } from 'react-native';

function ListItem({ title, price, imgUrl, style, onPress }) {
  return (
    <Pressable style={style} onPress={onPress}>
      <Image style={{ width: 100, height: 100 }} source={{ uri: imgUrl }} />
      <View style={{ height: 100 }}>
        <Text style={{ fontSize: 20 }}>{title}</Text>
        <Text style={{ fontSize: 28 }}>{price}</Text>
      </View>
    </Pressable>
  );
}

export default ListItem;
