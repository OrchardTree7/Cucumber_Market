import {
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
  SafeAreaView,
} from 'react-native';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../navigations/routes';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../colors';
import ContentTab from '../navigations/ContentTab';
import AppContext from '../components/AppContext';
import { useContext } from 'react';

const MainScreen = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={[Colors.START_GREEN, Colors.END_GREEN]}
      style={styles.background}
    >
      <SafeAreaView />
      <View style={styles.root}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: Colors.TITLE_GREEN1 }]}>
            오 이{' '}
          </Text>
          <Text style={[styles.title, { color: Colors.WHITE }]}>마 켓</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={{ fontSize: 40, color: Colors.TITLE_GREEN2 }}>
            오늘은 이{' '}
          </Text>
          <Text style={{ fontSize: 40, color: Colors.TITLE_GREEN1 }}>
            가격 어때 ?
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/mainIcon.png')}
            style={styles.image}
          ></Image>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={{ alignItems: 'center' }}
            onPress={
              () => {
                navigation.navigate(ContentTab);
              }
              /*onStartButton*/
            }
          >
            <Text style={{ fontSize: 24, color: Colors.WHITE }}>시작하기</Text>
          </Pressable>
        </View>
        <View style={styles.textButtonContainer}>
          <Text style={{ fontSize: 24 }}>
            계정이 있다면{' '}
            <Text style={{ color: Colors.TITLE_GREEN1 }}>로그인</Text>
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

MainScreen.PropTypes = {
  navigation: PropTypes.object,
};
export default MainScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    marginBottom: 50,
  },
  title: {
    fontSize: 64,
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 150,
    overflow: 'hidden',
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    backgroundColor: Colors.TITLE_GREEN1,
    width: 320,
    height: 80,
    borderRadius: 10,
    marginBottom: 30,
    justifyContent: 'center',
  },
  textButtonContainer: {
    flexDirection: 'row',
  },
});
