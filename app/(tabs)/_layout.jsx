// import { Tabs } from "expo-router";
// import { Image, StyleSheet, View } from "react-native";
// import { color } from "../../assets/colors";

// export default function TabLayout() {
//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: "black",

//         tabBarActiveBackgroundColor: "gray",
//         headerShown: false,
//         tabBarLabelStyle: {
//           fontSize: 16,
//           fontWeight: "bold",
//         },
//         tabBarStyle: {
//           height: 65,
//           padding: 10,
//           backgroundColor: color.accent,
//           justifyContent: "space-around",
//         },
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Home",
//           tabBarIcon: () => (
//             <Image
//               source={require("../../assets/images/home-icon.png")}
//               style={styles.image}
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="profile"
//         options={{
//           title: "Profile",
//           tabBarIcon: () => (
//             <View style={styles.iconContainer}>
//               <Image
//                 source={require("../../assets/images/user.png")}
//                 style={styles.image}
//               />
//             </View>
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }

// const styles = StyleSheet.create({
//   iconContainer: {
//     width: 30,
//     height: 30,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 30,
//     backgroundColor: "green",
//   },
//   image: {
//     width: 24,
//     height: 24,
//   },
// });
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
        tabBarActiveBackgroundColor: "white",
        headerShown: false,
        tabBarStyle: {
          height: 65,
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
    flexDirection: "column", // Stack icon and label
    justifyContent: "center",
    alignItems: "center",
    width: 60, // Width of the container
    height: 60, // Height of the container
  },
  selectedContainer: {
    backgroundColor: "green", // Background color for selected state
    borderRadius: 30, // Circular effect
  },
  image: {
    width: 24,
    height: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
});
