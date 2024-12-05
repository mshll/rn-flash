import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Profile from '@/src/screens/Profile';
import UserPostsScreen from '@/src/screens/UserPosts';
import { MenuIcon, MessageCircleMoreIcon, SquarePlusIcon } from 'lucide-react-native';

const Stack = createNativeStackNavigator();

const ProfileNavigation = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: '',
          headerBackVisible: false,
          headerTitleStyle: {
            color: '#4A3428',
          },
          headerLeft: () => <Text className="text-3xl font-bold">mshll</Text>,
          headerRight: () => (
            <View style={{ flexDirection: 'row', gap: 20 }}>
              <TouchableOpacity>
                <SquarePlusIcon size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity>
                <MenuIcon size={24} color="black" />
              </TouchableOpacity>
            </View>
          ),
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

export default ProfileNavigation;

const styles = StyleSheet.create({});
