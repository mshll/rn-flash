import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
} from "react-native";
import { ChevronLeft, Zap, Settings, RotateCcw } from "lucide-react-native"; // Import the icons from Lucide

let lastTap = 0;

export default function CameraComponent() {
  const [facing, setFacing] = useState("back");
  const [zoom, setZoom] = useState(1); // State to track the zoom level
  const [flash, setFlash] = useState(false); // State to track flash mode
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          Flash and camera permissions are required to use this feature.
        </Text>
        <Button onPress={requestPermission} title="Grant Permissions" />
      </View>
    );
  }

  function handleDoubleTap() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  function handleTap() {
    const now = Date.now();
    if (now - lastTap < 300) {
      // If the interval between two taps is less than 300ms, consider it a double tap
      handleDoubleTap();
    }
    lastTap = now;
  }

  const toggleFlash = () => {
    setFlash((prev) => !prev);
  };

  const zoomLevels = [
    { label: "1", value: 0.001 },
    { label: "2", value: 0.09 },
    { label: "3", value: 0.3 },
  ];

  return (
    <View style={styles.container}>
      {/* Top container with icons */}
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <ChevronLeft color="white" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={toggleFlash}>
          <Zap color={flash ? "yellow" : "white"} size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Settings color="white" size={24} />
        </TouchableOpacity>
      </View>
      <TouchableWithoutFeedback onPress={handleTap}>
        <CameraView
          style={styles.camera}
          facing={facing}
          zoom={zoom}
          flashMode={flash ? "torch" : "off"} // Set flash mode dynamically
        />
      </TouchableWithoutFeedback>
      {/* Zoom level buttons */}
      <View style={styles.zoomContainer}>
        {zoomLevels.map(({ label, value }) => (
          <TouchableOpacity
            key={label}
            style={[
              styles.zoomButton,
              zoom === value ? styles.zoomButtonActive : null,
            ]}
            onPress={() => setZoom(value)}
          >
            <Text style={styles.zoomText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Bottom UI with camera button in the middle and flip icon on the right */}
      <View style={styles.bottomContainer}>
        {/* Rotate icon on the right */}
        <TouchableOpacity
          style={styles.flipIconButton}
          onPress={handleDoubleTap}
        >
          <RotateCcw color="white" size={30} />
        </TouchableOpacity>
        {/* Center camera button */}
        <View style={styles.cameraButtonContainer}>
          <View style={styles.cameraButton} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 0,
    width: "100%",
    paddingTop: 100, // Added padding from the top
    paddingHorizontal: 15,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
    zIndex: 10,
  },
  iconButton: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  zoomContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 170,
    width: "100%",
  },
  zoomButton: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  zoomButtonActive: {
    backgroundColor: "rgba(80, 120, 90, 0.6)", // Highlight active zoom level
  },
  zoomText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 12,
  },
  bottomContainer: {
    height: 140,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent background
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  cameraButtonContainer: {
    position: "absolute",
    bottom: 40,
    left: "50%",
    transform: [{ translateX: -35 }],
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  cameraButton: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: "rgba(255, 0, 0, 0.9)",
  },
  flipIconButton: {
    position: "absolute",
    bottom: 55,
    right: 20,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
