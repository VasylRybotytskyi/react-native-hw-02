import React, { useState } from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

const windowWidth = Dimensions.get("window").width; // Для ширини екрану
const windowHeight = Dimensions.get("window").height; // Для висоти екрану

export const RegistrationScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/photoBg.png")}
        style={{ width: windowWidth, height: windowHeight }}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.heading}>Реєстрація</Text>

          <TextInput style={styles.input} placeholder="Логін" />

          <TextInput
            style={styles.input}
            placeholder="Адреса електронної пошти"
          />

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={styles.showPasswordButton}
              onPress={toggleShowPassword}
            >
              <Text style={styles.showPasswordButtonText}>
                {showPassword ? "Приховати" : "Показати"}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Зареєструватися</Text>
          </TouchableOpacity>

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Вже є акаунт?</Text>
            <TouchableOpacity>
              <Text style={styles.loginLink}>Увійти</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    gap: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    height: windowHeight * 0.7,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    position: "absolute",
    bottom: 0,
  },
  heading: {
    fontSize: 30,
    fontWeight: "500",
    marginTop: 94,
    marginBottom: 20,
    textAlign: "center",
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
  passwordContainer: {
    position: "relative",
    width: "100%",
    marginBottom: 27,
  },
  showPasswordButton: {
    position: "absolute",
    right: 10,
    top: 10,
    padding: 5,
  },
  showPasswordButtonText: {
    position: "absolute",
    width: 72,
    height: 19,
    right: 16,
    top: "calc((50% - 19px) / 2 + 0.5px)",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "right",
    color: "#1B4371",
  },
  button: {
    backgroundColor: "#FF6C00",
    width: "100%",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 16,
    paddingTop: 16,
  },
  buttonText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "rgba(255, 255, 255, 1)",
    height: 19,
    textAlign: "center",
  },
  loginContainer: {
    flexDirection: "row",
  },
  loginText: {
    color: "black",
  },
  loginLink: {
    color: "blue",
    marginLeft: 5,
  },
});
