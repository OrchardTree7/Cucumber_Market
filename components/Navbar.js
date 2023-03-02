import { View, StyleSheet, Pressable, Text } from 'react-native';

function Navbar() {
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
				<Pressable></Pressable>
				<Text>내 정보</Text>
			</View>
		</View>
	);
}

export default Navbar;

const styles = StyleSheet.create({
	navbarContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
});
