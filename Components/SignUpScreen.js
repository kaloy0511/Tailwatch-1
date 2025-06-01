import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "../StyleSheet/SignUpStyles";

export default function SignUpScreen({ navigation }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSignUp = () => {
    const { firstName, lastName, dob, email, username, password, confirmPassword } = formData;

    if (!firstName || !lastName || !dob || !email || !username || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    // Handle sign-up logic here (e.g., API call)
    Alert.alert("Success", "Account created successfully!");
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Placeholder for the image */}
        <View style={styles.headerImagePlaceholder} />
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonIcon}>←</Text>
        </TouchableOpacity>
      </View>

      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.appTitle}>TailWatch</Text>
      </View>
      <Text style={styles.subtitle}>Account Creation</Text>

      {/* Form */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor="#999"
          value={formData.firstName}
          onChangeText={(value) => handleInputChange("firstName", value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor="#999"
          value={formData.lastName}
          onChangeText={(value) => handleInputChange("lastName", value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Date of Birth"
          placeholderTextColor="#999"
          value={formData.dob}
          onChangeText={(value) => handleInputChange("dob", value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          value={formData.email}
          onChangeText={(value) => handleInputChange("email", value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#999"
          value={formData.username}
          onChangeText={(value) => handleInputChange("username", value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={formData.password}
          onChangeText={(value) => handleInputChange("password", value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={formData.confirmPassword}
          onChangeText={(value) => handleInputChange("confirmPassword", value)}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSignUp}>
          <Text style={styles.submitButtonText}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}