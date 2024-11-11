import { View, Text, StyleSheet } from "react-native";
export default function MatchToday() {
  return (
    <View style={styles.container}>
      <View style={styles.avatarsContainer}>
        <View style={styles.avatar} />
        <View style={styles.avatar} />
        <View style={styles.avatar} />
      </View>
      <Text style={styles.descriptionText}>Match of the Day</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  descriptionText: {
    fontSize: 20,
    width: "60%",
    textAlign: "center",
  },
  avatarsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "40%",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "gray",
  },
  container: {
    width: "90%",
    height: "10%",
    borderRadius: 17,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 15,
    justifyContent: "space-evenly",
    paddingHorizontal: 10,
  },
});
