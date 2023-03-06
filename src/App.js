import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import Navigation from './navigations/Navigation';
import AppContext from './components/AppContext';

const App = () => {
  return (
    <>
      <StatusBar style="dark" />
      <Navigation />
    </>
  );
};

export default App;

/*
export default function App() {
  const [appStart, setAppStart] = useState(false);

  function StartApp() {
    setAppStart(true);
  }

  let screen = <MainScreen onStartButton={StartApp} />;

  if (appStart) {
    screen = <ListScreen />;
  }

  return <>{screen}</>;
}
*/
