import React, { useEffect } from "react";
import { StyleSheet, View, Animated, Easing } from "react-native";

import IconRobot from "../../../assets/icons/IconRobot";

export function ChatMessageLoaing({}) {
  const opacity = new Animated.Value(0);

  Animated.loop(
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    })
  ).start();

  return (
    <View style={styles.container}>
      <View style={styles.messageArea}>
        <View style={styles.icon}>
          <IconRobot width={24} height={24} style={{ color: "white" }} />
        </View>
        <View style={styles.messageWrapper}>
          <Animated.View style={{ opacity }}>
            <View style={styles.animacao}></View>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: "100%",
    backgroundColor: "rgb(75 85 99)",
    opacity: 0.5,
    padding: 7,
  },
  messageArea: {
    maxWidth: "100%",
    alignSelf: "center",

    flexDirection: "row",
  },
  icon: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    borderRadius: 4,
    backgroundColor: "rgb(20 83 45)",
  },
  messageWrapper: {
    flex: 1,
  },
  animacao: {
    width: 10,
    height: 20,
    backgroundColor: "white",
  },
});
