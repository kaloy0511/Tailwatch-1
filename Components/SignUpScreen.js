import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "../StyleSheet/SignUpStyles";

export default function SignUpScreen({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [middleInitial, setMiddleInitial] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const handleSignUp = async () => {
    if (
      !firstName ||
      !lastName ||
      !email ||
      !username ||
      !password ||
      !confirmPassword ||
      !phoneNumber ||
      !birthdate
    ) {
      Alert.alert("Error", "Please fill in all required fields.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://10.25.10.37:5000/api/auth/register", {
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
          phoneNumber,
          birthdate,
        }),
      });

      const data = await response.json();

      if (response.ok) {
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
    <View style={styles.background}>
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
          <TextInput
            placeholder="FIRST NAME"
            style={styles.input}
            placeholderTextColor="#999"
            value={firstName}
            onChangeText={setFirstName}
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
            placeholder="Phone Number"
            style={styles.input}
            placeholderTextColor="#999"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <TextInput
            placeholder="Birthdate (e.g., YYYY-MM-DD)"
            style={styles.input}
            placeholderTextColor="#999"
            value={birthdate}
            onChangeText={setBirthdate}
          />
          <TouchableOpacity
            style={styles.createAccountButton}
            onPress={handleSignUp}
          >
            <Text style={styles.createAccountButtonText}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}