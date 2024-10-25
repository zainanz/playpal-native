import { View, Text, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
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
            fill="#B8D8C9"
          />
        </Svg>
      </View>
      <View style={styles.rectangle}>
        <Text></Text>
      </View>
      <View style={styles.navDetails}>
        <Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navDetails: {
    backgroundColor: "#B8D8C9",
    width: "60%",
    height: "80%",
    borderRadius: 20,
    marginTop: 10,
  },
  rectangle: {
    backgroundColor: "#000",
    width: "100%",
    position: "absolute",
    height: 5,
    backgroundColor: "#B8D8C9",
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
    fontSize: 21,
    fontFamily: "Poppins-Bold",
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  logoBubble: {
    flexDirection: "row",
    width: 144,
    height: 44,
    backgroundColor: "#B8D8C9",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
});
