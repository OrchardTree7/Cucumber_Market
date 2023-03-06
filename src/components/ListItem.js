import { View, StyleSheet, Text, Image } from 'react-native';

function ListItem({ title, price, imgUrl, style }) {
  return (
    <View style={style}>
      <Image style={{ width: 50, height: 50 }} source={{ uri: imgUrl }} />
      <Text style={{ fontSize: 20 }}>{title}</Text>
      <Text style={{ fontSize: 28 }}>{price}</Text>
    </View>
  );
}

export default ListItem;
