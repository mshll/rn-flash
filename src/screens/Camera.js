import React from "react";
import { View } from "react-native";
import { defaultStyles } from "../components/GlobalStyles";
import { StatusBar } from "expo-status-bar";
import CameraComponent from "../components/CameraComponent";

const Camera = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar style="auto" />
      <CameraComponent />
    </View>
  );
};

export default Camera;
