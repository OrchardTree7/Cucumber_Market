import { View, StyleSheet, Image, Text, Pressable, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function MainScreen({ onStartButton }) {
	return (
		<LinearGradient colors={['#2B9348', '#E4E24C']} style={styles.background}>
			<SafeAreaView />
			<View style={styles.root}>
				<View style={styles.titleContainer}>
					<Text style={[styles.title, { color: '#2B9348' }]}>오 이 </Text>
					<Text style={[styles.title, { color: '#FFFFFF' }]}>마 켓</Text>
				</View>
				<View style={styles.titleContainer}>
					<Text style={{ fontSize: 40, color: '#E4E24C' }}>오늘은 이 </Text>
					<Text style={{ fontSize: 40, color: '#2B9348' }}>가격 어때 ?</Text>
				</View>
				<View style={styles.imageContainer}>
					<Image source={require('../assets/images/mainIcon.png')} style={styles.image}></Image>
				</View>
				<View style={styles.buttonContainer}>
					<Pressable style={{ alignItems: 'center' }} onPress={onStartButton}>
						<Text style={{ fontSize: 24, color: '#FFFFFF' }}>시작하기</Text>
					</Pressable>
				</View>
				<View style={styles.textButtonContainer}>
					<Text style={{ fontSize: 24 }}>
						계정이 있다면 <Text style={{ color: '#2B9348' }}>로그인</Text>
					</Text>
				</View>
			</View>
		</LinearGradient>
	);
}

export default MainScreen;

const styles = StyleSheet.create({
	background: {
		flex: 1,
	},
	root: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleContainer: {
		flexDirection: 'row',
		marginBottom: 50,
	},
	title: {
		fontSize: 64,
	},
	imageContainer: {
		width: 150,
		height: 150,
		borderRadius: 150,
		overflow: 'hidden',
		marginBottom: 30,
	},
	image: {
		width: '100%',
		height: '100%',
	},
	buttonContainer: {
		backgroundColor: '#2B9348',
		width: 320,
		height: 80,
		borderRadius: 10,
		marginBottom: 30,
		justifyContent: 'center',
	},
	textButtonContainer: {
		flexDirection: 'row',
	},
});
