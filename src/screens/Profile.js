import { View } from 'react-native';
import { defaultStyles } from '../components/GlobalStyles';
import { StatusBar } from 'expo-status-bar';
import UserProfile from '../components/UserProfile';
import { profiles } from '../data/profiles';

const Profile = () => {
  // Using the first profile as an example
  const currentUser = profiles[0];

  return (
    <View className="bg-white flex-1 items-center justify-between">
      <UserProfile user={currentUser} />
      <StatusBar style="auto" />
    </View>
  );
};

export default Profile;
