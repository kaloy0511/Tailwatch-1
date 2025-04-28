import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import lostPetStyles from "../StyleSheet/LostStyles";

const lostPets = [
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
  {
    id: "3",
    image: require("../assets/lostdog2.jpg"),
    what: "Lost Dog - Choco",
    when: "March 1, 2025",
    where: "Tower 2, Lobby Entrance",
  },
  {
    id: "4",
    image: require("../assets/lostcat2.jpg"),
    what: "Lost Bird - Kiwi",
    when: "March 4, 2025",
    where: "Tower 4, Balcony Area",
  },
];

const LostScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={lostPetStyles.container}>
      {/* Header */}
      <View style={lostPetStyles.header}>
        <Image source={require("../assets/logo.png")} style={lostPetStyles.logo} />
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

      {/* Lost Pets List */}
      <FlatList
        data={lostPets}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 80 }}
        renderItem={({ item }) => (
          <View style={lostPetStyles.card}>
            <Image source={item.image} style={lostPetStyles.image} />
            <View style={lostPetStyles.info}>
              <TouchableOpacity style={lostPetStyles.infoButton}>
                <Text style={lostPetStyles.infoButtonText}>Review Full Info</Text>
              </TouchableOpacity>
              <Text style={lostPetStyles.text}>
                <Text style={lostPetStyles.label}>What: </Text>
                {item.what}
              </Text>
              <Text style={lostPetStyles.text}>
                <Text style={lostPetStyles.label}>When: </Text>
                {item.when}
              </Text>
              <Text style={lostPetStyles.text}>
                <Text style={lostPetStyles.label}>Where: </Text>
                {item.where}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default LostScreen;