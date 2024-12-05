import { Text, View } from 'react-native';
import { defaultStyles } from '../components/GlobalStyles';
import { StatusBar } from 'expo-status-bar';

const Explore = () => {
  return (
    <View style={defaultStyles.container}>
      <Text>Explore</Text>
      <StatusBar style="auto" />
    </View>
  );
};
export default Explore;
