import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProfileStyles from "../StyleSheet/ProfileStyles";
import { getCurrentUser } from "./UsersArray";

const ProfileScreen = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = await getCurrentUser();
      if (user) {
        setUserDetails(user);
      }
    };

    fetchUserData();
  }, []);

  return (
    <SafeAreaView style={ProfileStyles.container}>
      {/* Back Button */}
      <TouchableOpacity style={ProfileStyles.backButton} onPress={() => navigation.goBack()}>
        <Text style={ProfileStyles.backButtonText}>Back</Text> {/* Added arrow for consistency */}
      </TouchableOpacity>

      {/* Title */}
      <Text style={ProfileStyles.title}>My Profile</Text>

      {/* Profile Picture */}
      <View style={ProfileStyles.profilePictureContainer}>
        <Image
          source={
            userDetails?.profilePicture
              ? { uri: userDetails.profilePicture }
              : require("../assets/Belarmino.jpg") // Default profile picture from assets
          }
          style={ProfileStyles.profilePicture}
        />
      </View>

      {/* User Info */}
      {userDetails ? (
        <>
          <Text style={ProfileStyles.userId}>{userDetails.username || "N/A"}</Text>

          <View style={ProfileStyles.infoContainer}>
            <Text style={ProfileStyles.infoText}>Full name: {userDetails.fullName || "N/A"}</Text>
            <Text style={ProfileStyles.infoText}>Username: {userDetails.username || "N/A"}</Text>
            <Text style={ProfileStyles.infoText}>Email: {userDetails.email || "N/A"}</Text>
          </View>
        </>
      ) : (
        <Text style={ProfileStyles.infoText}>Loading user data...</Text>
      )}

      {/* Edit Button - Navigates to Edit Profile Screen */}
      <TouchableOpacity style={ProfileStyles.editButton} onPress={() => navigation.navigate("EditProfile")}>
        <Text style={ProfileStyles.editButtonText}>EDIT INFO</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;
