import React, { useEffect, useState } from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import auth from "@react-native-firebase/auth";

const HomeScreen = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth().onAuthStateChanged((us) => setUser(us));
  }, []);

  const SignOut = () => {
    const hel = auth().signOut();
    return hel;
  };
  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>{user ? user.displayName : <Text> Loading ... </Text>}</Text>
      <TouchableOpacity>
        <Button title="Sign Out" onPress={SignOut} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
