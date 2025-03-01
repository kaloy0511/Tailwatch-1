import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Top Navigation Bar */}
      <View style={styles.topBar}>
        <Image source={{ uri: "https://via.placeholder.com/50" }} style={styles.logo} />
        <View style={styles.navLinks}>
          <Text style={styles.navText}>Home</Text>
          <Text style={styles.navText}>Adopt Pets</Text>
          <Text style={styles.navText}>Report</Text>
          <Text style={styles.navText}>Lost Pets</Text>
        </View>
        <FontAwesome name="cog" size={24} color="#000" style={styles.settingsIcon} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput placeholder="What are you looking for?" style={styles.searchInput} />
        <FontAwesome name="search" size={18} color="#000" style={styles.searchIcon} />
      </View>

      {/* Community Feed */}
      <ScrollView style={styles.feedContainer}>
        {[1, 2].map((item, index) => (
          <View key={index} style={styles.postContainer}>
            <View style={styles.postHeader}>
              <Image source={{ uri: "https://via.placeholder.com/40" }} style={styles.profilePic} />
              <View style={styles.userInfo}>
                <Text style={styles.userName}>{index === 0 ? "Nicolas Cage" : "Omack G"}</Text>
                <Text style={styles.userResidence}>Residence</Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.followText}>Follow</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.postContent}>
              <Text style={styles.postText}>Random community post</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <FontAwesome name="users" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <FontAwesome name="envelope" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navButton, styles.homeButton]}>
          <FontAwesome name="home" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <FontAwesome name="users" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileIcon}>
          <Image source={{ uri: "https://via.placeholder.com/40" }} style={styles.profilePicSmall} />
        </TouchableOpacity>
      </View>
    </View>
  );
}