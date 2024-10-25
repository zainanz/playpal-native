import { View, Text, StyleSheet } from "react-native";
import { color } from "../assets/colors";
export default function ActionContainer({
  header = "Add your heading",
  subText = "Your subtext here...",
  bannerURL,
  single = false,
  icon,
}) {
  return (
    <>
      {single ? (
        <View style={[styles.singleContainer]}>
          <View style={styles.iconContainer}>{icon}</View>
          <Text style={styles.header}>{header}</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={[styles.half, styles.topHalf]}>
            <View style={styles.iconContainer}>{icon}</View>
          </View>
          <View style={[styles.half, styles.bottomHalf]}>
            <Text style={styles.header}>{header}</Text>
            <Text style={styles.subText}>{subText}</Text>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  singleContainer: {
    justifyContent: "center",
    padding: 15,
    width: "45%",
    aspectRatio: 1 / 0.6,
    backgroundColor: "white",
    borderRadius: 15,
  },
  iconContainer: {
    backgroundColor: color.accent,
    width: 60,
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 16,
  },
  subText: {},
  topHalf: {
    backgroundColor: color.gray,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  bottomHalf: {
    padding: 5,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: "white",
  },
  container: {
    width: "45%",
    aspectRatio: 1,
  },
  half: {
    height: "50%",
    width: "100%",
  },
});
