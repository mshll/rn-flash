import { Box } from '@/components/ui/box';
import { Text, View, FlatList } from 'react-native';
import { Avatar, AvatarBadge, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';
import { profiles } from '../data/profiles';

const Stories = () => {
  const renderStory = ({ item }) => (
    <View className="mr-3 items-center">
      <Box
        className="rounded-full p-[2px]"
        style={{
          backgroundColor: '#E1306C',
          backgroundImage: 'linear-gradient(45deg, #FCAF45, #E1306C, #C13584)',
        }}
      >
        <Avatar size="lg" className="border border-white">
          <AvatarFallbackText>{item.name.charAt(0)}</AvatarFallbackText>
          <AvatarImage source={{ uri: item.image }} className="bg-primary-500" />
        </Avatar>
      </Box>
      <Text className="text-sm mt-1">{item.username}</Text>
    </View>
  );

  return (
    <Box className="w-screen overflow-hidden">
      <FlatList
        data={profiles}
        renderItem={renderStory}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ padding: 12 }}
        className="w-full bg-white border-b border-gray-200"
      />
    </Box>
  );
};

export default Stories;
