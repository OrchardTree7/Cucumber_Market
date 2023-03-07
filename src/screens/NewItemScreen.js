import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Image,
  TextInput,
} from 'react-native';

function NewItemScreen({ navigation }) {
  return (
    <View style={styles.root}>
      <View style={styles.photoContainer}>
        <Pressable
          style={{
            width: 100,
            height: 100,
            borderColor: 'black',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            style={{ width: '50%', height: '50%' }}
            source={require('../../assets/icon.png')}
          ></Image>
          <Text>0/10</Text>
        </Pressable>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.titleInput}>
          <TextInput style={styles.title} placeholder="제목"></TextInput>
        </View>
        <View style={styles.priceInput}>
          <TextInput style={styles.price} placeholder="₩ 가격"></TextInput>
        </View>
        <View style={styles.detailInput}>
          <TextInput
            style={styles.detail}
            multiline
            placeholder="게시글 내용을 작성해주세요"
          ></TextInput>
        </View>
      </View>
    </View>
  );
}

export default NewItemScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  photoContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 20,
  },
  inputContainer: {
    flex: 4,
  },
  titleInput: {
    flex: 1,
  },
  priceInput: {
    flex: 1,
  },
  detailInput: {
    flex: 5,
  },
  title: {
    padding: 10,
    fontSize: 20,
  },
  price: {
    padding: 10,
    fontSize: 20,
  },
  detail: {
    padding: 10,
    fontSize: 20,
  },
});
