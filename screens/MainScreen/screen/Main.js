import React, { useState, useEffect } from "react";
import {
  MainImproved,
  StyledText,
  StyledTextBolded,
  StyledTextPadded,
  MainImgContainer,
  MainButton,
  CenteredText,
  StyledSignUpText,
} from "../style/MainStyles";
import { Image, TouchableOpacity, ActivityIndicator } from "react-native";

export const Main = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  const GoToLoginScreen = () => {
    setIsLoading(true);
    navigation.navigate("LoginScreen");
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  const GoToSignUpScreen = () => {
    navigation.navigate("SignUpScreen");
  };

  return (
    <MainImproved>
      <StyledText>
        Welcome to<StyledTextBolded> Bolt </StyledTextBolded>
      </StyledText>
      <StyledTextPadded> Explore Us </StyledTextPadded>
      <MainImgContainer>
        <Image source={require("../assets/images/Image.png")} />
      </MainImgContainer>
      <TouchableOpacity onPress={GoToLoginScreen}>
        <MainButton
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#667EEA", "#64B6FF"]}
        >
          {isLoading ? (
            <ActivityIndicator color={"white"} animating={true} />
          ) : (
            <CenteredText> Log In </CenteredText>
          )}
        </MainButton>
      </TouchableOpacity>
      <TouchableOpacity onPress={GoToSignUpScreen}>
        <StyledSignUpText> Sign Up </StyledSignUpText>
      </TouchableOpacity>
    </MainImproved>
  );
};
