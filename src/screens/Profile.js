import { View } from 'react-native';
import { defaultStyles } from '../components/GlobalStyles';
import { StatusBar } from 'expo-status-bar';
import UserProfile from '../components/UserProfile';
import { profiles } from '../data/profiles';

const Profile = ({ route }) => {
  const username = route?.params?.username;
  const currentUser = username ? profiles.find((profile) => profile.username === username) : profiles[0];

  return (
    <View className="bg-white flex-1 items-center justify-between">
      <UserProfile user={currentUser} />
      <StatusBar style="auto" />
    </View>
  );
};

export default Profile;
