import { View, FlatList, Image } from 'react-native';
import { Box } from '@/components/ui/box';
import { Avatar, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';
import { posts } from '../data/posts';
import { formatDistanceStrict } from 'date-fns';
import { profiles } from '../data/profiles';
import { HStack } from '@/components/ui/hstack';
import { BookmarkIcon, HeartIcon, MessageCircleIcon, SendIcon } from 'lucide-react-native';
import { Text } from '@/components/ui/text';
import { Fragment, useEffect, useRef } from 'react';

const Posts = ({ username, initialPostId }) => {
  const flatListRef = useRef(null);
  const filteredPosts = username ? posts.filter((post) => post.username === username) : posts;

  useEffect(() => {
    if (initialPostId && flatListRef.current) {
      const postIndex = filteredPosts.findIndex((post) => post.id === initialPostId);
      if (postIndex !== -1) {
        flatListRef.current.scrollToIndex({ index: postIndex, animated: true });
      }
    }
  }, [initialPostId]);

  const renderPost = ({ item }) => {
    const user = profiles.find((profile) => profile.username === item.username);
    return (
      <Box className="w-full bg-white mb-4 flex-1">
        <Box className="flex-row items-center p-3">
          <Avatar size="sm">
            <AvatarFallbackText>{user.username}</AvatarFallbackText>
            <AvatarImage source={{ uri: user.image }} />
          </Avatar>
          <Text className="ml-3 font-semibold">{user.username}</Text>
        </Box>

        <Image source={{ uri: item.image }} className="w-full aspect-square" resizeMode="cover" />

        <Box className="p-3">
          <HStack className="mb-2 gap-4">
            <HStack className="flex-1 gap-4">
              <Box className="flex-row gap-1 justify-center items-center">
                <HeartIcon color="black" size={24} />
                <Text className="color-black">{item.likes}</Text>
              </Box>
              <Box className="flex-row gap-1 justify-center items-center">
                <MessageCircleIcon color="black" size={24} />
                <Text className="color-black">{item.comments}</Text>
              </Box>
              <Box className="flex-row gap-1 justify-center items-center">
                <SendIcon color="black" size={24} />
              </Box>
            </HStack>
            <Box className="flex-row gap-1 justify-center items-center">
              <BookmarkIcon color="black" size={24} />
            </Box>
          </HStack>

          <Text className="color-black">
            <Text className="font-semibold">{user.username}</Text> {item.caption}
          </Text>
        </Box>
      </Box>
    );
  };

  const onScrollToIndexFailed = (info) => {
    const wait = new Promise((resolve) => setTimeout(resolve, 500));
    wait.then(() => {
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({ index: info.index, animated: true });
      }
    });
  };

  return (
    <FlatList
      ref={flatListRef}
      data={filteredPosts}
      renderItem={renderPost}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      scrollEnabled={username ? true : false}
      onScrollToIndexFailed={onScrollToIndexFailed}
    />
  );
};

export default Posts;
