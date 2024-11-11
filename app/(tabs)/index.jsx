import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import Navbar from "../../components/navbar";
import MatchToday from "../../components/matchtoday";
import ActionContainer from "../../components/actionContainer";
import { Feather } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import JoinUs from "../../components/joinus";
export default function index() {
  let [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      {/* Conditional Rendered Component */}
      <MatchToday />
      <View style={styles.actionContainers}>
        <ActionContainer
          header="Book a court"
          subText="if you already know who you are playing with"
          icon={<Feather name="book" size={40} color="black" />}
        />
        <ActionContainer
          header="Find open match"
          subText="if you looking for players available to play today"
          icon={<Feather name="search" size={40} color="black" />}
        />
      </View>
      <View style={styles.actionContainers}>
        <ActionContainer
          header="Play a tournament"
          icon={
            <MaterialCommunityIcons
              name="trophy-award"
              size={40}
              color="black"
            />
          }
          single={true}
        />
        <ActionContainer
          header="Book your coach"
          icon={
            <MaterialIcons name="manage-accounts" size={40} color="black" />
          }
          single={true}
        />
      </View>
      <JoinUs />
    </SafeAreaView>
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
    justifyContent: "space-evenly",
  },
});
