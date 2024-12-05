import { View, FlatList, Image, Pressable } from 'react-native';
import { Box } from '@/components/ui/box';
import { Avatar, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';
import { posts as initialPosts } from '../data/posts';
import { formatDistanceStrict } from 'date-fns';
import { profiles } from '../data/profiles';
import { HStack } from '@/components/ui/hstack';
import { BookmarkIcon, HeartIcon, MessageCircleIcon, SendIcon } from 'lucide-react-native';
import { Text } from '@/components/ui/text';
import { Fragment, useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Posts = ({ username, initialPostId }) => {
  const flatListRef = useRef(null);
  const [posts, setPosts] = useState(initialPosts.map((post) => ({ ...post, liked: false })));
  const lastTap = useRef(null);
  const DOUBLE_TAP_DELAY = 300;
  const navigation = useNavigation();

  const filteredPosts = username ? posts.filter((post) => post.username === username) : posts;

  useEffect(() => {
    if (initialPostId && flatListRef.current) {
      const postIndex = filteredPosts.findIndex((post) => post.id === initialPostId);
      if (postIndex !== -1) {
        flatListRef.current.scrollToIndex({ index: postIndex, animated: true });
      }
    }
  }, [initialPostId]);

  const handleLike = (postId) => {
    setPosts((currentPosts) =>
      currentPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  const handleDoubleTap = (postId) => {
    const now = Date.now();
    if (lastTap.current && now - lastTap.current < DOUBLE_TAP_DELAY) {
      const post = posts.find((p) => p.id === postId);
      if (!post.liked) {
        handleLike(postId);
      }
      lastTap.current = null;
    } else {
      lastTap.current = now;
    }
  };

  const handleUserPress = (username) => {
    navigation.navigate('Profile', { username });
  };

  const renderPost = ({ item }) => {
    const user = profiles.find((profile) => profile.username === item.username);
    return (
      <Box className="w-full bg-white mb-4 flex-1">
        <Pressable onPress={() => handleUserPress(user.username)}>
          <Box className="flex-row items-center p-3">
            <Avatar size="sm">
              <AvatarFallbackText>{user.username}</AvatarFallbackText>
              <AvatarImage source={{ uri: user.image }} />
            </Avatar>
            <Text className="ml-3 font-semibold">{user.username}</Text>
          </Box>
        </Pressable>

        <Pressable onPress={() => handleDoubleTap(item.id)}>
          <Image source={{ uri: item.image }} className="w-full aspect-square" resizeMode="cover" />
        </Pressable>

        <Box className="p-3">
          <HStack className="mb-2 gap-4">
            <HStack className="flex-1 gap-4">
              <Pressable onPress={() => handleLike(item.id)}>
                <Box className="flex-row gap-1 justify-center items-center">
                  <HeartIcon color={item.liked ? '#ef4444' : 'black'} fill={item.liked ? '#ef4444' : 'transparent'} size={24} />
                  <Text className="color-black">{item.likes}</Text>
                </Box>
              </Pressable>
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

          <Text className="color-black flex-row items-baseline gap">
            {/* <Pressable onPress={() => handleUserPress(user.username)}> */}
            <Text className="font-semibold">{user.username}</Text>
            {/* </Pressable> */}
            <Text className="items-center"> {item.caption}</Text>
          </Text>

          <Text className="text-gray-500 text-sm mt-1">{formatDistanceStrict(new Date(item.createdAt), new Date(), { addSuffix: true })}</Text>
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
