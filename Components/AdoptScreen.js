import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import adoptStyles from "../StyleSheet/AdoptStyles";

const pets = [
  {
    id: "1",
    name: "Bubba",
    age: "3 Years old",
    concerns: "None",
    breed: "Pomeranian",
    description: "Energetic, trained, doesn't bite",
    image:  require("../assets/dog1.jpg"),// Add image asset here
  },
  {
    id: "2",
    name: "Coco",
    age: "2 Years old",
    concerns: "None",
    breed: "Poodle",
    description: "Friendly, loves cuddles, playful",
    image:  require("../assets/cat.jpg"), // Add image asset here
  },
];

const AdoptScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={adoptStyles.container}>
      {/* Header */}
      <View style={adoptStyles.header}>
        <Image source={require("../assets/logo.png")} style={adoptStyles.logo} /> {/* Add logo asset here */}
        <View style={adoptStyles.navLinks}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={adoptStyles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Adopt")}>
            <Text style={adoptStyles.navText}>Adopt Pets</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Report")}>
            <Text style={adoptStyles.navText}>Report</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Lost")}>
            <Text style={adoptStyles.navText}>Lost Pets</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Image source={null} style={adoptStyles.settingsIcon} /> {/* Add settings icon asset here */}
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={adoptStyles.title}>Pet Adoption</Text>
      <Text style={adoptStyles.subtitle}>Finding a companion?</Text>

      {/* Pet List */}
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 80 }}
        renderItem={({ item }) => (
          <View style={adoptStyles.petCard}>
            <Image source={item.image} style={adoptStyles.petImage} />
            <View style={adoptStyles.petInfo}>
              <Text style={adoptStyles.petName}>Name: {item.name}</Text>
              <Text style={adoptStyles.petDetails}>Age: {item.age}</Text>
              <Text style={adoptStyles.petDetails}>Concerns: {item.concerns}</Text>
              <Text style={adoptStyles.petDetails}>Breed: {item.breed}</Text>
              <Text style={adoptStyles.petDetails}>Description: {item.description}</Text>
            </View>
            <TouchableOpacity style={adoptStyles.reviewButton}>
              <Text style={adoptStyles.reviewButtonText}>Review Full Info</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Bottom Navigation */}
      <View style={adoptStyles.bottomNav}>
        <TouchableOpacity>
          <Image source={null} style={adoptStyles.navIcon} /> {/* Add paw icon asset here */}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Messages")}>
          <Image source={null} style={adoptStyles.navIcon} /> {/* Add messages icon asset here */}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image source={null} style={adoptStyles.navIcon} /> {/* Add home icon asset here */}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Adopt")}>
          <Image source={null} style={adoptStyles.navIcon} /> {/* Add adopt icon asset here */}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AdoptScreen;