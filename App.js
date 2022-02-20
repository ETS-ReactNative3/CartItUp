import React, { useEffect, useState } from "react";
import MainLoadingScreen from "./screens/LoadingScreen/Screen/MainLoadingScreen";
import { Text, View } from "react-native";
import { Main } from "./screens/MainScreen/screen/Main";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen/screen/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen/screen/SignUpScreen";
const App = () => {
  const [Loading, setIsLoading] = useState(true);

  const Stack = createNativeStackNavigator();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);
  return (
    <>
      {Loading ? (
        <MainLoadingScreen />
      ) : (
        <>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Main"
                component={Main}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </>
      )}
    </>
  );
};

export default App;
