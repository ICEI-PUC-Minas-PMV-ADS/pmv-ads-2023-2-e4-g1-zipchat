import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import IconLogoutBoxLine from "../../../assets/icons/IconLogoutBoxLine";
import IconMoon from "../../../assets/icons/IconMoon";
import IconSun from "../../../assets/icons/IconSun";
import { useNavigation } from "@react-navigation/native";
import { useThemeProvider } from "../../theme/themeProvider";
import { removeAccessToken } from '../../services/tokenService'
import { getDecodedAccessToken } from '../../services/tokenService'

export function UserArea({}) {
  const { theme, toggleTheme } = useThemeProvider();
  const [themeIcon, setThemeIcon] = useState("light");
  const [userName, setUserName] = useState("username");
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    if(!booted) {
      getUserName();
    }
  }, [booted])

  const navigation = useNavigation();
  const handleLogout = () => {
    console.log("handleLogout!!!! <<<<<<<<<<<")
      // localStorage.removeItem('access_token');
      removeAccessToken()
      navigation.reset({ routes: [{ name: "SignIn" }] })
  };
 
  const getUserName = async () =>{
    const decodedToken = await getDecodedAccessToken();
    const user = decodedToken.email;
    if(user){
      setUserName(user)
      setBooted(true)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.nameArea}>
        <Text style={styles.userName} numberOfLines={1} ellipsizeMode="tail">
          Olá {userName} !
        </Text>
      </View>

      <IconLogoutBoxLine
        onPress={() => handleLogout()}
        width={20}
        height={20}
        style={styles.icon}
      />
      {themeIcon === "light" ? (
        <TouchableOpacity
          onPress={() => {
            setThemeIcon("dark");
            toggleTheme();
          }}
        >
          <IconMoon width={20} height={20} style={styles.icon} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            setThemeIcon("light");
            toggleTheme();
          }}
        >
          <IconSun width={20} height={20} style={styles.icon} />
        </TouchableOpacity>
      )}
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
    color: "white",
    marginLeft: 20
  },
});
