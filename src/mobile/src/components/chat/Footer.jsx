import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { ChatMessageInput } from "./ChatMessageInput";
<<<<<<< Updated upstream

export function Footer({ onSendMessage, disabled }) {
  return (
    <View style={styles.container}>
=======
import { useThemeProvider } from "../../theme/themeProvider";

export function Footer({ onSendMessage, disabled }) {
  const {theme} = useThemeProvider();
  return (
    <View style={[styles.container, {borderTopColor: theme.borderTop}]}>
>>>>>>> Stashed changes
      <View style={styles.inputArea}>
        <ChatMessageInput onSend={onSendMessage} disabled={disabled} />
        <Text style={styles.span}>Projeto eixo 4</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: "100%",
    borderTopWidth: 1,
    padding: 8,
<<<<<<< Updated upstream
    borderTopColor: "rgba(75, 85, 99, .2)",
=======
   
>>>>>>> Stashed changes
  },
  inputArea: {
    maxWidth: "97%",
    alignSelf: "center",
    width: "100%",
  },
  span: {
    fontSize: 10,
    color: "gray",
    textAlign: "center",
    paddingTop: 5,
  },
});
