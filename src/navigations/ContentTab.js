import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Routes } from './routes';
import ListScreen from '../screens/ListScreen';
import MyScreen from '../screens/MyScreen';
import NearMeScreen from '../screens/NearMeScreen';
import AlertScreen from '../screens/AlertScreen';

const Tab = createBottomTabNavigator();
const ContentTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={Routes.LIST_SCREEN} component={ListScreen} />
      <Tab.Screen name={Routes.NEARME_SCREEN} component={NearMeScreen} />
      <Tab.Screen name={Routes.ALERT_SCREEN} component={AlertScreen} />
      <Tab.Screen name={Routes.MY_SCREEN} component={MyScreen} />
    </Tab.Navigator>
  );
};
export default ContentTab;
