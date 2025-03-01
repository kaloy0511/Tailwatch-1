import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./LoginStyles"; // Reusing the same styles

export default function SignUpScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image source={{ uri: "https://wallpapercave.com/wp/wp6516704.jpg" }} style={styles.background} />

      {/* Centered Sign-Up Box */}
      <View style={styles.loginBox}>
        <Text style={styles.title}>Create Account</Text>

        {/* Full Name */}
        <TextInput placeholder="FULL NAME" style={styles.input} placeholderTextColor="#999" />

        {/* Email */}
        <TextInput placeholder="EMAIL" style={styles.input} placeholderTextColor="#999" keyboardType="email-address" />

        {/* Username */}
        <TextInput placeholder="USERNAME" style={styles.input} placeholderTextColor="#999" />

        {/* Password */}
        <TextInput placeholder="PASSWORD" style={styles.input} placeholderTextColor="#999" secureTextEntry />

        {/* Social Sign Up Buttons */}
        <View style={styles.socialButtons}>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: "#1877F2" }]}>
            <FontAwesome name="facebook" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: "#fff", borderColor: "#999", borderWidth: 1 }]}>
            <FontAwesome name="google" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Sign-Up Button */}
        <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.signupText}>Sign Up</Text>
        <FontAwesome name="paw" size={20} color="#fff" style={{ marginLeft: 10 }} />
        </TouchableOpacity>


        {/* Already have an account? */}
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.bottomText}>Already have an account? Login</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}
