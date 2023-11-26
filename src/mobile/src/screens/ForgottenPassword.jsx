<<<<<<< Updated upstream
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
=======
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
} from "react-native";
>>>>>>> Stashed changes
import IconChevroBack from "../../assets/icons/IconChevroBack";
import { useNavigation } from "@react-navigation/native";
import lock from "../../assets/lock.png";
import { SignupInput } from "../components/SignupInput";

export default function ForgottenPassword() {
<<<<<<< Updated upstream
  const [recoveryPass, setRecoveryPass] = useState({
    email: "",
    password: ""
=======
  const [keyboardIsOpen, setKeyboardIsOpen] = useState(false);
  const [recoveryPass, setRecoveryPass] = useState({
    email: "",
    password: "",
>>>>>>> Stashed changes
  });

  const navigation = useNavigation();

  const handleInput = (fieldName, value) => {
    setRecoveryPass({ ...recoveryPass, [fieldName]: value });
  };

  const doRecoveryPass = () => {
    const signInValues = Object.values(recoveryPass);
    const emptyField = signInValues.some((value) => value === "");

    if (emptyField) {
      return console.log("vazio");
    }
    console.log(recoveryPass);

    // PARTE API

    // navigation.reset({ routes: [{ name: "SignIn" }] });
  };

<<<<<<< Updated upstream
  return (
    <View style={styles.container}>
      <View style={styles.header}>
=======
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardIsOpen(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardIsOpen(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={[styles.header, { display: keyboardIsOpen ? "none" : "" }]}>
>>>>>>> Stashed changes
        <IconChevroBack
          width={40}
          height={40}
          style={styles.headerIcon}
          onPress={() => navigation.reset({ routes: [{ name: "SignIn" }] })}
        />
        <Text style={[styles.headerText, styles.text01]}>Esqueceu sua</Text>
        <Text style={[styles.headerText, styles.text02]}>Senha</Text>
      </View>

      <View style={styles.info}>
        <Image source={lock} style={styles.img} resizeMode="contain" />
        <Text style={styles.infoText01}>Problema em logar</Text>
        <Text style={styles.infoText02}>Entre com um e-mail válido</Text>
      </View>

      <View style={styles.inputSection}>
        <View style={styles.inputContainer}>
          <SignupInput
            placeholder="E-mail"
            value={recoveryPass.email}
            onChangeText={(t) => handleInput("email", t)}
          />

          <SignupInput
            showPassword={true}
            placeholder="Password"
            value={recoveryPass.password}
            onChangeText={(t) => handleInput("password", t)}
          />

          <TouchableOpacity style={styles.button} onPress={doRecoveryPass}>
            <Text style={styles.buttonText}>Resetar Password</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8E8E8",
  },
  header: {
    backgroundColor: "#00A884",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: "26%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  headerIcon: {
    color: "white",
    alignSelf: "flex-start",
    marginLeft: 20,
    padding: 3,
  },
  headerText: {
    color: "white",
    fontSize: 50,
    fontWeight: "700",
    textShadowColor: "gray",
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 5,
  },
  text01: {
    marginLeft: -20,
  },
  text02: {
    marginLeft: 90,
    marginTop: -10,
    fontSize: 60,
  },

  inputSection: {
    marginHorizontal: 30,
    alignItems: "center",
    flex: 1,

    // justifyContent: "space-evenly",
    // height: "60%",
  },

  inputContainer: {
    width: "100%",
    marginTop: 20,
    justifyContent: "space-evenly",
    height: "60%",
  },
  info: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },

  infoText01: {
    fontWeight: "800",
    fontSize: 20,
    marginTop: 16,
  },

  infoText02: {
    fontSize: 17,
    marginTop: 13,
  },

  img: {
    width: 90,
    height: 90,
  },

  button: {
    backgroundColor: "#00BF63",
    borderRadius: 30,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  buttonText: {
    fontWeight: "900",
    color: "white",
    fontSize: 20,

    width: "60%",
    textAlign: "center",
  },
});
