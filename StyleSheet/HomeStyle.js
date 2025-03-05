import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window"); // Get screen size

// Function to calculate responsive font sizes
const getFontSize = (size) => Math.max(size, width * 0.04);

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fceed3",
    width: "100%", // Full width for responsiveness
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: width * 0.04,
    backgroundColor: "#aa708b",
    justifyContent: "space-between",
    width: "100%",
  },

  navLinks: {
    flexDirection: "row",
    justifyContent: "center",
    flexGrow: 1,
    marginHorizontal: width * 0.02,
  },

  navText: {
    fontSize: getFontSize(14), // Ensures text scales dynamically
    fontWeight: "bold",
    color: "white",
    marginHorizontal: width * 0.02,
  },

  logo: {
    width: 50,
    height: 50,
    borderRadius: width * 0.06, // Half for perfect circle
  },

  searchBarContainer: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: width * 0.05,
    padding: width * 0.015,
    borderWidth: 1,
    borderColor: "#ccc",
    alignSelf: "center",
    marginVertical: width * 0.03,
  },

  searchBar: {
    width: "100%",
    padding: width * 0.018,
    fontSize: getFontSize(14),
  },

  settingsIcon: {
    width: width * 0.08,
    height: width * 0.08,
  },

  postContainer: {
    width: "100%",
    paddingVertical: width * 0.03,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#fceed3",
  },

  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: width * 0.025,
    paddingHorizontal: width * 0.04,
  },

  profileImage: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: width * 0.05, // Half for perfect circle
    marginRight: width * 0.025,
  },

  userName: {
    fontWeight: "bold",
    fontSize: getFontSize(16), // Dynamic font size
  },

  residence: {
    fontSize: getFontSize(14),
    color: "#777",
  },

  followText: {
    color: "blue",
    marginLeft: "auto",
    fontWeight: "bold",
    fontSize: getFontSize(14),
  },

  postBox: {
    width: "90%",
    alignSelf: "center",
    padding: width * 0.04,
    backgroundColor: "#dcdcdc",
    borderRadius: width * 0.03,
  },

  postImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1, // Ensures correct aspect ratio
    borderRadius: width * 0.03,
    marginTop: width * 0.02,
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: width * 0.035,
    backgroundColor: "#aa708b",
    borderTopLeftRadius: width * 0.04,
    borderTopRightRadius: width * 0.04,
    alignItems: "center",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },

  navIcon: {
    width: width * 0.08,
    height: width * 0.08,
  },

  homeIcon: {
    width: width * 0.12,
    height: width * 0.12,
    position: "absolute",
    top: -width * 0.05,
    backgroundColor: "#c28e9e",
    padding: width * 0.02,
    borderRadius: width * 0.06,
    justifyContent: "center",
    alignItems: "center",
  },
  lostPetsButton: {
    marginBottom: 20, // Adjust this value to create more or less space
  },
  
});

export default homeStyles;
