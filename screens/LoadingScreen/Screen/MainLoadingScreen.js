import React from 'react';
import { Image , ActivityIndicator } from 'react-native';
import { LoadingMainView , CenteredData , ActivityIndicatorContainer } from '../styles/MainLoadingStyles';

const MainLoadingScreen = () => {
    return(
    <LoadingMainView colors={['#667EEA', '#64B6FF']} >
        <CenteredData><Image source={require("../assets/images/Logo.png")} /></CenteredData>
        <ActivityIndicatorContainer><ActivityIndicator color="white" size={50} /></ActivityIndicatorContainer>
    </LoadingMainView>
)};

export default MainLoadingScreen;
