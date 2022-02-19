import React from 'react';
import { Text, View , TouchableOpacity } from 'react-native';
import {
   SignUpScreenMainView,
    BackArrowContainer,
    BackArrow,
  } from "../style/SignUpScreen";

const SignUpScreen = ({navigation}) => {
    const GoToMainScreen = () => {
        navigation.navigate("Main")
    }
    return(
    <SignUpScreenMainView>
    <TouchableOpacity onPress={GoToMainScreen}>
      <BackArrowContainer>
        <BackArrow>&#8592;</BackArrow>
      </BackArrowContainer>
    </TouchableOpacity>
    <Text> Hello </Text>
  </SignUpScreenMainView>
)};

export default SignUpScreen;
