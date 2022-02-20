import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";

export const SignupScreenMainView = styled.View`
  flex: 1;
`;
export const BackArrowContainer = styled.View`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-bottom: 10px;
  padding-left: 05px;
`;

export const BackArrow = styled.Text`
  font-size: 35px;
  color: black;
`;
export const SignUpText = styled.Text`
  font-family: "Segoe-Ui";
  font-size: 30px;
  padding-left: 05px;
  padding-top: 10px;
  color: #323232;
`;

export const ModifiedInputContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
`;

export const MainButton = styled(LinearGradient)`
  padding: 20px;
  width: 230px;
  border-radius: 6px;
  margin-bottom: 20px;
`;

export const CenteredText = styled.Text`
  text-align: center;
  font-family: "Segoe-UI";

  color: #ffffff;
  font-size: 16px;
`;

export const Spacer = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const EndingViewContainer = styled.View`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
export const EndingText = styled.Text`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-family: "Segoe-UI";
  text-align: center;
  color: #323232;
  font-size: 16px;
  padding-bottom: 15px;
`;

export const EndingSignUpLink = styled.Text`
  text-align: center;
  color: #323232;
  font-family: "Segoe-UI";
  font-weight: bold;
  font-size: 16px;
  padding-left: 10px;
`;
