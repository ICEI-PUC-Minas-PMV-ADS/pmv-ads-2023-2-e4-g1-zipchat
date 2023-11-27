import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Keyboard,
} from "react-native";
import background from "../../assets/background.png";
import logo from "../../assets/zipchat02.png";
import IconBxsUserCircle from "../../assets/icons/IconBxUserCircle";
import IconLock from "../../assets/icons/IconLock";
import { SigninInput } from "../components/SigninInput";
import { useNavigation } from "@react-navigation/native";
import {auth, post} from '../agent';

export default function SignIn() {
  const [keyboardIsOpen, setKeyboardIsOpen] = useState(false);
  const [isFiledEmpty, setIsFiledEmpty] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [signin, setSignin] = useState({
    email: "",
    password: "",
  });

  const navigation = useNavigation();

  const handleInput = (fieldName, value) => {
    setSignin({ ...signin, [fieldName]: value });
  };

  const doLogin = async () => {
    setLoginError(false);
    const signInValues = Object.values(signin);
    const emptyField = signInValues.some((value) => value === "");
    if (emptyField) {
      setIsFiledEmpty(true);
      return console.log("vazio");
    }
    setIsFiledEmpty(false);
    
    // PARTE API
    auth(signin)
    .then(authSuccess => {
      if(authSuccess){
        navigation.reset({ routes: [{ name: "Chat" }] });    
      } else {
        console.log('Falha na autenticação')
      }
    })
    .catch(error => {
      setLoginError(true)
    })

    // navigation.reset({ routes: [{ name: "Chat" }] });
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
    <ImageBackground source={background} style={styles.container}>
      <View style={styles.wrapper}>
        <View style={[styles.logo, { display: keyboardIsOpen ? "none" : "" }]}>
          <Image
            source={logo}
            style={styles.img}
            alt="logo"
            resizeMode="contain"
          />
        </View>
        <View style={styles.conatiner_login}>
          <View
            behavior= "padding"
            style={styles.login}
          >
            <SigninInput
              placeholder="E-mail"
              value={signin.email}
              onChangeText={(t) => handleInput("email", t)}
              icon={
                <IconBxsUserCircle width={26} height={26} style={styles.icon} />
              }
            />

            <SigninInput
              placeholder="Password"
              value={signin.password}
              password={true}
              onChangeText={(t) => handleInput("password", t)}
              icon={<IconLock width={26} height={26} style={styles.icon} />}
            />

            {loginError && (
              <Text style={styles.errorText}>
                Usuário e/ou senha incorretos.
              </Text>
            )}

            {isFiledEmpty && (
              <Text style={styles.errorText}>
                Preencha todos os campos
              </Text>
            )}

            <View style={styles.forgotPasswordContainer}>
              <Text
                onPress={() =>
                  navigation.reset({ routes: [{ name: "ForgottenPassword" }] })
                }
                style={styles.forgotPassword}
              >
                Esqueceu password ?
              </Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={doLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.textContainer}>
              <Text style={[styles.textContainertext, styles.customText]}>
                Não tem uma conta ?
              </Text>
              <Text
                onPress={() =>
                  navigation.reset({ routes: [{ name: "SignUp" }] })
                }
                style={styles.textContainertext}
              >
                Crie um conta.
              </Text>
            </View>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  logo: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },

  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
  },

  img: {
    marginTop: 30,
    width: "60%",
    marginTop: "25%",
  },

  conatiner_login: {
    flex: 1,
    width: "100%",
  },

  login: {
    backgroundColor: "white",
    flex: 1,
    marginTop: 50,
    marginBottom: 40,
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 15,
    justifyContent: "center",
    justifyContent: "space-evenly",
  },
  icon: {
    color: "white",
  },

  forgotPasswordContainer: {
    margin: 3,
    padding: 4,
    alignItems: "flex-end",
  },

  forgotPassword: {
    color: "#3685CD",
    fontSize: 12,
    width: "50%",
  },

  button: {
    backgroundColor: "#00BF63",
    borderRadius: 30,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    fontWeight: "900",
    color: "white",
    fontSize: 20,

    width: "40%",
    textAlign: "center",
  },

  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainertext: {
    color: "#3685CD",
    fontSize: 12,
    padding: 4,
  },
  customText: {
    color: "black",
  },
});
