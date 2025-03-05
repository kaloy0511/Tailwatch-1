import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import lostPetStyles from "../StyleSheet/LostStyles";

const lostPets = [
  {
    id: "1",
    image: require("../assets/lostdog1.jpg"),
    lastSeen: "Downtown Park",
    description: "Golden Retriever missing since March 3, 2025.",
    contact: "(123) 456-7890",
  },
  {
    id: "2",
    image: require("../assets/lostcat1.jpg"),
    lastSeen: "5th Avenue",
    description: "Tabby cat found wandering on March 4, 2025.",
    contact: "(987) 654-3210",
  },
];

const LostScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={lostPetStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../assets/logo.png")} style={lostPetStyles.logo} />
        </TouchableOpacity>
        <TextInput placeholder="What are you looking for?" style={lostPetStyles.searchBar} />
      </View>

      {/* Lost Pets Section */}
      <Text style={lostPetStyles.title}>Community Alerts & Events</Text>
      
      <FlatList
        data={lostPets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={lostPetStyles.eventCard}>
            <Image source={item.image} style={lostPetStyles.eventImage} />
            <View style={lostPetStyles.eventInfo}>
              <TouchableOpacity style={lostPetStyles.infoButton}>
                <Text style={lostPetStyles.buttonText}>Review Full Info</Text>
              </TouchableOpacity>
              <Text style={lostPetStyles.eventText}><Text style={{ fontWeight: 'bold' }}>Last Seen:</Text> {item.lastSeen}</Text>
              <Text style={lostPetStyles.eventText}><Text style={{ fontWeight: 'bold' }}>Description:</Text> {item.description}</Text>
              <Text style={lostPetStyles.eventText}><Text style={{ fontWeight: 'bold' }}>Contact Info:</Text> {item.contact}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default LostScreen;
