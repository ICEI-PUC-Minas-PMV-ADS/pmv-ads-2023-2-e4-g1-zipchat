import React from "react";
import { Video, ResizeMode } from "expo-av";
import { StyleSheet, View, Platform } from "react-native";

export function Splash() {
  function onPlaybackStatusUpdate(status) {}

  return (
    <View style={styles.container}>
      {Platform.OS === "web" ? (
        <video style={styles.webVideo} autoPlay loop muted playsInline>
          <source src={require("../../assets/zipchat.mp4")} type="video/mp4" />
        </video>
      ) : (
        <Video
          style={StyleSheet.absoluteFill}
          resizeMode={ResizeMode.CONTAIN}
          source={require("../../assets/zipchat.mp4")}
          isLooping={true}
          onPlaybackStatusUpdate={onPlaybackStatusUpdate}
          shouldPlay={true}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E4DF",
  },
  webVideo: {
    // Estilos específicos para a versão web
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
});
