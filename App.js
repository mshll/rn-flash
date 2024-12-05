import { StatusBar } from 'expo-status-bar';
import '@/global.css';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomNav from './src/navigation/BottomNav/BottomNav';

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <NavigationContainer>
        <BottomNav />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
