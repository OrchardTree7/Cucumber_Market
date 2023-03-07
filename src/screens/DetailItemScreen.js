import { View, Image, Text, Pressable, StyleSheet } from 'react-native';

function DetailItemScreen({ route }) {
  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: route.params.imgUrl }} />
      </View>
      <View style={styles.centerContainer}>
        <View style={styles.profileContainer}>
          <Image
            style={styles.profile}
            source={require('../../assets/icon.png')}
          />
          <Text style={styles.title}>{route.params.name}</Text>
        </View>
        <View style={styles.detailContainer}></View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.price}>{route.params.price}</Text>
        <Pressable style={styles.button}>
          <Text style={{ fontSize: 20, color: '#0DA54B' }}>거래 채팅</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default DetailItemScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  imageContainer: {
    flex: 5,
  },
  image: {
    flex: 1,
  },
  centerContainer: {
    flex: 5,
  },
  profileContainer: {
    flex: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 3,
    flexDirection: 'row',
    padding: 10,
  },
  profile: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  title: {
    flex: 4,
    fontSize: 20,
  },
  detailContainer: {
    flex: 4,
  },
  bottomContainer: {
    flex: 2,
    backgroundColor: '#0DA54B',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  price: {
    color: 'white',
    flex: 2,
    fontSize: 30,
  },
  button: {
    backgroundColor: 'white',
    flex: 3,
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});
