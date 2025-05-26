import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from "react-native";
import styles from "../StyleSheet/LoginStyles";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Please enter your username and password.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Success", "Login successful!");
        navigation.navigate("Home");
      } else {
        Alert.alert("Error", data.message || "Invalid username or password.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Something went wrong. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo and Title */}
      <View style={styles.titleContainer}>
        <Image
          source={require("../assets/dog-icon.png")} // Replace with your dog icon
          style={styles.dogIcon}
        />
        <Text style={styles.appTitle}>TailWatch</Text>
      </View>

      {/* Login Form */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>USERNAME</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          placeholderTextColor="#999"
          value={username}
          onChangeText={setUsername}
        />

        <Text style={styles.label}>PASSWORD</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity onPress={() => Alert.alert("Forgot Password")} style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>forgot password?</Text>
        </TouchableOpacity>

        {/* Buttons */}
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

      {/* Social Login */}
      <Text style={styles.orLoginWith}>Or login with</Text>
      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          {/* Empty placeholder for Google */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          {/* Empty placeholder for Facebook */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          {/* Empty placeholder for Twitter */}
        </TouchableOpacity>
      </View>
    </View>
  );
}