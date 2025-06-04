import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker"; // Import ImagePicker for image selection
import homeStyles from "../StyleSheet/HomeStyle";

const communityPosts = [
  {
    id: "1",
    name: "Drei Asian Boy",
    post: "These sweet and loving bundles of joy are ready to become your new best friend!",
    image: require("../assets/sampledog.jpg"),
    profile: require("../assets/cat1.jpg"),
    time: "Posted at 10:00 AM", // Example time
  },
  {
    id: "2",
    name: "LE AM",
    post: "Save a life! Adopt or foster. Since our home has yet to be returned to us.",
    image: require("../assets/cat.jpg"),
    profile: require("../assets/Amador.jpg"),
    time: "Posted at 2:30 PM", // Example time
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const [newPost, setNewPost] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.uri);
    }
  };

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Get current time
      const newPostData = {
        id: (communityPosts.length + 1).toString(),
        name: "ronn", // Replace with actual user name
        post: newPost,
        image: selectedImage ? { uri: selectedImage } : null, // Include image only if selected
        profile: require("../assets/Belarmino.jpg"), // Replace with actual profile image
        time: `Posted at ${currentTime}`, // Add the current time
      };
      communityPosts.unshift(newPostData); // Add the new post to the top of the list
      setNewPost("");
      setSelectedImage(null);
    } else {
      alert("Please enter a post.");
    }
  };

  return (
    <SafeAreaView style={homeStyles.container}>
      {/* Header */}
      <View style={homeStyles.header}>
        <Image source={require("../assets/logo.png")} style={homeStyles.logo} />
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

      {/* Post Upload Section */}
      <View style={homeStyles.uploadContainer}>
        <Text style={homeStyles.uploadTitle}>Create a Post</Text>
        <TextInput
          style={homeStyles.uploadInput}
          placeholder="Write your post here..."
          value={newPost}
          onChangeText={setNewPost}
          multiline={true} // Allow multiline input for longer posts
        />
        <TouchableOpacity style={homeStyles.imagePickerButton} onPress={handleImagePicker}>
          <Text style={homeStyles.imagePickerText}>
            {selectedImage ? "Change Image" : "Select Image"}
          </Text>
        </TouchableOpacity>
        {selectedImage && (
          <Image source={{ uri: selectedImage }} style={homeStyles.previewImage} />
        )}
        <TouchableOpacity style={homeStyles.submitButton} onPress={handlePostSubmit}>
          <Text style={homeStyles.submitButtonText}>Post</Text>
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
                <Text style={homeStyles.userResidence}>{item.time}</Text> {/* Display post time */}
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
    </SafeAreaView>
  );
};

export default HomeScreen;