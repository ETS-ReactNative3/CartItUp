import styled from "styled-components/native"
import LinearGradient from "react-native-linear-gradient"


export const MainHomeView = styled.View` 
flex:1;
background-color: rgba(27,27,27,0.8);
`

export const HomeMainHeaderView = styled.View` 
flex:0.04;
background-color: rgba(27,27,27,1);
display:flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding-left: 20px;
padding-right: 20px;
`

export const HalfHeader = styled.View` 
display:flex;
flex-direction: row;
`

export const FilterImg = styled.Image`
margin-left: 20px;
 `

export const CartImg = styled.Image`
margin-left: 20px;
width:20px;
height:20px;
`

export const SearchBarContainer = styled.View` 
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(27,27,27,0);
margin:20px;
border-radius: 7px;

`

export const SearchBar = styled.TextInput` 
width:100%;
color: rgba(256,256,256,0.4);


`

export const CategoryContainer = styled.View` 
padding:20px;

`

export const ImgBack = styled.ImageBackground` 
width:114px;
height:64px;
margin:10px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 12px;
`

export const TextImgBack = styled.Text` 
color:#fff;
`

export const GradientImgBack = styled(LinearGradient)`
width:114px;
height:64px;
display: flex;
justify-content: center;
align-items: center;
opacity:0.5;
`

export const CenteredDiv = styled.View` 
flex:1;
display: flex;
justify-content: center;
align-items: center;
`

export const NotFoundText = styled.Text` 
font-size: 30px;
color:red;
font-family: 'Segoe-UI';
`