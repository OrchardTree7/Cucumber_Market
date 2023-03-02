import { View, StyleSheet, FlatList, Text, Pressable, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';

import { ITEMS } from '../data/dummy_data';

import Navbar from '../components/Navbar';
import ListItem from '../components/ListItem';

function ListScreen() {
	const [listItem, setListItem] = useState([]);

	useEffect(() => {
		setListItem(ITEMS);
	}, [listItem]);

	function AddListItem() {
		setListItem([listItem.push({ name: faker.commerce.productName(), price: faker.commerce.price(), imgUrl: faker.image.imageUrl() })]);
	}

	return (
		<>
			<SafeAreaView />
			<View style={styles.root}>
				<FlatList
					data={listItem}
					renderItem={(items) => {
						return <ListItem title={items.item.name} price={items.item.price} imgUrl={items.item.imgUrl} style={styles.item} />;
					}}
					keyExtractor={(item, index) => index}
				></FlatList>
				<View style={styles.buttonContainer}>
					<Pressable style={({ pressed }) => (pressed ? [styles.button, styles.pressed] : styles.button)} onPress={AddListItem} android_ripple={{ color: '#2B9348' }}>
						<Text style={{ fontSize: 16, color: '#FFFFFF' }}>글 작성하기</Text>
					</Pressable>
				</View>
				<Navbar />
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
	buttonContainer: {
		alignItems: 'center',
	},
	item: {
		width: '100%',
		height: 100,
		justifyContent: 'center',
		alignItems: 'flex-start',
		borderColor: '#DAD7CD',
		borderWidth: 1,
	},
});
