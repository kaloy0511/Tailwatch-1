import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import styles from "../StyleSheet/LoginStyles";
import sampleDogImage from "../assets/sampledog.jpg";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Please enter your username and password.");
      return;
    }

    try {
      // Retrieve user credentials from AsyncStorage
      const users = JSON.parse(await AsyncStorage.getItem("users")) || [];
      const user = users.find((user) => user.username === username && user.password === password);

      if (user) {
        Alert.alert("Success", "Login successful!");
        navigation.navigate("Home");
      } else {
        Alert.alert("Error", "Invalid username or password.");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again.");
    }
  };

  return (
    <ImageBackground source={sampleDogImage} style={styles.background}>
      <View style={styles.container}>
        {/* Logo */}
        <Image
          source={{ uri: "https://via.placeholder.com/100" }} // Replace with your logo URL
          style={styles.logo}
        />

        {/* Title */}
        <Text style={styles.appTitle}>TailWatch</Text>

        <View style={styles.loginBox}>
          <TextInput
            placeholder="USERNAME"
            style={styles.input}
            placeholderTextColor="#999"
            value={username}
            onChangeText={setUsername}
          />

          <View style={[styles.passwordContainer, isPasswordFocused && styles.inputFocused]}>
            <TextInput
              placeholder="PASSWORD"
              style={styles.passwordInput}
              placeholderTextColor="#999"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.showPasswordButton}>
              <FontAwesome name={showPassword ? "eye-slash" : "eye"} size={20} color="#000" />
            </TouchableOpacity>
          </View>

          <Text style={styles.forgotPassword}>forgot password?</Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.buttonText}>SIGN-UP</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.registerText}>Register your pet?</Text>
          <TouchableOpacity style={styles.petSignUpButton}>
            <Text style={styles.petSignUpText}>SIGN-UP</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.orLoginWith}>Or login with</Text>

        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="google" size={24} color="#DB4437" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="facebook" size={24} color="#4267B2" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="twitter" size={24} color="#1DA1F2" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}