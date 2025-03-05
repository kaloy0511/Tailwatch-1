import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "../StyleSheet/LoginStyles"; 
import { saveUser, getUsers } from "./UsersArray"; // Import AsyncStorage functions

export default function SignUpScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    if (!fullName || !email || !username || !password) {
      Alert.alert("Error", "All fields are required!");
      return;
    }

    if (!email.includes("@")) {
      Alert.alert("Error", "Please enter a valid email address.");
      return;
    }

    // Check if username already exists
    const users = await getUsers();
    const existingUser = users.find((u) => u.username === username);
    if (existingUser) {
      Alert.alert("Error", "Username is already taken.");
      return;
    }

    // Save user to AsyncStorage
    const newUser = { fullName, email, username, password };
    await saveUser(newUser);

    Alert.alert("Success", "Account created successfully!");
    navigation.navigate("Login"); // Redirect to login screen
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://wallpapercave.com/wp/wp6516704.jpg" }} style={styles.background} />

      <View style={styles.loginBox}>
        <Text style={styles.title}>Create Account</Text>

        <TextInput placeholder="FULL NAME" style={styles.input} placeholderTextColor="#999" value={fullName} onChangeText={setFullName} />
        <TextInput placeholder="EMAIL" style={styles.input} placeholderTextColor="#999" keyboardType="email-address" value={email} onChangeText={setEmail} />
        <TextInput placeholder="USERNAME" style={styles.input} placeholderTextColor="#999" value={username} onChangeText={setUsername} />
        <TextInput placeholder="PASSWORD" style={styles.input} placeholderTextColor="#999" secureTextEntry value={password} onChangeText={setPassword} />

        <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
          <Text style={styles.signupText}>Sign Up</Text>
          <FontAwesome name="paw" size={20} color="#fff" style={{ marginLeft: 10 }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.bottomText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
