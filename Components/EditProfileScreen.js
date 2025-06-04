import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import EditProfileStyles from "../StyleSheet/EditProfileStyles";
import { getCurrentUser, saveUser } from "./UsersArray";

const EditProfileScreen = ({ navigation }) => {
  // State for editable user details
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    email: "",
    username: "",
  });

  // Load current user data
  useEffect(() => {
    const fetchUserData = async () => {
      const user = await AsyncStorage.getItem("currentUser");
      if (user) {
        setUserDetails(JSON.parse(user)); // Populate state with user details
      }
    };

    fetchUserData();
  }, []);

  // Handle save action
  const handleSave = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      await AsyncStorage.setItem("currentUser", JSON.stringify(data.user)); // Update AsyncStorage with updated user details
      Alert.alert("Success", "Profile updated successfully!");
      navigation.goBack();
    } catch (error) {
      console.error("Error saving profile:", error);
      Alert.alert("Error", "Something went wrong. Please try again.");
    }
  };

  return (
    <SafeAreaView style={EditProfileStyles.container}>
      {/* Back Button */}
      <TouchableOpacity style={EditProfileStyles.backButton} onPress={() => navigation.goBack()}>
        <Text style={EditProfileStyles.backButtonText}>Back</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={EditProfileStyles.title}>Edit Profile</Text>

      {/* Input Fields */}
      <View style={EditProfileStyles.infoContainer}>
        <Text style={EditProfileStyles.infoText}>Full Name:</Text>
        <TextInput
          style={EditProfileStyles.input}
          value={userDetails.fullName || ""}
          onChangeText={(text) => setUserDetails({ ...userDetails, fullName: text })}
        />

        <Text style={EditProfileStyles.infoText}>Username:</Text>
        <TextInput
          style={EditProfileStyles.input}
          value={userDetails.username || ""}
          onChangeText={(text) => setUserDetails({ ...userDetails, username: text })}
        />

        <Text style={EditProfileStyles.infoText}>Email:</Text>
        <TextInput
          style={EditProfileStyles.input}
          value={userDetails.email || ""}
          onChangeText={(text) => setUserDetails({ ...userDetails, email: text })}
        />
      </View>

      {/* Save Button */}
      <TouchableOpacity style={EditProfileStyles.editButton} onPress={handleSave}>
        <Text style={EditProfileStyles.editButtonText}>SAVE CHANGES</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EditProfileScreen;
