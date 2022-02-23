import React, { useEffect, useState } from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

const HomeScreen = () => {
  const [user, setUser] = useState(null);
  const [displayName, setdisplayName] = useState(null);
  const [clothingData, setClothingData] = useState(null);

  useEffect(() => {
    auth().onAuthStateChanged((us) => {
      setUser(us);
      if (us.displayName) {
        setdisplayName(us.displayName);
      }
    });

    firestore()
      .collection("AllProducts")
      .doc("Clothing")
      .collection("Main")
      .get()
      .then((data) => {
        setClothingData(data.docs);
      });
  }, []);

  const SignOut = () => {
    return auth().signOut();
  };
  return (
    <View style={{flex:1,}}>
      <Text>HomeScreen</Text>
      <Text>{user && displayName ? displayName : "Loading..."}</Text>
      <Text>
        {clothingData && user ? clothingData.map((e) => {
              return (
                <View style={{flex:1, padding:20}}>
                  <Text>{e._data.Name}</Text>
                </View>
              );
            })
          : "Loading..."}
      </Text>
      <TouchableOpacity>
        <Button title="Sign Out" onPress={SignOut} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
