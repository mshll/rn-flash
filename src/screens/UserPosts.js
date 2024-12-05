import { View } from 'react-native';
import Posts from '../components/Posts';

const UserPostsScreen = ({ route }) => {
  const { username, initialPostId } = route.params;

  return (
    <View className="flex-1 bg-white">
      <Posts username={username} initialPostId={initialPostId} />
    </View>
  );
};

export default UserPostsScreen;
