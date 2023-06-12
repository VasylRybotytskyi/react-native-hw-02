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
          <View style={styles.image}>
            <Text style={styles.add}>+</Text>
            {/* <Image source={require("../assets/images/add.png")} /> */}
          </View>
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
    paddingTop: 92,
    paddingBottom: 144,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "absolute",
    bottom: 0,
    left: 0,
    width: windowWidth,
    alignItems: "center", // Відцентровує горизонтально
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
    width: "100%",
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  registerText: {
    fontWeight: 400,
    fontSize: 16,
    color: "rgba(27, 67, 113, 1)",
  },
  registerLink: {
    color: "rgba(27, 67, 113, 1)",
    marginLeft: 5,
  },
  image: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    top: -60,
  },
  add: {
    position: "absolute",
    fontSize: 30,
    bottom: 20,
    right: -14,
  },
});
