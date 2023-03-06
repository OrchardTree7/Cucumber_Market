import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './routes.js';
import ContentTab from './ContentTab';
import MainScreen from '../screens/MainScreen';
import ListScreen from '../screens/ListScreen';
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
      <Stack.Screen name={'ContentTab'} component={ContentTab} />
      <Stack.Screen name={Routes.LIST_SCREEN} component={ListScreen} />
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
