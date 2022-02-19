import React, { useState } from "react";
import { Animated, TouchableOpacity } from "react-native";
import {
  LoginScreenMainView,
  BackArrowContainer,
  BackArrow,
  LoginText,
  ModifiedInputContainer,
  MainButton,
  CenteredText,
  Spacer,
  EndingText,
  EndingSignUpLink,
  EndingViewContainer,
} from "../style/LoginScreenStyles";
import TextInput from "react-native-text-input-interactive";

const LoginScreen = ({ navigation }) => {
  const [ animatedText ] = Animated.Value(0);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const GoToMainScreen = () => {
    navigation.navigate("Main");
  };
  const GoToSignUpScreen = () => {
    navigation.navigate("SignUpScreen");
    Animated.timing()
  };
  return (
    <LoginScreenMainView>
      <TouchableOpacity onPress={GoToMainScreen}>
        <BackArrowContainer>
          <BackArrow>&#8592;</BackArrow>
        </BackArrowContainer>
      </TouchableOpacity>
      <LoginText> Login </LoginText>
      <ModifiedInputContainer>
        <TextInput
          style={{ marginBottom: 50 }}
          onChangeText={(e) => setEmail(e)}
          value={email}
        />
        <Spacer />
        <TextInput
          placeholder="Password"
          onChangeText={(e) => setPassword(e)}
          value={password}
        />
        <Spacer />
        <TouchableOpacity>
          <MainButton
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#667EEA", "#64B6FF"]}
          >
            <CenteredText> Log In </CenteredText>
          </MainButton>
        </TouchableOpacity>
      </ModifiedInputContainer>
      <EndingViewContainer>
        <EndingText>         
          Already Have an Account  
        </EndingText>
            <EndingSignUpLink onPress={GoToSignUpScreen}>             
             Sign Up
            </EndingSignUpLink>
      </EndingViewContainer>
    </LoginScreenMainView>
  );
};

export default LoginScreen;
