import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import homeStyles from "../StyleSheet/HomeStyle";

const HomeScreen = () => {
  const [communityPosts, setCommunityPosts] = useState([
    {
      id: "1",
      name: "Drei Asian Boy",
      post: "These sweet and loving bundles of joy are ready to become your new best friend!",
      image: require("../assets/lostcat1.jpg"),
      profile: require("../assets/lostcat2.jpg"),
      timestamp: new Date().getTime() - 3600000, // 1 hour ago
    },
    {
      id: "2",
      name: "LE AM",
      post: "Save a life! Adopt or foster. Since our home has yet to be returned to us.",
      image: require("../assets/Amador.jpg"),
      profile: require("../assets/Amador.jpg"),
      timestamp: new Date().getTime() - 7200000, // 2 hours ago
    },
  ]);
  const [postText, setPostText] = useState("");
  const [postImage, setPostImage] = useState(null);

  // Function to pick an image
  const handleImageChange = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setPostImage(result.uri);
    }
  };

  // Function to handle posting
  const handlePost = () => {
    if (!postText.trim()) {
      Alert.alert("Error", "Post text cannot be empty.");
      return;
    }

    const newPost = {
      id: (communityPosts.length + 1).toString(),
      name: "You", // Replace with the logged-in user's name
      post: postText,
      image: postImage ? { uri: postImage } : null,
      profile: require("../assets/Belarmino.jpg"), // Replace with the logged-in user's profile image
      timestamp: new Date().getTime(), // Current time
    };

    setCommunityPosts([newPost, ...communityPosts]); // Add the new post to the top of the list
    setPostText(""); // Clear the text input
    setPostImage(null); // Clear the selected image
  };

  // Function to calculate elapsed time
  const getElapsedTime = (timestamp) => {
    const now = new Date().getTime();
    const elapsed = now - timestamp;

    if (elapsed < 60000) {
      return `${Math.floor(elapsed / 1000)} seconds ago`;
    } else if (elapsed < 3600000) {
      return `${Math.floor(elapsed / 60000)} minutes ago`;
    } else if (elapsed < 86400000) {
      return `${Math.floor(elapsed / 3600000)} hours ago`;
    } else {
      return `${Math.floor(elapsed / 86400000)} days ago`;
    }
  };

  return (
    <SafeAreaView style={homeStyles.container}>
      {/* Create Post Section */}
      <View style={homeStyles.createPostContainer}>
        <View style={homeStyles.postComposer}>
          <Image
            source={require("../assets/Belarmino.jpg")} // Replace with the logged-in user's profile image
            style={homeStyles.composerPic}
          />
          <TextInput
            style={homeStyles.createPostInput}
            placeholder="What's on your mind?"
            placeholderTextColor="#999"
            value={postText}
            onChangeText={setPostText}
          />
          <TouchableOpacity onPress={handleImageChange} style={homeStyles.imageUploadLabel}>
            <Text style={{ fontSize: 18 }}>📷</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePost} style={homeStyles.postButton}>
            <Text style={homeStyles.postButtonText}>Post</Text>
          </TouchableOpacity>
        </View>
        {postImage && (
          <View style={homeStyles.composerPreview}>
            <Image
              source={{ uri: postImage }}
              style={homeStyles.previewImage}
            />
          </View>
        )}
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
              {/* Conditionally render the Follow button */}
              {item.name !== "You" && (
                <TouchableOpacity>
                  <Text style={homeStyles.followText}>Follow</Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={homeStyles.postBox}>
              <Text style={homeStyles.postText}>{item.post}</Text>
              {item.image && <Image source={item.image} style={homeStyles.postImage} />}
              <Text style={homeStyles.timestamp}>{getElapsedTime(item.timestamp)}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;