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
      <Tab.Screen
        name={Routes.LIST_SCREEN}
        component={ListScreen}
        options={{ title: '게시글 목록' }}
      />
      {/* <Tab.Screen
        name={Routes.NEARME_SCREEN}
        component={NearMeScreen}
        options={{ title: '내 주변' }}
      /> */}
      <Tab.Screen
        name={Routes.ALERT_SCREEN}
        component={AlertScreen}
        options={{ title: '알림' }}
      />
      <Tab.Screen
        name={Routes.MY_SCREEN}
        component={MyScreen}
        options={{ title: '내 정보' }}
      />
    </Tab.Navigator>
  );
};
export default ContentTab;
