import React, { useEffect, useState } from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

const HomeScreen = () => {
  const [user, setUser] = useState(null);
  const [userName, setuserName] = useState(null);
  const [clothingData, setClothingData] = useState(null);

  useEffect(() => {
    auth().onAuthStateChanged((us) => {
      setUser(us);
      if ( us!== null) {
        setuserName(us.displayName);
      } else {
        setuserName("Not Found");
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
    <View style={{ flex: 1 }}>
      {user ? (
        <View style={{ flex: 1 }}>
          <Text>HomeScreen</Text>
          <Text>{userName ? userName : "Loading..."}</Text>
          <Text>
            {clothingData && user
              ? clothingData.map((e) => {
                  return (
                    <View style={{ flex: 1, padding: 20 }}>
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
      ) : (
       <Text>" Loading .... "</Text>
      )}
    </View>
  );
};

export default HomeScreen;
