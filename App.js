import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "@pages/login";
import HomeScreen from "@pages/home";
import { LockPortraitOrientation } from "helpers";

const Stack = createNativeStackNavigator();

export default function App() {
  LockPortraitOrientation();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
