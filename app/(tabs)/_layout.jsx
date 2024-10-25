import { Tabs } from "expo-router";
import { Image, StyleSheet, View, Text } from "react-native";
import { color } from "../../assets/colors";

const CustomTabBarIcon = ({ icon, label, isSelected }) => {
  return (
    <View
      style={[styles.iconContainer, isSelected && styles.selectedContainer]}
    >
      <Image source={icon} style={styles.image} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 85,
          backgroundColor: color.accent,
        },
        tabBarIcon: ({ focused }) => {
          const icon =
            route.name === "index"
              ? require("../../assets/images/home-icon.png")
              : require("../../assets/images/user.png");
          return (
            <CustomTabBarIcon
              icon={icon}
              label={route.name === "index" ? "Home" : "Profile"}
              isSelected={focused}
            />
          );
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: "" }} />
      <Tabs.Screen name="profile" options={{ title: "" }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
  },
  selectedContainer: {
    backgroundColor: color.accentShade,
    borderRadius: 30,
  },
  image: {
    width: 20,
    height: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
});
