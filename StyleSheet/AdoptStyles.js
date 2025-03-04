import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window"); // Get actual screen size

const adoptStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fceed3",
    width: "100%", // Responsive width
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: width * 0.03, // Scales with screen size
    backgroundColor: "#aa708b",
    justifyContent: "space-between",
    width: "100%", // Responsive width
  },

  logo: {
    width: width * 0.1, // 10% of screen width
    height: width * 0.1,
    borderRadius: width * 0.05, // Half for perfect circle
  },

  searchBar: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: width * 0.02,
    paddingHorizontal: width * 0.03,
    height: width * 0.1,
    marginHorizontal: width * 0.02,
  },

  title: {
    fontSize: width * 0.06,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: width * 0.05,
  },

  subtitle: {
    fontSize: width * 0.045,
    textAlign: "center",
    marginBottom: width * 0.05,
  },

  petCard: {
    backgroundColor: "#e8d1c5",
    padding: width * 0.05,
    margin: width * 0.03,
    borderRadius: width * 0.04,
    alignItems: "center",
  },

  petImage: {
    width: width * 0.5,
    height: width * 0.5,
    borderRadius: width * 0.02,
  },

  petName: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    marginTop: width * 0.02,
  },

  petInfo: {
    fontSize: width * 0.04,
    marginTop: width * 0.01,
  },

  petDescription: {
    fontSize: width * 0.035,
    textAlign: "center",
    marginTop: width * 0.02,
  },

  infoButton: {
    marginTop: width * 0.03,
    backgroundColor: "#aa708b",
    paddingVertical: width * 0.03,
    paddingHorizontal: width * 0.05,
    borderRadius: width * 0.02,
  },

  buttonText: {
    color: "white",
    fontSize: width * 0.04,
    fontWeight: "bold",
  },
});

export default adoptStyles;
