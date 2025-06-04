import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, FlatList, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import lostPetStyles from "../StyleSheet/LostStyles";

const LostScreen = () => {
  const navigation = useNavigation();
  const [lostPets, setLostPets] = useState([
    {
      id: "1",
      image: require("../assets/lostdog1.jpg"),
      what: "Lost Dog - Buddy",
      when: "March 3, 2025",
      where: "Tower 1, Garden Area near the Playground",
    },
    {
      id: "2",
      image: require("../assets/lostcat1.jpg"),
      what: "Lost Cat - Mochi",
      when: "February 28, 2025",
      where: "Tower 3, Parking Area, Basement 1",
    },
    
  ]);
  const [expandedItems, setExpandedItems] = useState({});
  const [newPost, setNewPost] = useState({ what: "", when: "", where: "" });

  const toggleDetails = (id) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handlePostSubmit = () => {
    if (!newPost.what || !newPost.when || !newPost.where) {
      Alert.alert("Error", "Please fill out all fields.");
      return;
    }

    const newLostPet = {
      id: (lostPets.length + 1).toString(),
      image: require("../assets/Dog.jpg"), // Placeholder image
      ...newPost,
    };

    setLostPets((prevState) => [...prevState, newLostPet]);
    setNewPost({ what: "", when: "", where: "" });
    Alert.alert("Success", "Lost pet posted successfully!");
  };

  return (
    <View style={lostPetStyles.container}>
      {/* Header */}
      <View style={lostPetStyles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image source={require("../assets/logo.png")} style={lostPetStyles.logo} />
        </TouchableOpacity>
        <TextInput
          placeholder="What are you looking for?"
          placeholderTextColor="#999"
          style={lostPetStyles.searchBar}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Image source={require("../assets/settings.png")} style={lostPetStyles.settingsIcon} />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={lostPetStyles.title}>Lost Pets</Text>

      {/* Post Lost Pet */}
      <View style={lostPetStyles.uploadContainer}>
        <Text style={lostPetStyles.uploadTitle}>Post a Lost Pet</Text>
        <TextInput
          style={lostPetStyles.uploadInput}
          placeholder="Pet Name (e.g., Lost Dog - Buddy)"
          value={newPost.what}
          onChangeText={(text) => setNewPost({ ...newPost, what: text })}
        />
        <TextInput
          style={lostPetStyles.uploadInput}
          placeholder="Date Lost (e.g., March 3, 2025)"
          value={newPost.when}
          onChangeText={(text) => setNewPost({ ...newPost, when: text })}
        />
        <TextInput
          style={lostPetStyles.uploadInput}
          placeholder="Location (e.g., Tower 1, Garden Area)"
          value={newPost.where}
          onChangeText={(text) => setNewPost({ ...newPost, where: text })}
        />
        <TouchableOpacity style={lostPetStyles.submitButton} onPress={handlePostSubmit}>
          <Text style={lostPetStyles.submitButtonText}>Post</Text>
        </TouchableOpacity>
      </View>

      {/* Lost Pets List */}
      <FlatList
        data={lostPets}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 80 }}
        renderItem={({ item }) => (
          <View style={lostPetStyles.card}>
            <Image source={item.image} style={lostPetStyles.image} />
            <View style={lostPetStyles.info}>
              <Text style={lostPetStyles.text}>
                <Text style={lostPetStyles.label}>What: </Text>
                {item.what}
              </Text>
              {expandedItems[item.id] && (
                <>
                  <Text style={lostPetStyles.text}>
                    <Text style={lostPetStyles.label}>When: </Text>
                    {item.when}
                  </Text>
                  <Text style={lostPetStyles.text}>
                    <Text style={lostPetStyles.label}>Where: </Text>
                    {item.where}
                  </Text>
                </>
              )}
              <TouchableOpacity
                style={lostPetStyles.infoButton}
                onPress={() => toggleDetails(item.id)}
              >
                <Text style={lostPetStyles.infoButtonText}>
                  {expandedItems[item.id] ? "Hide Details" : "Review Full Info"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default LostScreen;