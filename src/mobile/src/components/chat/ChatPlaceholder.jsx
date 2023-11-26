import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
<<<<<<< Updated upstream

export function ChatPlaceholder() {

  return (
    <View style={styles.container}>
      <Text style={styles.Name}>ZIPCHAT</Text>
      <Text style={styles.span}>Digite algum sintoma 👌 </Text>
=======
import { useThemeProvider } from "../../theme/themeProvider";

export function ChatPlaceholder() {
  const {theme} = useThemeProvider();
  return (
    <View style={styles.container}>
      <Text style={[styles.Name, {color: theme.color}]}>ZIPCHAT</Text>
      <Text style={[styles.span, {color: theme.color}]}>Digite algum sintoma 👌 </Text>
>>>>>>> Stashed changes
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  Name: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 30,
<<<<<<< Updated upstream
    color: 'black'
=======

>>>>>>> Stashed changes
  },
  span: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
<<<<<<< Updated upstream
    color: 'black'
=======

>>>>>>> Stashed changes
  },
});
