import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import IconLogoutBoxLine from "../../../assets/icons/IconLogoutBoxLine";

const handleLogout = () => {};

export function UserArea({}) {
  return (
    <View style={styles.container}>

      <View style={styles.nameArea}>
        <Text style={styles.userName} numberOfLines={1} ellipsizeMode="tail">
          Olá username !
        </Text>
      </View>

      <IconLogoutBoxLine width={20} height={20} style={styles.icon} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    paddingVertical: 5,
    alignContent: "center",

  },
  nameArea: {
    flex: 2,

  },
  iconArea: {
    flex: 1,
    backgroundColor: "red",

  },
  userName: {
    fontSize: 15,
    color: "white",
  },
  icon: {
    color: 'white',
    
  }
});
