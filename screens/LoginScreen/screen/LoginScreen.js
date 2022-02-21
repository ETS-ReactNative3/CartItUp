import React, { useState } from "react";
import { TouchableOpacity, ToastAndroid } from "react-native";
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
  ErrorText,
  ErrorContainer,
} from "../style/LoginScreenStyles";
import TextInput from "react-native-text-input-interactive";
import auth from "@react-native-firebase/auth";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const GoToMainScreen = () => {
    navigation.navigate("Main");
  };
  const GoToSignUpScreen = () => {
    navigation.navigate("SignUpScreen");
  };

  const LogIn = () => {
    if (email && password) {
      auth()
        .signInWithEmailAndPassword(email, password)
        .catch((err) => ToastAndroid(` An Error Occured ${err.code} `, 2000));
    }
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
        <TextInput onChangeText={(e) => setEmail(e)} value={email} />
        <ErrorContainer>
          {!email && <ErrorText> &#9888; Please Enter Your Email </ErrorText>}
        </ErrorContainer>

        <Spacer />
        <TextInput
          placeholder="Password"
          onChangeText={(e) => setPassword(e)}
          value={password}
          secureTextEntry={true}
        />
        <ErrorContainer>
          {!password && (
            <ErrorText> &#9888; Please Enter Your Password </ErrorText>
          )}
        </ErrorContainer>

        <Spacer />
        <TouchableOpacity onPress={LogIn}>
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
        <EndingText>Don't Have an Account</EndingText>
        <EndingSignUpLink onPress={GoToSignUpScreen}>Sign Up</EndingSignUpLink>
      </EndingViewContainer>
    </LoginScreenMainView>
  );
};

export default LoginScreen;
