import { View, Text, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { Feather } from "@expo/vector-icons";
import { color } from "../assets/colors";
export default function Navbar() {
  return (
    <View style={styles.navContainer}>
      <View style={styles.logoBubble}>
        <Text style={styles.logoText}>PlayPal</Text>
        <Svg
          style={styles.svgLocation}
          width="100"
          height="22"
          viewBox="0 0 35 14"
          fill="blue"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            style={styles.svgPath}
            d="M33.7469 0.00550231C19.3663 0.261077 14.5346 9.35646 13.9247 14L0 0.00550231H33.7469C34.1568 -0.00178271 34.5744 -0.00188532 35 0.00550231H33.7469Z"
            fill={color.accent}
          />
        </Svg>
      </View>
      <View style={styles.rectangle}>
        <Text></Text>
      </View>

      <View style={styles.navDetails}>
        <View style={styles.navdDetailsContainer}>
          <View style={styles.starsContainer}>
            <Feather
              style={styles.starBottom}
              name="star"
              size={18}
              color="white"
            />
            <Feather name="star" size={22} color="white" />
            <Feather
              style={styles.starBottom}
              name="star"
              size={18}
              color="white"
            />
          </View>
          <Text style={styles.PlayerRating}>3.5</Text>
        </View>
        <View style={styles.navdDetailsContainer}>
          <Feather name="message-square" size={24} color="white" />
          <Feather name="bell" size={24} color="white" />
          <View style={styles.settingsMenu}>
            <View style={styles.dash}></View>
            <View style={styles.dash}></View>
            <View style={styles.dash}></View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dash: {
    backgroundColor: "white",
    width: 20,
    height: 3,
    borderRadius: 10,
  },
  settingsMenu: {
    width: 24,
    height: 18,
    justifyContent: "space-between",
    marginHorizontal: 5,
  },
  PlayerRating: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 5,
    color: "white",
  },

  navdDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  starBottom: {
    alignSelf: "flex-end",
  },
  starsContainer: {
    flexDirection: "row",
    height: "70%",
  },
  navDetails: {
    paddingHorizontal: 10,
    flexDirection: "row",
    backgroundColor: color.accent,
    width: "60%",
    height: "80%",
    borderRadius: 20,
    marginTop: 10,
    marginHorizontal: "auto",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rectangle: {
    width: "100%",
    position: "absolute",
    height: 5,
    backgroundColor: color.accent,
  },
  svgPath: {
    width: 30,
    height: 22,
  },
  svgLocation: {
    left: 100,
    top: 0,
    position: "absolute",
  },
  logoText: {
    color: "white",
    fontSize: 21,
    fontFamily: "Poppins-Bold",
  },
  navContainer: {
    flexDirection: "row",
    width: "100%",
  },
  logoBubble: {
    flexDirection: "row",
    width: 144,
    height: 44,
    backgroundColor: color.accent,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
});
