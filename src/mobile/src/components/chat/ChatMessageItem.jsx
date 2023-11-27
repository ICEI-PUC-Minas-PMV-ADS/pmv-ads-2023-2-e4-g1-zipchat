import React from "react";
import { StyleSheet, View, Text } from "react-native";

import IconUser from "../../../assets/icons/IconUser";
import IconRobot from "../../../assets/icons/IconRobot";
import { useThemeProvider } from "../../theme/themeProvider";

export function ChatMessageItem({ item }) {
  const {theme} = useThemeProvider();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: item.author === "ai" && "rgb(75 85 99)",
          opacity: item.author === "ai" ? 0.5 : 1,
        },
      ]}
    >
      <View style={styles.messageArea}>
        <View
          style={[
            styles.icon,
            {
              backgroundColor:
                item.author === "ai" ? "rgb(20 83 45)" : "rgb(30 58 138)",
            },
          ]}
        >
          {item.author === "me" && (
            <IconUser width={24} height={24} style={{ color: "white" }} />
          )}
          {item.author === "ai" && (
            <IconRobot width={24} height={24} style={{ color: "white" }} />
          )}
        </View>

        <View style={styles.messageWrapper}>
          <Text style={[styles.message, {color: theme.color}]}>{item.body}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: "100%",
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
  },
  messageWrapper: {
    flex: 1,
  },
  message: {
    maxWidth: "100%",

  },
});
