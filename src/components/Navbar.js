import { View, StyleSheet, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../navigations/routes';

const Navbar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.navbarContainer}>
      <View>
        <Pressable></Pressable>
        <Text>홈</Text>
      </View>
      <View>
        <Pressable></Pressable>
        <Text>내 근처</Text>
      </View>
      <View>
        <Pressable></Pressable>
        <Text>알림</Text>
      </View>
      <View>
        <Pressable
        //</View>onPress={
        //() => navigation.navigate(Routes.MY_SCREEN)
        /*onStartButton*/
        //}
        >
          <Text>내 정보</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
