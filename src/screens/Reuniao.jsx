import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const Reuniao = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>This is the Reuniao screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Reuniao;