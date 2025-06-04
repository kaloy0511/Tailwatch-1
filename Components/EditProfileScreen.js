import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import EditProfileStyles from "../StyleSheet/EditProfileStyles";
import { getCurrentUser, saveUser } from "./UsersArray";

const EditProfileScreen = ({ navigation }) => {
  // State for editable user details
  const [userDetails, setUserDetails] = useState({
    lastName: "",
    firstName: "",
    phoneNumber: "",
    username: "",
    email: "",
  });

  // Load current user data
  useEffect(() => {
    const fetchUserData = async () => {
      const user = await getCurrentUser();
      if (user) {
        setUserDetails(user);
      }
    };

    fetchUserData();
  }, []);

  // Handle save action
  const handleSave = async () => {
    try {
      // Get all users
      const users = await AsyncStorage.getItem("users");
      let usersArray = users ? JSON.parse(users) : [];

      // Find and update the logged-in user in usersArray
      const updatedUsers = usersArray.map((user) =>
        user.username === userDetails.username ? userDetails : user
      );

      // Save updated user list
      await AsyncStorage.setItem("users", JSON.stringify(updatedUsers));

      // Save updated current user
      await AsyncStorage.setItem("currentUser", JSON.stringify(userDetails));

      Alert.alert("Success", "Profile updated successfully!");
      navigation.goBack();
    } catch (error) {
      console.error("Error saving profile:", error);
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
        <Text style={EditProfileStyles.infoText}>Last Name:</Text>
        <TextInput
          style={EditProfileStyles.input}
          value={userDetails.lastName}
          onChangeText={(text) => setUserDetails({ ...userDetails, lastName: text })}
        />

        <Text style={EditProfileStyles.infoText}>First Name:</Text>
        <TextInput
          style={EditProfileStyles.input}
          value={userDetails.firstName}
          onChangeText={(text) => setUserDetails({ ...userDetails, firstName: text })}
        />

        <Text style={EditProfileStyles.infoText}>Phone Number:</Text>
        <TextInput
          style={EditProfileStyles.input}
          value={userDetails.phoneNumber}
          onChangeText={(text) => setUserDetails({ ...userDetails, phoneNumber: text })}
        />

        <Text style={EditProfileStyles.infoText}>Username:</Text>
        <TextInput
          style={EditProfileStyles.input}
          value={userDetails.username}
          onChangeText={(text) => setUserDetails({ ...userDetails, username: text })}
        />

        <Text style={EditProfileStyles.infoText}>Email:</Text>
        <TextInput
          style={EditProfileStyles.input}
          value={userDetails.email}
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
