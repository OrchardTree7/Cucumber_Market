import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './routes.js';
import { headerRight } from './Header.js';
import ContentTab from './ContentTab';
import MainScreen from '../screens/MainScreen';
import ListScreen from '../screens/ListScreen';
import DetailItemScreen from '../screens/DetailItemScreen.js';
import NewItemScreen from '../screens/NewItemScreen.js';
import MyScreen from '../screens/MyScreen.js';
import NearMeScreen from '../screens/NearMeScreen.js';
import AlertScreen from '../screens/AlertScreen.js';

const Stack = createNativeStackNavigator();

const ScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.MAIN_SCREEN}
        component={MainScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'ContentTab'}
        component={ContentTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={Routes.LIST_SCREEN} component={ListScreen} />
      <Stack.Screen
        name={Routes.DETAIL_ITEM_SCREEN}
        component={DetailItemScreen}
        options={{ title: '제품 상세 페이지' }}
      />
      <Stack.Screen
        name={Routes.NEW_ITEM_SCREEN}
        component={NewItemScreen}
        options={({ route }) => ({
          headerRight,
          title: '글 작성 페이지',
        })}
      />
      {/*<Stack.Screen
        name={Routes.NEARME_SCREEN}
        component={NearMeScreen}
        options={
          {
            //headerShown: false,
          }
        }
      />
      <Stack.Screen
        name={Routes.ALERT_SCREEN}
        component={AlertScreen}
        options={
          {
            //headerShown: false,
          }
        }
      />
      <Stack.Screen
        name={Routes.MY_SCREEN}
        component={MyScreen}
        options={
          {
            //{headerShown: false,
          }
        }
      />*/}
    </Stack.Navigator>
  );
};

export default ScreenStack;
