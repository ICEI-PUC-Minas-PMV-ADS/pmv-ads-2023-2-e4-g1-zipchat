import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

export function SigninInput({
  onChangeText,
  value,
  placeholder,
  icon,
  showPassword
}) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{icon}</View>

      <TextInput
        style={styles.input}
        required
        secureTextEntry={showPassword}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E1E1",
    padding: 4,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "5%",
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 15,
  },

  iconContainer: {
    marginRight: 20,
  },
});
