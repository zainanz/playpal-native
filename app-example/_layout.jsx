import { Text } from 'react-native';
import 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from "react";
export default function RootLayout() {

  return (
   <SafeAreaView>
      <Text>
          Hello world
      </Text>
   </SafeAreaView>
  );
}
