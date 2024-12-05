import { Text, View } from 'react-native';
import { defaultStyles } from '../components/GlobalStyles';
import { StatusBar } from 'expo-status-bar';

const Camera = () => {
  return (
    <View style={defaultStyles.container}>
      <Text>Camera</Text>
      <StatusBar style="auto" />
    </View>
  );
};
export default Camera;
