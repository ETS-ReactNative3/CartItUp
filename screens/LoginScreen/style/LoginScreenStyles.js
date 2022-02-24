import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";

export const LoginScreenMainView = styled.View`
  flex: 1;
  background-color: #1b1b1b;

`;
export const BackArrowContainer = styled.View`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5px;
`;
export const RefinedImage = styled.Image`
  width: 30px;
  height: 30px;
`;

export const BackArrow = styled.Text`
  font-size: 35px;
  color: black;
`;
export const LoginText = styled.Text`
  font-family: "Segoe-UI";
  font-size: 30px;
  padding-left: 05px;
  padding-top: 10px;
  color: #fff;
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
  color: #fff;
  font-size: 16px;
  padding-bottom: 15px;
`;

export const EndingSignUpLink = styled.Text`
  text-align: center;
  color: #fff;
  font-family: "Segoe-UI";
  font-weight: bold;
  font-size: 16px;
  padding-left: 10px;
`;

export const ErrorContainer = styled.View`
  width: 100%;
  padding-left: 30px;
`;

export const ErrorText = styled.Text`
  color: red;
  font-size: 12px;
  font-family: "Segoe-UI";
`;
