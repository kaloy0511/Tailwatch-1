import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../StyleSheet/PetStyles"; // Ensure you have this style file

const PetScreen = () => {
  const [pets, setPets] = useState([
    { id: "1", name: "Buddy", type: "Dog", breed: "Golden Retriever" },
  ]);

  const addPet = async () => {
    if (pets.length >= 2) {
      Alert.alert("Limit Reached", "You can only have 2 pets.");
      return;
    }

    const newPet = { id: "2", name: "Whiskers", type: "Cat", breed: "Siamese" };
    const updatedPets = [...pets, newPet];

    setPets(updatedPets);
    await AsyncStorage.setItem("pets", JSON.stringify(updatedPets));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Pets</Text>

      {/* Pet List */}
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.petCard}>
            <Text style={styles.petName}>{item.name}</Text>
            <Text style={styles.petDetails}>{item.type} - {item.breed}</Text>
          </View>
        )}
      />

      {/* Add Pet Button */}
      <TouchableOpacity
        style={[styles.addButton, pets.length >= 2 && styles.disabledButton]}
        onPress={addPet}
        disabled={pets.length >= 2}
      >
        <Text style={styles.addButtonText}>{pets.length < 2 ? "ADD PET" : "MAX REACHED"}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PetScreen;
