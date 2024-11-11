import { Tabs } from "expo-router";
import { StyleSheet, View, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { color } from "../../assets/colors";

const CustomTabBarIcon = ({ icon, label, isSelected }) => {
  return (
    <View
      style={[styles.iconContainer, isSelected && styles.selectedContainer]}
    >
      <AntDesign name={icon} size={24} color={isSelected ? "black" : "white"} />
      <Text
        style={[
          styles.label,
          isSelected ? styles.colorBlack : styles.colorWhite,
        ]}
      >
        {label}
      </Text>
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
          alignItems: "center",
          overflow: "visible",
        },
        tabBarIcon: ({ focused }) => {
          const icon = route.name === "index" ? "home" : "user";
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
      <Tabs.Screen name="index" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  colorWhite: {
    color: "white",
  },
  colorBlack: {
    color: "black",
  },
  iconContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 65,
    height: 65,
  },
  selectedContainer: {
    backgroundColor: "white",
    borderRadius: 30,
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
