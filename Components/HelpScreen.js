import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import styles from "../StyleSheet/HelpStyles"; // Ensure you have this style file

const HelpScreen = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi, I'm here to help with your pet-related questions!", sender: "AI" },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      
      <Text style={styles.title}>Pet Help Center</Text>
      
      {/* Chat Box */}
      <ScrollView style={styles.chatContainer}>
        {messages.map((msg) => (
          <View key={msg.id} style={msg.sender === "AI" ? styles.aiMessage : styles.userMessage}>
            <Text>{msg.text}</Text>
          </View>
        ))}
      </ScrollView>
      
      {/* Input Section */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ask something about your pet..."
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HelpScreen;
