import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import { StatusBar } from "expo-status-bar";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <RegistrationScreen />
      {/* <StatusBar style="auto" /> */}
      {/* <LoginScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
