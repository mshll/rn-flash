import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeNavigation from '../HomeNavigation/HomeNavigation';
import Reels from '@/src/screens/Reels';
import Profile from '@/src/screens/Profile';
import Camera from '@/src/screens/Camera';
import Explore from '@/src/screens/Explore';
import ProfileNavigation from '../ProfileNavigation/ProfileNavigation';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'grey',
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Main"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="magnify" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="camera" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="video" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigation}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" color={color} size={size} />,
        }}
      />
      {/* <Tab.Screen
        name="Auth"
        component={AuthNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" color={color} size={size} />,
        }}
      /> */}
    </Tab.Navigator>
  );
};
export default BottomNav;
