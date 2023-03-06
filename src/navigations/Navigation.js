import { NavigationContainer } from '@react-navigation/native';
import ScreenStack from './ScreenStack';
import ContentTab from './ContentTab';
import AppContext from '../components/AppContext';
import { useContext } from 'react';

const Navigation = () => {
  return (
    <NavigationContainer>
      <ScreenStack />
    </NavigationContainer>
  );
};

export default Navigation;
