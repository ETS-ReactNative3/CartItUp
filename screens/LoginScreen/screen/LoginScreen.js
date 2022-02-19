import React from "react";
import { Text, TouchableOpacity } from "react-native";
import {
  LoginScreenMainView,
  BackArrowContainer,
  BackArrow,
} from "../style/LoginScreenStyles";

const LoginScreen = ( {navigation} ) => {

    const GoToMainScreen = () => {
        navigation.navigate("Main")
    }
  return (
    <LoginScreenMainView>
      <TouchableOpacity onPress={GoToMainScreen}>
        <BackArrowContainer>
          <BackArrow>&#8592;</BackArrow>
        </BackArrowContainer>
      </TouchableOpacity>
      <Text> Hello </Text>
    </LoginScreenMainView>
  );
};

export default LoginScreen;
