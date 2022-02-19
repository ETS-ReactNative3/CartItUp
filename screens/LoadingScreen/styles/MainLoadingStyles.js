import styled from "styled-components/native";
import LinearGradient from 'react-native-linear-gradient';

export const LoadingMainView = styled(LinearGradient)` 
flex : 1;
`
export const CenteredData = styled.View` 
flex:1;
display: flex;
justify-content: center;
align-items: center;
padding-top:80px;
` 
export const ActivityIndicatorContainer = styled.View` 
flex:1;
display: flex;
justify-content: flex-end;
align-items: center;
padding-bottom: 100px;
`