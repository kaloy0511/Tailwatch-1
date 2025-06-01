import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../StyleSheet/SignUpStyles";
import sampleDogImage from "../assets/sampledog.jpg";

export default function SignUpScreen({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [middleInitial, setMiddleInitial] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async () => {
    if (!firstName || !lastName || !email || !username || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill in all required fields.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    try {
      // Send registration data to the backend
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          middleInitial,
          lastName,
          email,
          username,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save user credentials in AsyncStorage
        const users = JSON.parse((await AsyncStorage.getItem("users")) || "[]");
        users.push({ username, email });
        await AsyncStorage.setItem("users", JSON.stringify(users));

        Alert.alert("Success", "Account created successfully!");
        navigation.navigate("Login");
      } else {
        Alert.alert("Error", data.message || "Unable to register.");
      }
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
            placeholder="FIRST NAME"
            style={styles.input}
            placeholderTextColor="#999"
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            placeholder="MIDDLE INITIAL"
            style={styles.input}
            placeholderTextColor="#999"
            value={middleInitial}
            onChangeText={setMiddleInitial}
          />
          <TextInput
            placeholder="LAST NAME"
            style={styles.input}
            placeholderTextColor="#999"
            value={lastName}
            onChangeText={setLastName}
          />
          <TextInput
            placeholder="EMAIL"
            style={styles.input}
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
          />
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