import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from '@/src/screens/Home';

const Stack = createNativeStackNavigator();
const HomeNavigation = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerBackVisible: false,
          headerShadowVisible: false,
          headerTitleStyle: {
            color: '#4A3428',
          },
        }}
      />
      {/* <Stack.Screen
        name="Welcome"
        component={Onboarding}
        options={{
          headerShadowVisible: false,
          // headerRight: () => (
          //   <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          //     <Text>Skip</Text>
          //   </TouchableOpacity>
          // ),
        }}
      />
      <Stack.Screen
        name="Brew Details"
        component={BrewDetails}
        options={{
          headerShadowVisible: false,
          // headerLeft: () => (
          //   <TouchableOpacity
          //     onPress={() => navigation.goBack()}
          //     style={{
          //       flexDirection: "row",
          //       alignItems: "center",
          //       gap: 5,
          //     }}
          //   >
          //     <Ionicons name="arrow-back" size={24} color="#4A3428" />
          //   </TouchableOpacity>
          // ),
          headerTitleStyle: {
            color: '#4A3428',
          },
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({});
