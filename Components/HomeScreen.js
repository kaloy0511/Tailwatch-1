import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import homeStyles from "../StyleSheet/HomeStyle";

const communityPosts = [
  {
    id: "1",
    name: "Bernardino",
    post: "These sweet and loving bundles of joy are ready to become your new best friend!",
    image: require("../assets/samplepost.png"), 
    profile: require("../assets/Belarmino.jpg"),
  },
  {
    id: "2",
    name: "LE AM",
    post: "Save a life! Adopt or foster. Since our home has yet to be returned to us.",
    image: require("../assets/samplepost.png"),
    profile: require("../assets/Amador.jpg"),
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={homeStyles.container}>
      {/* Header */}
      <View style={homeStyles.header}>
        <Image source={("../assets/logo.png")} style={homeStyles.logo} /> {/* Add logo asset here */}
        <View style={homeStyles.navLinks}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={homeStyles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Adopt")}>
            <Text style={homeStyles.navText}>Adopt Pets</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Report")}>
            <Text style={homeStyles.navText}>Report</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Lost")}>
            <Text style={homeStyles.navText}>Lost Pets</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Image source={require("../assets/settings.png")} style={homeStyles.settingsIcon} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={homeStyles.searchBarContainer}>
        <TextInput
          style={homeStyles.searchBar}
          placeholder="What are you looking for?"
          placeholderTextColor="#999"
        />
        <TouchableOpacity>
          <Image source={null} style={homeStyles.searchIcon} /> {/* Add search icon asset here */}
        </TouchableOpacity>
      </View>

      {/* Community Posts */}
      <FlatList
        data={communityPosts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 80 }}
        renderItem={({ item }) => (
          <View style={homeStyles.postContainer}>
            <View style={homeStyles.profileSection}>
              <Image source={item.profile} style={homeStyles.profileImage} />
              <View>
                <Text style={homeStyles.userName}>{item.name}</Text>
                <Text style={homeStyles.userResidence}>Residence</Text>
              </View>
              <TouchableOpacity>
                <Text style={homeStyles.followText}>Follow</Text>
              </TouchableOpacity>
            </View>
            <View style={homeStyles.postBox}>
              <Text style={homeStyles.postText}>{item.post}</Text>
              {item.image && <Image source={item.image} style={homeStyles.postImage} />}
            </View>
          </View>
        )}
      />

      {/* Bottom Navigation */}
      <View style={homeStyles.bottomNav}>
        <TouchableOpacity>
          <Image source={null} style={homeStyles.navIcon} /> {/* Add location icon asset here */}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Messages")}>
          <Image source={null} style={homeStyles.navIcon} /> {/* Add messages icon asset here */}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image source={null} style={homeStyles.navIcon} /> {/* Add home icon asset here */}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Adopt")}>
          <Image source={null} style={homeStyles.navIcon} /> {/* Add adopt icon asset here */}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;