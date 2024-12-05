import { View, FlatList, Image } from 'react-native';
import { Box } from '@/components/ui/box';
import { Avatar, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';
import { posts } from '../data/posts';
import { formatDistanceStrict } from 'date-fns';
import { profiles } from '../data/profiles';
import { HStack } from '@/components/ui/hstack';
import { BookmarkIcon, HeartIcon, MessageCircleIcon, SendIcon } from 'lucide-react-native';
import { Text } from '@/components/ui/text';
import { Fragment } from 'react';

const Posts = () => {
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

        <Box className="p-3 ">
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

          <Text className="text-gray-500 text-sm mt-1">{formatDistanceStrict(new Date(), new Date(item.createdAt), { addSuffix: true })}</Text>
        </Box>
      </Box>
    );
  };

  return (
    <FlatList
      data={posts}
      renderItem={renderPost}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      scrollEnabled={false}
    />
  );
};

export default Posts;
