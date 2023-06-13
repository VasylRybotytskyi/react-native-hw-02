import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import { StatusBar } from "expo-status-bar";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen";
import { PostsScreen } from "./Screens/PostsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <PostsScreen />
      {/* <RegistrationScreen /> */}
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
