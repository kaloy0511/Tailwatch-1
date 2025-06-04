import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ReportScreenStyles from "../StyleSheet/ReportScreenStyles";
import * as ImagePicker from "expo-image-picker";

const ReportScreen = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

  const handleImageUpload = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Required", "Please allow access to your gallery.");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    if (!description || !image) {
      Alert.alert("Error", "Please provide an image and a description.");
      return;
    }

    Alert.alert("Report Submitted", "Your report has been successfully delivered.", [
      { text: "OK", onPress: () => navigation.navigate("Home") },
    ]);
  };

  return (
    <View style={ReportScreenStyles.container}>
      {/* Header */}
      <View style={ReportScreenStyles.header}>
        <Image source={require("../assets/logo.png")} style={ReportScreenStyles.logo} /> {/* Add logo asset */}
        <View style={ReportScreenStyles.navLinks}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={ReportScreenStyles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Adopt")}>
            <Text style={ReportScreenStyles.navText}>Adopt Pets</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Report")}>
            <Text style={ReportScreenStyles.navText}>Report</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Lost")}>
            <Text style={ReportScreenStyles.navText}>Lost Pets</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Image source={null} style={ReportScreenStyles.settingsIcon} /> {/* Add settings icon */}
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={ReportScreenStyles.title}>Report Pet/Stray</Text>

      {/* Image Upload */}
      <TouchableOpacity onPress={handleImageUpload} style={ReportScreenStyles.imageContainer}>
        {image ? (
          <Image source={{ uri: image }} style={ReportScreenStyles.image} />
        ) : (
          <Text style={ReportScreenStyles.imagePlaceholder}>upload file</Text>
        )}
      </TouchableOpacity>

      {/* Description */}
      <Text style={ReportScreenStyles.descriptionText}>
        Please provide a brief explanation of the incident, including details such as the type of animal, a description
        of the animal, your contact information, and the date and time of the report.
      </Text>
      <TextInput
        style={ReportScreenStyles.input}
        multiline
        numberOfLines={6}
        placeholder="Describe the incident..."
        value={description}
        onChangeText={setDescription}
      />

      {/* Submit Button */}
      <TouchableOpacity style={ReportScreenStyles.submitButton} onPress={handleSubmit}>
        <Text style={ReportScreenStyles.submitButtonText}>SUBMIT REPORT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReportScreen;