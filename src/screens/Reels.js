import { Text, View } from 'react-native';
import { defaultStyles } from '../components/GlobalStyles';
import { StatusBar } from 'expo-status-bar';

const Reels = () => {
  return (
    <View style={defaultStyles.container}>
      <Text>Reels</Text>
      <StatusBar style="auto" />
    </View>
  );
};
export default Reels;
