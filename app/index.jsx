import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const Index = () => {
  return (
    <View style={styles.container}>
      <Text>PlayPal</Text>
    </View>
  );
};

export default Index;
