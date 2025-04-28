import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../StyleSheet/SignUpStyles";
import sampleDogImage from "../assets/sampledog.jpg";

export default function SignUpScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async () => {
    if (!username || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    try {
      // Save user credentials in AsyncStorage
      const users = JSON.parse(await AsyncStorage.getItem("users")) || [];
      const userExists = users.find((user) => user.username === username);

      if (userExists) {
        Alert.alert("Error", "Username already exists.");
        return;
      }

      users.push({ username, password });
      await AsyncStorage.setItem("users", JSON.stringify(users));

      Alert.alert("Success", "Account created successfully!");
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again.");
    }
  };

  return (
    <ImageBackground source={sampleDogImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.appTitle}>TailWatch</Text>
        <Text style={styles.accountCreationTitle}>Account Creation</Text>

        <View style={styles.signUpBox}>
          <TextInput
            placeholder="USERNAME"
            style={styles.input}
            placeholderTextColor="#999"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            placeholder="PASSWORD"
            style={styles.input}
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            placeholder="CONFIRM PASSWORD"
            style={styles.input}
            placeholderTextColor="#999"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity style={styles.createAccountButton} onPress={handleSignUp}>
            <Text style={styles.createAccountButtonText}>CREATE ACCOUNT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}