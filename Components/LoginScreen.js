import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";
import styles from "./LoginStyles";

export default function LoginScreen({ navigation }) {
  const [staySignedIn, setStaySignedIn] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://wallpapercave.com/wp/wp6516704.jpg" }} style={styles.background} />

      <View style={styles.loginBox}>
        <Text style={styles.title}>Sign in</Text>
        <TextInput placeholder="USERNAME" style={styles.input} placeholderTextColor="#999" />
        <TextInput placeholder="PASSWORD" style={styles.input} placeholderTextColor="#999" secureTextEntry />
        <View style={styles.socialButtons}>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: "#1877F2" }]}>
            <FontAwesome name="facebook" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: "#fff", borderColor: "#999", borderWidth: 1 }]}>
            <FontAwesome name="google" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox 
            checked={staySignedIn} 
            onPress={() => setStaySignedIn(!staySignedIn)} 
            checkedColor="#000" 
            containerStyle={{ padding: 0, margin: 0 }} 
          />
          <Text style={styles.checkboxText}>Stay signed in</Text>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("Home")}>
            <FontAwesome name="arrow-right" size={30} color="#000" />
          </TouchableOpacity>

        {/* Navigate to SignUpScreen when clicked */}
        <TouchableOpacity style={styles.bottomButton} onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.bottomText}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
