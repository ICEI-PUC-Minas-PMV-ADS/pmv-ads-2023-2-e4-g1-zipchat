import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useThemeProvider } from "../../theme/themeProvider";

export function ChatPlaceholder() {
  const {theme} = useThemeProvider();
  return (
    <View style={styles.container}>
      <Text style={[styles.Name, {color: theme.color}]}>ZIPCHAT</Text>
      <Text style={[styles.span, {color: theme.color}]}>Digite algum sintoma 👌 </Text>
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

  },
  span: {
    color: "white",
    textAlign: "center",
    fontSize: 20,

  },
});
