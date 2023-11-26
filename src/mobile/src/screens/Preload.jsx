<<<<<<< Updated upstream
import React, {useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {  useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Splash } from '../components/Splash';

// A tela é para verificar se existe algum token 
=======
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Splash } from "../components/Splash";

// A tela é para verificar se existe algum token
>>>>>>> Stashed changes
// e enviar usuáiro para chat ou login

export default function Preload() {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("token");
      if (token !== null) {
        //código que checa e valido o token
        //se já houver um token e for OK, vai para tela do chat
<<<<<<< Updated upstream
        console.log("FALSE")
        navigation.reset({ routes: [{ name: "Chat" }] });
      } else {
        setTimeout(() => {

          navigation.navigate("SignIn");
        }, 2000)
=======
        console.log("FALSE");
        navigation.reset({ routes: [{ name: "Chat" }] });
      } else {
        setTimeout(() => {
          navigation.navigate("SignIn");
        }, 2000);
>>>>>>> Stashed changes
      }
    };

    checkToken();
  }, []);

  return (
    <>
<<<<<<< Updated upstream
    <Splash />
    <StatusBar style='auto' />
=======
      <Splash />
      <StatusBar style="auto" />
>>>>>>> Stashed changes
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< Updated upstream
    backgroundColor: '#E6E4DF',
    alignItems: 'center',
    justifyContent: 'center',
=======
    backgroundColor: "#E6E4DF",
    alignItems: "center",
    justifyContent: "center",
>>>>>>> Stashed changes
  },
});
