import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import IconChevroBack from "../../assets/icons/IconChevroBack";
import { SignupInput } from "../components/SignupInput";
import { useNavigation } from "@react-navigation/native";
import IconEyeFill from "../../assets/icons/IconEyeFill";
import IconEyeSlashFill from "../../assets/icons/IconEyeSlashFill";
import { userRegister } from "../agent";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [keyboardIsOpen, setKeyboardIsOpen] = useState(false);
  const [pass, setPass] = useState("");
  const [wrongPass, setWrongPass] = useState(false);
  const [logonError, setLogonError] = useState(false);
  const [sigon, setSigon] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const navigation = useNavigation();

  const handleInput = (fieldName, value) => {
    setSigon({ ...sigon, [fieldName]: value });
  };

  const doLogon = () => {
    setLogonError(false)
    const signInValues = Object.values(sigon);
    const emptyField = signInValues.some((value) => value === "");
    if (emptyField) {
      return console.log("vazio");
    }

    if (sigon.password !== pass) {
      setWrongPass(true);
      setSigon({ ...sigon, password: "" });
      setPass("");
      return console.log("error");
    }

    setWrongPass(false);
    // PARTE API

    userRegister(sigon)
    .then(authSuccess => {
      console.log(authSuccess)
      if(authSuccess){
        navigation.reset({ routes: [{ name: "Chat" }] });
      } else {
        console.log("Falha no cadastro")
      }
    })
    .catch(error => {
      setLogonError(true)
    })

    navigation.reset({ routes: [{ name: "Chat" }] });
  };

  const handleShowPassword = () => {
    return showPassword ? (
      <TouchableOpacity onPress={() => setShowPassword(false)}>
        <IconEyeSlashFill width={26} height={26} style={styles.icon} />
      </TouchableOpacity>
    ) : (
      <TouchableOpacity onPress={() => setShowPassword(true)}>
        <IconEyeFill width={26} height={26} style={styles.icon} />
      </TouchableOpacity>
    );
  };

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
        <IconChevroBack
          width={40}
          height={40}
          style={styles.headerIcon}
          onPress={() => navigation.reset({ routes: [{ name: "SignIn" }] })}
        />
        <Text style={[styles.headerText, styles.text01]}>Crie sua </Text>
        <Text style={[styles.headerText, styles.text02]}>Conta</Text>
      </View>

      <View style={[styles.inputSection, { flex: keyboardIsOpen ? 1 : 0 }]}>
        <SignupInput
          placeholder="Nome"
          value={sigon.name}
          onChangeText={(t) => handleInput("name", t)}
        />

        <SignupInput
          placeholder="Usename"
          I
          value={sigon.username}
          onChangeText={(t) => handleInput("username", t)}
        />

        <SignupInput
          placeholder="E-mail"
          value={sigon.email}
          onChangeText={(t) => handleInput("email", t)}
        />

        <SignupInput
          showPassword={showPassword}
          icon={handleShowPassword()}
          placeholder={wrongPass ? "Senhas não conferem" : "Password"}
          value={pass}
          placeholderTextColor={wrongPass && "red"}
          onChangeText={(t) => setPass(t)}
        />

        <SignupInput
          showPassword={showPassword}
          icon={handleShowPassword()}
          placeholder={wrongPass ? "Senhas não conferem" : "Confirme password"}
          value={sigon.password}
          placeholderTextColor={wrongPass && "red"}
          onChangeText={(t) => handleInput("password", t)}
        />

        {logonError && (
          <Text style={styles.errorMessage}>
            Erro ao cadastrar. Tente novamente.
          </Text>
        )}

        <TouchableOpacity style={styles.button} onPress={doLogon}>
          <Text style={styles.buttonText}>Criar conta</Text>
        </TouchableOpacity>
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
  errorMessage: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
  },
  inputSection: {
    marginTop: 30,
    marginHorizontal: 30,
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "60%",
  },
  icon: {
    color: "gray",
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

    width: "40%",
    textAlign: "center",
  },
});
