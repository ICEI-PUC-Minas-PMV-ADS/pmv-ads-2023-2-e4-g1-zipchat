import React from "react";
import { Video, ResizeMode } from "expo-av";
import { StyleSheet, View } from "react-native";

export function Splash() {
  function onPlaybackStatusUpdate(status) {}

  return (
    <View style={styles.container}>
      <Video
        style={StyleSheet.absoluteFill}
        resizeMode={ResizeMode.CONTAIN}
        source={require("../../assets/zipchat.mp4")}
        isLooping={true}
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}
        shouldPlay={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E4DF",
  },
});
