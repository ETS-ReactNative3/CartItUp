import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import {
  SignupScreenMainView,
  BackArrowContainer,
  BackArrow,
  SignUpText,
  ModifiedInputContainer,
  MainButton,
  CenteredText,
  Spacer,
  EndingText,
  EndingSignUpLink,
  EndingViewContainer,
} from "../style/SignUpScreen";
import TextInput from "react-native-text-input-interactive";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);

  const GoToMainScreen = () => {
    navigation.navigate("Main");
  };
  const GoToLoginScreen = () => {
    navigation.navigate("LoginScreen");
  };
  return (
    <SignupScreenMainView>
      <TouchableOpacity onPress={GoToMainScreen}>
        <BackArrowContainer>
          <BackArrow>&#8592;</BackArrow>
        </BackArrowContainer>
      </TouchableOpacity>
      <SignUpText> Signup </SignUpText>
      <ModifiedInputContainer>
        <TextInput
          onChangeText={(e) => setName(e)}
          placeholder="Name"
          value={name}
        />
        <Spacer />
        <TextInput
          onChangeText={(e) => setEmail(e)}
          value={email}
        />
        <Spacer />
        <TextInput
          placeholder="Password"
          onChangeText={(e) => setPassword(e)}
          value={password}
          secureTextEntry={true}
        />
        <Spacer />
        <TouchableOpacity>
          <MainButton
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#667EEA", "#64B6FF"]}
          >
            <CenteredText> Sign Up </CenteredText>
          </MainButton>
        </TouchableOpacity>
      </ModifiedInputContainer>
      <EndingViewContainer>
        <EndingText>         
          Already Have an Account  
        </EndingText>
            <EndingSignUpLink onPress={GoToLoginScreen}>             
             Log In
            </EndingSignUpLink>
      </EndingViewContainer>
    </SignupScreenMainView>
  );
};

export default SignUpScreen;
