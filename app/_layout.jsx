// import { Stack } from "expo-router";
// import Secondpage from "./screens/secondpage"
// import Index from ".";
// export default function RootLayout() {
//   return (
//     <Stack.Navigator
//         screenOptions={{
//           headerShown: true,
//         }}
//       >
//         <Stack.Screen name="Index" component={Index}/>
//         <Stack.Screen name="Secondpage" component={Secondpage} />
//       </Stack.Navigator>
//   );
// }

import { Stack } from "expo-router/stack";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
