import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Alert, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Map() {
  const navigation = useNavigation();
  const [gpsData, setGpsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGpsData = async () => {
      try {
        const response = await fetch("http://192.168.123.51/gps"); // For Android Emulator
        if (!response.ok) {
          throw new Error("Failed to fetch GPS data");
        }
        const data = await response.json();
        setGpsData(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        Alert.alert("Error", "Failed to fetch GPS data from the Arduino server.");
        setLoading(false);
      }
    };

    // Fetch GPS data every second
    const interval = setInterval(fetchGpsData, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text style={styles.loadingText}>Loading GPS data...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.logoContainer}>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
        </TouchableOpacity>
        <View style={styles.navLinks}>
          <Text style={styles.navText}>Location</Text>
        </View>
      </View>

      {/* GPS Data */}
      <View style={styles.dataContainer}>
        <Text style={styles.dataText}>Date: {gpsData.date || "0000-00-00"}</Text>
        <Text style={styles.dataText}>Time: {gpsData.time || "00:00:00"}</Text>
        <Text style={styles.dataText}>Latitude: {gpsData.latitude || "0"}</Text>
        <Text style={styles.dataText}>Longitude: {gpsData.longitude || "0"}</Text>
        <Text style={styles.dataText}>Speed (km/h): {gpsData.speed_kmph || "0"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fef6e4", // Match the background color of other pages
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#2e4057", // Match the header background color
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 50,
  },
  navLinks: {
    flex: 1,
    alignItems: "center",
  },
  navText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  dataContainer: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff", // Match the card background color
    elevation: 5,
    marginVertical: 10,
  },
  dataText: {
    fontSize: 16,
    color: "#333", // Match the text color of other pages
    marginBottom: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fef6e4", // Match the background color of other pages
  },
  loadingText: {
    fontSize: 16,
    color: "#333", // Match the text color of other pages
    marginTop: 10,
  },
});