import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";
import styles from "../StyleSheet/LoginStyles";
import { users } from "./UsersArray"; // Import the users array

export default function LoginScreen({ navigation }) {
  const [staySignedIn, setStaySignedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert("Error", "Please enter your username and password.");
      return;
    }

    // Check if the username and password match a stored user
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      Alert.alert("Success", "Login successful!");
      navigation.navigate("Home"); // Redirect to home screen
    } else {
      Alert.alert("Error", "Invalid username or password.");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://wallpapercave.com/wp/wp6516704.jpg" }} style={styles.background} />

      <View style={styles.loginBox}>
        <Text style={styles.title}>Sign in</Text>

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

        <View style={styles.checkboxContainer}>
          <CheckBox
            checked={staySignedIn}
            onPress={() => setStaySignedIn(!staySignedIn)}
            checkedColor="#000"
            containerStyle={{ padding: 0, margin: 0 }}
          />
          <Text style={styles.checkboxText}>Stay Signed in</Text>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <FontAwesome name="arrow-right" size={30} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButton} onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.bottomText}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
