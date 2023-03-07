import { View, Pressable, Text } from 'react-native';

export const headerRight = () => {
  return (
    <View>
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressed : {})}
        onPress={() => console.log('pressed')}
      >
        <Text>완료</Text>
      </Pressable>
    </View>
  );
};
