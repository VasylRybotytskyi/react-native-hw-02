import React from "react";
import {
  Button,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";

const windowWidth = Dimensions.get("window").width; // Для ширини екрану
const windowHeight = Dimensions.get("window").height; // Для висоти екрану

export const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/photoBg.png")}
        style={styles.imageBackground}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput style={styles.input} placeholder="Логін" />
          <TextInput
            style={styles.input}
            placeholder="Адреса електронної пошти"
          />
          <TextInput style={styles.input} placeholder="Пароль" />
          <Button
            style={styles.button}
            title="Зареєструватися"
            onPress={() => {}}
          />
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Вже є акаунту?</Text>
            <TouchableOpacity onPress={() => {}}>
              <Text style={[styles.registerText, styles.registerLink]}>
                Увійти
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  imageBackground: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
  contentContainer: {
    display: "flex",
    gap: 16,
    backgroundColor: "rgba(255, 255, 255, 1)",
    paddingTop: 32,
    paddingBottom: 144,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "absolute",
    bottom: 0,
    left: 0,
    width: windowWidth,
  },
  title: {
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",
  },
  input: {
    width: "100%",
    height: 40,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "rgba(232, 232, 232, 1)",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  registerText: {
    fontWeight: 400,
    fontSize: 16,
    color: "#212121",
  },
  registerLink: {
    color: "blue",
    marginLeft: 5,
  },
});
