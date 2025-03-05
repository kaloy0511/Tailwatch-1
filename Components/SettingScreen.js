import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SettingStyles from "../StyleSheet/SettingStyles";

const SettingsScreen = () => {
  return (
    <SafeAreaView style={SettingStyles.container}>
      <Text style={SettingStyles.title}>Settings</Text>

      <TouchableOpacity style={SettingStyles.settingOption}>
        <Text style={SettingStyles.settingText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={SettingStyles.settingOption}>
        <Text style={SettingStyles.settingText}>Pet</Text>
      </TouchableOpacity>
      <TouchableOpacity style={SettingStyles.settingOption}>
        <Text style={SettingStyles.settingText}>Help</Text>
      </TouchableOpacity>
      <TouchableOpacity style={SettingStyles.settingOption}>
        <Text style={[SettingStyles.settingText, { color: "red" }]}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SettingsScreen;
