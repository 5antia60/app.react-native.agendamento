import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const SignIn = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>This is the SignIn screen</Text>
      <Button
        title="Go to DrawerNavigator Screen"
        onPress={() => navigation.navigate("DrawerNavigator")} // We added an onPress event which would navigate to the About screen
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

export default SignIn;