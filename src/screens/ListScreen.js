import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Pressable,
  SafeAreaView,
} from 'react-native';
import { useState, useEffect } from 'react';

import { Routes } from '../navigations/routes';

import { ITEMS } from '../../data/dummy_data';

import Navbar from '../components/Navbar';
import ListItem from '../components/ListItem';
import ContentTab from '../navigations/ContentTab';
import { NavigationContainer } from '@react-navigation/native';

function ListScreen({ navigation }) {
  const [listItem, setListItem] = useState([]);

  useEffect(() => {
    setListItem(ITEMS);
  }, [listItem]);

  return (
    <>
      <SafeAreaView />

      <View style={styles.root}>
        <View style={styles.listContainer}>
          <FlatList
            data={listItem}
            renderItem={(items) => {
              return (
                <ListItem
                  title={items.item.name}
                  price={items.item.price}
                  imgUrl={items.item.imgUrl}
                  style={styles.item}
                  onPress={() =>
                    navigation.navigate(Routes.DETAIL_ITEM_SCREEN, {
                      name: items.item.name,
                      price: items.item.price,
                      imgUrl: items.item.imgUrl,
                    })
                  }
                />
              );
            }}
            keyExtractor={(item, index) => index}
          ></FlatList>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={({ pressed }) =>
              pressed ? [styles.button, styles.pressed] : styles.button
            }
            onPress={() => navigation.navigate(Routes.NEW_ITEM_SCREEN)}
            android_ripple={{ color: '#2B9348' }}
          >
            <Text style={{ fontSize: 16, color: '#FFFFFF' }}>글 작성하기</Text>
          </Pressable>
        </View>
      </View>
      <SafeAreaView />
    </>
  );
}

export default ListScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  button: {
    backgroundColor: '#2B9348',
    width: 400,
    height: 40,
    borderRadius: 100,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
  listContainer: {
    flex: 20,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 20,
  },
  item: {
    width: '100%',
    height: 100,
    justifyContent: 'flex-start',
    borderColor: '#DAD7CD',
    borderWidth: 1,
    flexDirection: 'row',
  },
});
