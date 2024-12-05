import { Text, View } from 'react-native';
import { defaultStyles } from '../components/GlobalStyles';
import { StatusBar } from 'expo-status-bar';

const Profile = () => {
  return (
    <View style={defaultStyles.container}>
      <Text>Profile</Text>
      <StatusBar style="auto" />
    </View>
  );
};
export default Profile;
