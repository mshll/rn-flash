import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Home from '@/src/screens/Home';
import { HeartIcon, MessageCircleIcon, MessageCircleMoreIcon } from 'lucide-react-native';
import Profile from '@/src/screens/Profile';
import UserPostsScreen from '@/src/screens/UserPosts';

const Stack = createNativeStackNavigator();
const HomeNavigation = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => <Image source={require('@/assets/instagram-logo.png')} style={{ width: 120, height: 40, resizeMode: 'contain' }} />,
          headerRight: () => (
            <View style={{ flexDirection: 'row', gap: 20 }}>
              <TouchableOpacity>
                <HeartIcon size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity>
                <MessageCircleMoreIcon size={24} color="black" />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitleStyle: {
            color: '#4A3428',
          },
        }}
      />
      <Stack.Screen
        name="UserPosts"
        component={UserPostsScreen}
        options={{
          title: 'Posts',
          headerTitleStyle: {
            color: '#4A3428',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({});
