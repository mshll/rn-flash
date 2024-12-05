import { Box } from '@/components/ui/box';
import { FlatList, Image, useWindowDimensions } from 'react-native';

const UserPosts = ({ posts }) => {
  const { width } = useWindowDimensions();
  const imageSize = width / 3;

  const renderPost = ({ item }) => (
    <Box style={{ width: imageSize, height: imageSize }}>
      <Image source={{ uri: item.image }} style={{ width: '100%', height: '100%' }} />
    </Box>
  );

  return (
    <FlatList data={posts} renderItem={renderPost} keyExtractor={(item) => item.id.toString()} numColumns={3} showsVerticalScrollIndicator={false} />
  );
};

export default UserPosts;
