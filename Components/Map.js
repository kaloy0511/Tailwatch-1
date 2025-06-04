import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Alert } from "react-native";

export default function Map() {
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
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading GPS data...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GPS Data</Text>
      <View style={styles.dataContainer}>
        <Text style={styles.dataText}>Date: {gpsData.date}</Text>
        <Text style={styles.dataText}>Time: {gpsData.time}</Text>
        <Text style={styles.dataText}>Latitude: {gpsData.latitude}</Text>
        <Text style={styles.dataText}>Longitude: {gpsData.longitude}</Text>
        <Text style={styles.dataText}>Speed (km/h): {gpsData.speed_kmph}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FCE8D5", // Match background color with other screens
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4B1E35",
    marginBottom: 20,
  },
  dataContainer: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 5,
    width: "90%",
  },
  dataText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FCE8D5",
  },
});