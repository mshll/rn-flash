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
import { CircleUserRoundIcon, HouseIcon, SearchIcon, SquarePlusIcon, TvMinimalPlayIcon } from 'lucide-react-native';

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
          tabBarIcon: ({ color, size, focused }) => <HouseIcon color={color} size={size} strokeWidth={focused ? 2.5 : 1.5} />,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ color, size, focused }) => <SearchIcon color={color} size={size} strokeWidth={focused ? 2.5 : 1.5} />,
        }}
      />
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarIcon: ({ color, size, focused }) => <SquarePlusIcon color={color} size={size} strokeWidth={focused ? 2.5 : 1.5} />,
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          tabBarIcon: ({ color, size, focused }) => <TvMinimalPlayIcon color={color} size={size} strokeWidth={focused ? 2.5 : 1.5} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigation}
        options={{
          tabBarIcon: ({ color, size, focused }) => <CircleUserRoundIcon color={color} size={size} strokeWidth={focused ? 2.5 : 1.5} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomNav;
