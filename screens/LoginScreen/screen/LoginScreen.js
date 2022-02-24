import React, { useState } from "react";
import {
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
} from "react-native";
import {
  LoginScreenMainView,
  BackArrowContainer,
  RefinedImage,
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
  const [isLoading, setIsLoading] = useState(false);

  const GoToMainScreen = () => {
    setIsLoading(false);
    navigation.navigate("Main");
  };
  const GoToSignUpScreen = () => {
    setIsLoading(false);

    navigation.navigate("SignUpScreen");
  };

  const LogIn = () => {
    setIsLoading(true);
    if (email && password) {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => setIsLoading(false))
        .catch((err) => {
          setIsLoading(false);
          ToastAndroid.show(` An Error Occured ${err.code} `, 2000);
        });
    } else {
      setIsLoading(false);
      ToastAndroid.show(`please Enter Your Email and Password `, 2000);
    }
  };
  return (
    <LoginScreenMainView>
      <TouchableOpacity onPress={GoToMainScreen}>
        <BackArrowContainer>
          <RefinedImage source={require("../assets/icons/back-arrow.png")} />
        </BackArrowContainer>
      </TouchableOpacity>
      <LoginText> Login </LoginText>
      <ModifiedInputContainer>
        <TextInput
          textInputStyle={{
            backgroundColor: "#1b1b1b",
            borderColor: "#fff",
            color: "#fff",
          }}
          onChangeText={(e) => setEmail(e)}
          value={email}
        />
        <ErrorContainer>
          {!email && <ErrorText> &#9888; Please Enter Your Email </ErrorText>}
        </ErrorContainer>

        <Spacer />
        <TextInput
          placeholder="Password"
          onChangeText={(e) => setPassword(e)}
          value={password}
          secureTextEntry={true}
          textInputStyle={{
            backgroundColor: "#1b1b1b",
            borderColor: "#fff",
            color: "#fff",
          }}
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
            {isLoading ? (
              <ActivityIndicator color={"white"} animating={true} />
            ) : (
              <CenteredText> Log In </CenteredText>
            )}
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
