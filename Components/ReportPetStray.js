import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, Alert, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

const { width, height } = Dimensions.get("window");

const ReportPetStray = () => {
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
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Report Pet/Stray</Text>
      <TouchableOpacity onPress={handleImageUpload} style={styles.imageContainer}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Text style={styles.imagePlaceholder}>Picture of reported animal</Text>
        )}
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        multiline
        numberOfLines={4}
        placeholder="Describe the incident..."
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Report</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fceed3",
    alignItems: "center",
    padding: 16,
  },

  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    padding: 10,
  },

  backButtonText: {
    fontSize: 16,
    color: "#6d4c41",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6d4c41",
    marginTop: 60,
    marginBottom: 20,
  },

  imageContainer: {
    width: 200,
    height: 200,
    backgroundColor: "#d4a373",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginBottom: 20,
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },

  imagePlaceholder: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },

  input: {
    width: "90%",
    height: 100,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    borderColor: "#d4a373",
    borderWidth: 1,
    marginBottom: 20,
  },

  submitButton: {
    backgroundColor: "#e76f51",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    width: "90%",
  },

  submitButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ReportPetStray;
