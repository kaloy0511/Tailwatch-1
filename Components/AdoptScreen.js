import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import adoptStyles from "../StyleSheet/AdoptStyles";

const adoptablePets = [
  {
    id: "1",
    name: "Bella",
    age: "2 years",
    concerns: "None",
    breed: "Golden Retriever",
    description: "A friendly and energetic dog looking for a loving home.",
    image: require("../assets/dog1.jpg"),
  },
  {
    id: "2",
    name: "Whiskers",
    age: "1 year",
    concerns: "Allergy-prone",
    breed: "Persian Cat",
    description: "A calm and affectionate cat in need of a warm home.",
    image: require("../assets/cat1.jpg"),
  },
];

const AdoptScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={adoptStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../assets/logo.png")} style={adoptStyles.logo} />
        </TouchableOpacity>
        <TextInput placeholder="What are you looking for?" style={adoptStyles.searchBar} />
      </View>

      {/* Pet Adoption Section */}
      <Text style={adoptStyles.title}>Pet Adoption</Text>
      <Text style={adoptStyles.subtitle}>Finding a companion?</Text>

      <FlatList
        data={adoptablePets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={adoptStyles.petCard}>
            <Image source={item.image} style={adoptStyles.petImage} />
            <Text style={adoptStyles.petName}>{item.name}</Text>
            <Text style={adoptStyles.petInfo}>Age: {item.age}</Text>
            <Text style={adoptStyles.petInfo}>Breed: {item.breed}</Text>
            <Text style={adoptStyles.petInfo}>Concerns: {item.concerns}</Text>
            <Text style={adoptStyles.petDescription}>{item.description}</Text>
            <TouchableOpacity style={adoptStyles.infoButton}>
              <Text style={adoptStyles.buttonText}>Review Full Info</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default AdoptScreen;
