import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

export function SignupInput({
  placeholderTextColor,
  onChangeText,
  value,
  placeholder,
  icon,
  showPassword,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        required
        secureTextEntry={showPassword}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
      />

      <View style={styles.iconContainer}>{icon && icon}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
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
    marginLeft: 20,
  },
});
