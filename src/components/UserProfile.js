import { Box } from '@/components/ui/box';
import { View, FlatList, Pressable, ScrollView } from 'react-native';
import { Avatar, AvatarBadge, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';
import { Text } from '@/components/ui/text';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Button, ButtonText } from '@/components/ui/button';
import { MessageCircleIcon, GridIcon, PlaySquareIcon, BookmarkIcon, PlusIcon, TvMinimalPlayIcon, SquareUserIcon } from 'lucide-react-native';
import { posts } from '../data/posts';
import UserPosts from './UserPosts';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const UserProfile = ({ user }) => {
  const [activeTab, setActiveTab] = useState('posts');
  const userPosts = posts.filter((post) => post.username === user.username);
  const [isFollowing, setIsFollowing] = useState(false);
  const navigation = useNavigation();

  const Stats = ({ label, value }) => (
    <VStack className="items-center">
      <Text className="font-bold text-black text-lg">{value}</Text>
      <Text className="text-gray-600">{label}</Text>
    </VStack>
  );

  const TabButton = ({ icon: Icon, isActive, onPress }) => (
    <Pressable onPress={onPress} className="flex-1 py-3 border-b-2" style={{ borderBottomColor: isActive ? '#000' : '#e5e5e5' }}>
      <Icon size={24} color={isActive ? '#000' : '#666'} style={{ alignSelf: 'center' }} />
    </Pressable>
  );

  const handlePostPress = (postId) => {
    navigation.navigate('UserPosts', {
      username: user.username,
      initialPostId: postId,
    });
  };

  return (
    <Box className="flex-1 w-full">
      <ScrollView>
        <Box className="p-4">
          <HStack className="items-center mb-3">
            <Avatar size="xl">
              <AvatarFallbackText>{user.name}</AvatarFallbackText>
              <AvatarImage source={{ uri: user.image }} />
              <AvatarBadge className="bg-blue-500 items-center justify-center">
                <PlusIcon size={14} color="#fff" strokeWidth={3} />
              </AvatarBadge>
            </Avatar>

            <HStack className="flex-1 justify-around ml-4">
              <Stats label="Posts" value={userPosts.length} />
              <Stats label="Followers" value="2.5K" />
              <Stats label="Following" value="1.2K" />
            </HStack>
          </HStack>

          <VStack className="mb-4">
            <Text className="font-bold text-black text-lg">{user.name}</Text>
            <Text className="text-gray-600">{user.bio}</Text>
          </VStack>

          <HStack className="gap-2">
            <Button className="flex-1" action={isFollowing ? 'positive' : 'primary'} onPress={() => setIsFollowing(!isFollowing)}>
              <ButtonText>{isFollowing ? 'Following' : 'Follow'}</ButtonText>
            </Button>
            <Button variant="outline" className="flex-1">
              <ButtonText>Message</ButtonText>
            </Button>
          </HStack>
        </Box>

        <HStack className="border-t border-gray-200">
          <TabButton icon={GridIcon} isActive={activeTab === 'posts'} onPress={() => setActiveTab('posts')} />
          <TabButton icon={TvMinimalPlayIcon} isActive={activeTab === 'videos'} onPress={() => setActiveTab('videos')} />
          <TabButton icon={SquareUserIcon} isActive={activeTab === 'tagged'} onPress={() => setActiveTab('tagged')} />
        </HStack>

        {activeTab === 'posts' && <UserPosts posts={userPosts} onPostPress={handlePostPress} />}
        {activeTab === 'videos' && (
          <Box className="flex-1 items-center justify-center p-4">
            <Text className="text-gray-500">No videos yet</Text>
          </Box>
        )}
        {activeTab === 'tagged' && (
          <Box className="flex-1 items-center justify-center p-4">
            <Text className="text-gray-500">No tagged posts</Text>
          </Box>
        )}
      </ScrollView>
    </Box>
  );
};

export default UserProfile;
