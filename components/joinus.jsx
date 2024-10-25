import { Text, View, StyleSheet } from "react-native";
import { color } from "../assets/colors";
import { Feather } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

export default function JoinUs() {
  return (
    <View style={styles.container}>
      <Text style={styles.topHalf}>Join our community</Text>
      <View style={styles.bottomHalf}>
        <Feather name="twitter" size={35} color="black" />
        <Feather name="instagram" size={35} color="black" />
        <FontAwesome6 name="whatsapp" size={35} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topHalf: {
    height: "40%",
    backgroundColor: color.gray,
    fontSize: 20,
    textAlign: "center",
  },
  bottomHalf: {
    height: "60%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  container: {
    marginHorizontal: "auto",
    marginVertical: 10,
    overflow: "hidden",
    width: "90%",
    height: 80,
    borderRadius: 50,
    backgroundColor: "white",
  },
});
