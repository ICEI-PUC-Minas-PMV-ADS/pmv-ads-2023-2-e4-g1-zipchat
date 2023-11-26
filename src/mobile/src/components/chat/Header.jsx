import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
<<<<<<< Updated upstream
=======
import { useThemeProvider } from "../../theme/themeProvider";
>>>>>>> Stashed changes

import IconMenu from "../../../assets/icons/IconMenu";
import IconAdd from "../../../assets/icons/IconAdd";

export function Header({ openSidebarClick, title, newChackClick, modalVisibility }) {
<<<<<<< Updated upstream
  return (
    <View style={[styles.container, {opacity: modalVisibility ? .1 : 1}]}>
=======
  const {theme} = useThemeProvider();
  return (
    <View style={[styles.container, {opacity: modalVisibility ? .1 : 1, backgroundColor: theme.headerBackground}]}>
>>>>>>> Stashed changes
      <TouchableOpacity onPress={openSidebarClick}>
        <View style={{}}>
          <IconMenu width={24} height={24} style={{ color: "white" }} />
        </View>
      </TouchableOpacity>

      <View style={styles.titleWrapper}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {title}
        </Text>
      </View>

      <TouchableOpacity onPress={newChackClick}>
      <View>
        <IconAdd width={24} height={24} style={{ color: "white" }}/>
      </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "rgb(75 85 99)",
    padding: 12,
<<<<<<< Updated upstream
    backgroundColor: '#00A884'
=======

>>>>>>> Stashed changes
  },
  titleWrapper: {
    marginHorizontal: 8,
  },
  title: {
    color: "white",
    fontSize: 15,
    fontWeight: 'bold'
  },
});
