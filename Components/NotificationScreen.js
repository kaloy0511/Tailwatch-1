import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NotificationStyles from "../StyleSheet/NotificationStyles.js"; 

const notifications = [
  { id: "1", message: "Your pet adoption request has been approved!" },
  { id: "2", message: "A lost pet has been found near your location." },
  { id: "3", message: "Reminder: Pet vaccination is due next week." },
];

const NotificationScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={NotificationStyles.container}>
      <Text style={NotificationStyles.title}>Notifications</Text>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        contentContainerStyle={NotificationStyles.listContainer}
        renderItem={({ item }) => (
          <View style={NotificationStyles.notificationBox}>
            <Text style={NotificationStyles.notificationText}>{item.message}</Text>
          </View>
        )}
      />

      <TouchableOpacity
        style={NotificationStyles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={NotificationStyles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NotificationScreen;
