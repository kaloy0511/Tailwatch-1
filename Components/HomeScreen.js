import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity, FlatList } from "react-native";
import homeStyles from "../StyleSheet/HomeStyle"; // Ensure the path is correct

const communityPosts = [
  { id: "1", name: "Nicolas Cage", residence: "", post: "Random community post" },
  { id: "2", name: "Omack G", residence: "", post: "Random community post" },
];

const HomeScreen = () => {
  return (
    <View style={homeStyles.container}>
      {/* Header */}
      <View style={homeStyles.header}>
        <Image source={{ uri: "https://via.placeholder.com/50" }} style={homeStyles.logo} />
        <TextInput style={homeStyles.searchBar} placeholder="What are you looking for?" />
        <TouchableOpacity>
          <Image source={{ uri: "https://via.placeholder.com/30" }} style={homeStyles.settingsIcon} />
        </TouchableOpacity>
      </View>
      
      {/* Community Posts */}
      <FlatList
        data={communityPosts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={homeStyles.postContainer}>
            <View style={homeStyles.profileSection}>
              <Image source={{ uri: "https://via.placeholder.com/40" }} style={homeStyles.profileImage} />
              <View>
                <Text style={homeStyles.userName}>{item.name}</Text>
                <Text style={homeStyles.residence}>Residence</Text>
              </View>
              <TouchableOpacity>
                <Text style={homeStyles.followText}>Follow</Text>
              </TouchableOpacity>
            </View>
            <View style={homeStyles.postBox}>
              <Text>{item.post}</Text>
            </View>
          </View>
        )}
      />
      
      {/* Bottom Navigation */}
      <View style={homeStyles.bottomNav}>
        <TouchableOpacity>
          <Text>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>✉️</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>👥</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>📷</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
