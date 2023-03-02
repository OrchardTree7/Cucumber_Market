import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import MainScreen from './screens/MainScreen';
import ListScreen from './screens/ListScreen';

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
