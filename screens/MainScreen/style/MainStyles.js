import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";

export const MainImproved = styled.View`
flex:1;
display:flex;
align-items: center;
padding-top:50px;
background-color: #1b1b1b;
`

export const StyledText = styled.Text`
font-family: 'Segoe-UI';
font-size: 20px;
font-weight: 100;
color:#fff;

`
export const StyledTextBolded = styled.Text`
font-family: 'Segoe-UI';
font-size: 22px;
font-weight: bold;
color:#fff;
`

export const StyledTextPadded = styled.Text`
font-family: 'Segoe-UI';
font-size: 20px;
font-weight: 100;
padding-top: 10px;
color:#fff;
`

export const MainImgContainer = styled.View` 
 flex:1;
 display: flex;
 justify-content: center;
 align-items: center;
`

export const MainButton = styled(LinearGradient)` 
padding:20px;
width:230px;
border-radius: 6px;
margin-bottom:20px;
`
export const CenteredText = styled.Text` 
text-align:center;
font-family: "Segoe-UI";

color:#ffffff;
font-size: 16px;
`


export const StyledSignUpText = styled.Text`
font-family: 'Segoe-UI';
font-size: 16px;
font-weight: 100;
padding-bottom: 40px;
color:#fff;
`