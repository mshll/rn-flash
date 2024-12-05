import { StatusBar } from "expo-status-bar";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomNav from "./src/navigation/BottomNav/BottomNav";
import Camera from "./src/screens/Camera";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <NavigationContainer>
        <BottomNav />
      </NavigationContainer>
    </GluestackUIProvider>
    // <SafeAreaView
    //   style={{
    //     flex: 1,
    //   }}
    // >
    //   <Camera />
    // </SafeAreaView>
  );
}
