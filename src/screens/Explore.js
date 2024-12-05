import { View, Image, Pressable, TextInput, TouchableOpacity } from 'react-native';
import { defaultStyles } from '../components/GlobalStyles';
import { StatusBar } from 'expo-status-bar';
import { posts } from '../data/posts';
import { useState } from 'react';
import { Box } from '@/components/ui/box';
import { SearchIcon } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Explore = () => {
  const insets = useSafeAreaInsets();

  const [searchQuery, setSearchQuery] = useState('');
  const filteredPosts = posts.filter(
    (post) => post.caption.toLowerCase().includes(searchQuery.toLowerCase()) || post.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View className={`bg-white flex-1 items-center justify-between`} style={{ paddingTop: insets.top }}>
      <View className="w-[95%]">
        <Box className="w-full px-4 py-2 bg-gray-100 flex-row items-center rounded-xl mb-4">
          <SearchIcon size={20} color="gray" />
          <TextInput placeholder="Search" value={searchQuery} onChangeText={setSearchQuery} className="flex-1 ml-2 text-base" />
        </Box>
      </View>

      <View className="flex-1 flex-row flex-wrap">
        {filteredPosts.map((post) => (
          <TouchableOpacity key={post.id} style={{ width: '33.33%', aspectRatio: 1 }}>
            <Image source={{ uri: post.image }} style={{ width: '100%', height: '100%' }} className="border-white border" />
          </TouchableOpacity>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default Explore;
