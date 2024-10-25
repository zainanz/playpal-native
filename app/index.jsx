import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import Navbar from "../components/navbar";
import MatchToday from "../components/matchtoday";
import ActionContainer from "../components/actionContainer";
import { Feather } from "@expo/vector-icons";
export default function index() {
  let [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Navbar />
      {/* Conditional Rendered Component */}
      <MatchToday />
      <View style={styles.actionContainers}>
        <ActionContainer
          icon={<Feather name="search" size={40} color="black" />}
        />
        <ActionContainer
          icon={<Feather name="addusergroup" size={40} color="black" />}
        />
      </View>
      <View style={styles.actionContainers}>
        <ActionContainer
          icon={<Feather name="game" size={40} color="black" />}
          single={true}
        />
        <ActionContainer
          icon={<Feather name="game" size={40} color="black" />}
          single={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  actionContainers: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
  },
});
