import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        await AsyncStorage.setItem("currentUser", JSON.stringify(data.user));
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
    <View style={styles.background}>
      <View style={styles.container}>
        <Image style={styles.headerImage} />
        <Image style={styles.logo} />
        <View style={styles.appTitleContainer}>
          <Text style={styles.appTitle}>TailWatch</Text>
          <Image
            style={{
              width: 32,
              height: 32,
              backgroundColor: "#ccc",
              borderRadius: 16,
            }}
          />
        </View>
        <View style={styles.loginBox}>
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
          <Text style={styles.forgotPassword}>forgot password?</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.signUpButton}
              onPress={() => navigation.navigate("SignUp")}
            >
              <Text style={styles.buttonText}>SIGN-UP</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.socialButtonsContainer}>
            <Text style={{ color: "#fff", fontFamily: "Fredoka One", fontSize: 16 }}>
              Or login with
            </Text>
            <TouchableOpacity style={styles.socialButton}>
              <Text>G</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Text>F</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Text>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}