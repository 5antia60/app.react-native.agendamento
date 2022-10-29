import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the Welcome screen</Text>
      <Button
        title="Go to SignIn Screen"
        onPress={() => navigation.navigate("SignIn")} // We added an onPress event which would navigate to the About screen
      />
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

export default Welcome;