import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Preload from "./src/screens/Preload";
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
import ForgottenPassword from "./src/screens/ForgottenPassword";
import Chat from "./src/screens/Chat";

const { Screen, Navigator } = createNativeStackNavigator();

export default function Navigation() {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Navigator initialRouteName="Preload" screenOptions={screenOptions}>
        <Screen name="Preload" component={Preload} />
        <Screen name="SignIn" component={SignIn} />
        <Screen name="SignUp" component={SignUp} />
        <Screen name="ForgottenPassword" component={ForgottenPassword} />
        <Screen name="Chat" component={Chat} />
      </Navigator>
    </NavigationContainer>
  );
}
