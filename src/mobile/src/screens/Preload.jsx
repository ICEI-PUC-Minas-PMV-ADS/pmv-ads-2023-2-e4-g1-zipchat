import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Splash } from "../components/Splash";

// A tela é para verificar se existe algum token
// e enviar usuáiro para chat ou login

export default function Preload() {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("token");
      if (token !== null) {
        //código que checa e valido o token
        //se já houver um token e for OK, vai para tela do chat
        console.log("FALSE");
        navigation.reset({ routes: [{ name: "Chat" }] });
      } else {
        setTimeout(() => {
          navigation.navigate("SignIn");
        }, 2000);
      }
    };

    checkToken();
  }, []);

  return (
    <>
      <Splash />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E4DF",
    alignItems: "center",
    justifyContent: "center",
  },
});
