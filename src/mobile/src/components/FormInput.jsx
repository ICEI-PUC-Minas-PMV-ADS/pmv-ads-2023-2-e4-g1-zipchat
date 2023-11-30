import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { useThemeProvider } from "../theme/themeProvider";

export function FormInput({ onChangeText, value, placeholder }) {
  const {theme} = useThemeProvider()
  return (
    <View style={[styles.container, {backgroundColor: theme.backgroudColorForm}]}>
      <TextInput
        style={[styles.input, {color: theme.color}]}
        required
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={'gray'}
        underlineColorAndroid="transparent"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 
    padding: 4,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "5%",
    marginTop: 15

  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 15,
    
  },

});
