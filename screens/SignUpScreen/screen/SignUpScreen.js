import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
} from "react-native";
import {
  SignupScreenMainView,
  BackArrowContainer,
  RefinedImage,
  SignUpText,
  ModifiedInputContainer,
  MainButton,
  CenteredText,
  Spacer,
  EndingText,
  EndingSignUpLink,
  EndingViewContainer,
  ErrorText,
  ErrorContainer,
} from "../style/SignUpScreen";
import TextInput from "react-native-text-input-interactive";
import auth from "@react-native-firebase/auth";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const GoToMainScreen = () => {
    setIsLoading(false);
    navigation.navigate("Main");
  };
  const GoToLoginScreen = () => {
    setIsLoading(false);
    navigation.navigate("LoginScreen");
  };

  const createUser = () => {
    if (email && name && password && password.length > 6) {
      setIsLoading(true)
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => auth().currentUser.updateProfile({ displayName: name }))
        .then(() => setIsLoading(false))
        .catch((err) =>
          ToastAndroid.show(` An Error Occured! Please Check ${err.code}`, 2000)
        );
    } else {
      ToastAndroid.show(
        " An Error Occured! Email or Password is incorrect or empty or weak ",
        2000
      );
    }
  };
  return (
    <SignupScreenMainView>
      <TouchableOpacity onPress={GoToMainScreen}>
        <BackArrowContainer>
          <RefinedImage source={require("../assets/icons/back-arrow.png")} />
        </BackArrowContainer>
      </TouchableOpacity>
      <SignUpText> Signup </SignUpText>
      <ModifiedInputContainer>
        <TextInput
          onChangeText={(e) => setName(e)}
          placeholder="Name"
          value={name}
        />
        <ErrorContainer>
          {!name && <ErrorText> &#9888; Please Enter Your Name </ErrorText>}
        </ErrorContainer>
        <Spacer />
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
            <ErrorText> &#9888; Please Enter Your password </ErrorText>
          )}
        </ErrorContainer>

        <Spacer />
        <TouchableOpacity onPress={createUser}>
          <MainButton
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#667EEA", "#64B6FF"]}
          >
            {isLoading ? (
              <ActivityIndicator color={"white"} animating={true} />
            ) : (
              <CenteredText> Sign Up </CenteredText>
            )}
          </MainButton>
        </TouchableOpacity>
      </ModifiedInputContainer>
      <EndingViewContainer>
        <EndingText> Already Have an Account</EndingText>
        <EndingSignUpLink onPress={GoToLoginScreen}>Log In</EndingSignUpLink>
      </EndingViewContainer>
    </SignupScreenMainView>
  );
};

export default SignUpScreen;
