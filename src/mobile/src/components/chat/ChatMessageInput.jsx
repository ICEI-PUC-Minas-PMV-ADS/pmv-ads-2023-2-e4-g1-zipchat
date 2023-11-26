import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
<<<<<<< Updated upstream
=======
import { useThemeProvider } from "../../theme/themeProvider";
>>>>>>> Stashed changes

import IconSend from "../../../assets/icons/IconSend";

export function ChatMessageInput({ onSend, disabled }) {
  const [text, setText] = useState("");

<<<<<<< Updated upstream
=======
  const { theme } = useThemeProvider();

>>>>>>> Stashed changes
  const handleSendMessage = () => {
    if (!disabled && text.trim() !== "") {
      onSend(text);
      setText("");
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          opacity: disabled ? 0.5 : 1,
<<<<<<< Updated upstream
=======
          backgroundColor: theme.backgroundInput,
          borderColor: theme.borderColorInput,
>>>>>>> Stashed changes
        },
      ]}
    >
      <TextInput
<<<<<<< Updated upstream
        style={styles.input}
=======
        style={[styles.input, { color: theme.color }]}
>>>>>>> Stashed changes
        onSubmitEditing={handleSendMessage}
        returnKeyType="send"
        value={text}
        onChangeText={(t) => setText(t)}
        editable={!disabled}
        placeholder="Digite um sintoma"
        placeholderTextColor={"gray"}
      />

      <View style={styles.icon}>
        <IconSend
          width={14}
          height={14}
          style={{ color: "white", opacity: text.length ? 1 : 0.2 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    padding: 8,
    borderRadius: 12,
<<<<<<< Updated upstream
    backgroundColor: "white",
    borderColor: "rgba(31, 41, 55, .2)",
=======
>>>>>>> Stashed changes
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 0,
    borderColor: "transparent",
    backgroundColor: "transparent",
    padding: 2,
<<<<<<< Updated upstream
    color: "black",
=======
>>>>>>> Stashed changes
  },
});
