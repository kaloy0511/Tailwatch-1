import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, Alert, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ReportScreenStyles from "../StyleSheet/ReportScreenStyles";
import * as ImagePicker from "expo-image-picker";

const { width, height } = Dimensions.get("window");

const ReportScreen = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

  const handleImageUpload = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const handleSubmit = () => {
    Alert.alert("Report Submitted", "Your report has been successfully delivered.", [
      { text: "OK", onPress: () => navigation.navigate("Home") }
    ]);
  };

  return (
    <View style={ReportScreenStyles.container}>  {/* ✅ Fixed */}
      <TouchableOpacity onPress={() => navigation.navigate("Home")} style={ReportScreenStyles.backButton}>
        <Text style={ReportScreenStyles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Text style={ReportScreenStyles.title}>Report Pet</Text>
      <TouchableOpacity onPress={handleImageUpload} style={ReportScreenStyles.imageContainer}>
        {image ? (
          <Image source={{ uri: image }} style={ReportScreenStyles.image} />
        ) : (
          <Text style={ReportScreenStyles.imagePlaceholder}>Picture of reported animal</Text>
        )}
      </TouchableOpacity>
      <TextInput
        style={ReportScreenStyles.input}
        multiline
        numberOfLines={4}
        placeholder="Describe the incident..."
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity style={ReportScreenStyles.submitButton} onPress={handleSubmit}>
        <Text style={ReportScreenStyles.submitButtonText}>Submit Report</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReportScreen;
