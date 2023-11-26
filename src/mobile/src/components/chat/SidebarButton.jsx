import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export function SidebarButton({ icon, label, onClick }) {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.icon}>{icon}</View>
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.label}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 6,
    borderTopColor: "rgba(255, 255, 255, 0.4)",
    borderTopWidth: 1,
    padding: 16,
    fontSize: 8,
  },
  icon: {
    marginRight: 6,
  },
  label: {
    flex: 1,
    flexDirection: "row",
    color: "white",
  },
});
