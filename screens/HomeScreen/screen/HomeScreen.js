import React, { useEffect, useState } from "react";
import {
  TextInput,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import {
  CenteredDiv,
  NotFoundText,
  MainHomeView,
  HomeMainHeaderView,
  HalfHeader,
  FilterImg,
  CartImg,
  SearchBarContainer,
  SearchBar,
  CategoryContainer,
  ImgBack,
  TextImgBack,
  GradientImgBack,
  CategoryText,
} from "../style/HomeScreenStyles";
import { Data } from "../utils/FlatListData";

const HomeScreen = () => {
  const [user, setUser] = useState(null);
  const [userName, setuserName] = useState(null);
  const [clothingData, setClothingData] = useState(null);

  useEffect(() => {
    auth().onAuthStateChanged((us) => {
      setUser(us);
      if (us !== null) {
        setuserName(us.displayName);
      } else {
        setuserName("Not Found");
      }
    });

    firestore()
      .collection("All_Products")
      .get()
      .then((data) => {
        setClothingData(data.docs);
      });
  }, []);

  const renderItems = ({ item }) => {
    return (
      <TouchableOpacity>
        <ImgBack imageStyle={{borderRadius:12}} source={item.Image}>
          <GradientImgBack
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={[item.Colors1, item.Colors2]}
          >
            <TextImgBack> {item.Name} </TextImgBack>
          </GradientImgBack>
        </ImgBack>
      </TouchableOpacity>
    );
  };

  return (
    <MainHomeView>
      {user ? (
        <MainHomeView>
          <HomeMainHeaderView style={{ elevation: 1 }}>
            <TouchableOpacity>
              <Image source={require("../assets/icons/Menu-Bar.png")} />
            </TouchableOpacity>
            <HalfHeader>
              <TouchableOpacity>
                <CartImg
                  source={require("../assets/icons/shopping-cart.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <FilterImg source={require("../assets/icons/filter.png")} />
              </TouchableOpacity>
            </HalfHeader>
          </HomeMainHeaderView>
          <SearchBarContainer style={{ elevation: 2 }}>
            <SearchBar
              inlineImageLeft="search_icon"
              inlineImagePadding={40}
              placeholder="Search Anything"
              placeholderTextColor="rgba(256,256,256,0.4)"
            />
          </SearchBarContainer>
          <CategoryContainer>
            <CategoryText> Categories </CategoryText>
            <FlatList data={Data} horizontal={true} renderItem={renderItems} />
          </CategoryContainer>
        </MainHomeView>
      ) : (
        <ImageBackground
          style={{ flex: 1 }}
          source={require("../assets/images/404.jpg")}
        />
      )}
    </MainHomeView>
  );
};

export default HomeScreen;
