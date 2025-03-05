import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import SettingStyles from "../StyleSheet/SettingStyles";

const SettingsScreen = ({ navigation }) => {
  
  // Logout function
  const handleLogout = async () => {
    try {
        await AsyncStorage.removeItem("currentUser"); // Remove logged-in user
        Alert.alert("Logged Out", "You have been logged out successfully!");
        navigation.replace("Login");
      } catch (error) {
        console.error("Error logging out:", error);
      }
  };

  return (
    <SafeAreaView style={SettingStyles.container}>
      <Text style={SettingStyles.title}>Settings</Text>

      <TouchableOpacity style={SettingStyles.settingOption} onPress={() => navigation.navigate("Profile")}>
        <Text style={SettingStyles.settingText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={SettingStyles.settingOption} onPress={() => navigation.navigate("PetScreen")}>
        <Text style={SettingStyles.settingText}>Pet</Text>
      </TouchableOpacity>
      <TouchableOpacity style={SettingStyles.settingOption}>
        <Text style={SettingStyles.settingText}>Help</Text>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity style={SettingStyles.settingOption} onPress={handleLogout}>
        <Text style={[SettingStyles.settingText, { color: "red" }]}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SettingsScreen;
