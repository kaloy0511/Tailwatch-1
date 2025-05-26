import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileStyles from "../StyleSheet/ProfileStyles";

const ProfileScreen = ({ navigation, route }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const userId = route.params?.userId; // Assuming userId is passed via navigation params

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/auth/profile?userId=${userId}`);
        const data = await response.json();

        if (response.ok) {
          setUserDetails({
            fullName: `${data.firstName} ${data.middleInitial || ""} ${data.lastName}`.trim(),
            username: data.username,
            email: data.email,
          });
        } else {
          Alert.alert("Error", data.message || "Unable to fetch profile details.");
        }
      } catch (error) {
        console.error(error);
        Alert.alert("Error", "Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  if (loading) {
    return (
      <SafeAreaView style={ProfileStyles.container}>
        <Text style={ProfileStyles.infoText}>Loading user data...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={ProfileStyles.container}>
      {/* Back Button */}
      <TouchableOpacity style={ProfileStyles.backButton} onPress={() => navigation.goBack()}>
        <Text style={ProfileStyles.backButtonText}>Back</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={ProfileStyles.title}>My Profile</Text>

      {/* Profile Picture */}
      <View style={ProfileStyles.profilePictureContainer}>
        <Image
          source={{ uri: userDetails?.profilePicture || "https://via.placeholder.com/100" }}
          style={ProfileStyles.profilePicture}
        />
      </View>

      {/* User Info */}
      {userDetails ? (
        <>
          <View style={ProfileStyles.infoContainer}>
            <Text style={ProfileStyles.infoText}>Full Name: {userDetails.fullName || "N/A"}</Text>
            <Text style={ProfileStyles.infoText}>Username: {userDetails.username || "N/A"}</Text>
            <Text style={ProfileStyles.infoText}>Email: {userDetails.email || "N/A"}</Text>
          </View>
        </>
      ) : (
        <Text style={ProfileStyles.infoText}>No user data available.</Text>
      )}

      {/* Edit Button - Navigates to Edit Profile Screen */}
      <TouchableOpacity style={ProfileStyles.editButton} onPress={() => navigation.navigate("EditProfile")}>
        <Text style={ProfileStyles.editButtonText}>EDIT INFO</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;