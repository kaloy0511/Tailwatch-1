import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import lostPetStyles from "../StyleSheet/LostStyles";

const lostPets = [
  {
    id: "1",
    image: require("../assets/lostdog1.jpg"),
    what: "Golden Retriever missing",
    when: "March 3, 2025",
    where: "Downtown Park",
  },
  {
    id: "2",
    image: require("../assets/lostcat1.jpg"),
    what: "Tabby cat found",
    when: "March 4, 2025",
    where: "5th Avenue",
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
              <Text style={lostPetStyles.eventText}><Text style={{ fontWeight: 'bold' }}>What:</Text> {item.what}</Text>
              <Text style={lostPetStyles.eventText}><Text style={{ fontWeight: 'bold' }}>When:</Text> {item.when}</Text>
              <Text style={lostPetStyles.eventText}><Text style={{ fontWeight: 'bold' }}>Where:</Text> {item.where}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default LostScreen;
