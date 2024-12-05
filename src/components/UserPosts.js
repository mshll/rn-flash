import { Box } from '@/components/ui/box';
import { FlatList, Image, useWindowDimensions, Pressable } from 'react-native';

const UserPosts = ({ posts, onPostPress }) => {
  const { width } = useWindowDimensions();
  const imageSize = width / 3;

  const renderPost = ({ item }) => (
    <Pressable onPress={() => onPostPress(item.id)}>
      <Box style={{ width: imageSize, height: imageSize }}>
        <Image source={{ uri: item.image }} style={{ width: '100%', height: '100%' }} />
      </Box>
    </Pressable>
  );

  return (
    <FlatList data={posts} renderItem={renderPost} keyExtractor={(item) => item.id.toString()} numColumns={3} showsVerticalScrollIndicator={false} />
  );
};

export default UserPosts;
