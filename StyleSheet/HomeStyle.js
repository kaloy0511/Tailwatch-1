import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window"); // Get actual screen size

const homeStyles = StyleSheet.create({
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

  navLinks: {
    flexDirection: "row",
    justifyContent: "center",
    flexGrow: 1,
    marginHorizontal: width * 0.015, // Responsive spacing
  },

  navText: {
    fontSize: width * 0.035, // Scales text size
    fontWeight: "bold",
    color: "white",
    marginHorizontal: width * 0.015, // Responsive spacing
  },

  logo: {
    width: width * 0.1, // 10% of screen width
    height: width * 0.1,
    borderRadius: width * 0.05, // Half for perfect circle
  },

  searchBarContainer: {
    width: "90%", // Responsive width
    backgroundColor: "white",
    borderRadius: width * 0.05,
    padding: width * 0.015,
    borderWidth: 1,
    borderColor: "#ccc",
    alignSelf: "center",
    marginVertical: width * 0.02,
  },

  searchBar: {
    width: "100%",
    padding: width * 0.015,
  },

  settingsIcon: {
    width: width * 0.07,
    height: width * 0.07,
  },

  postContainer: {
    width: "100%",
    paddingVertical: width * 0.025,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#fceed3",
  },

  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: width * 0.02,
    paddingHorizontal: width * 0.03,
  },

  profileImage: {
    width: width * 0.09,
    height: width * 0.09,
    borderRadius: width * 0.045, // Half for perfect circle
    marginRight: width * 0.02,
  },

  userName: {
    fontWeight: "bold",
    fontSize: width * 0.04, // Responsive text size
  },

  residence: {
    fontSize: width * 0.035,
    color: "#777",
  },

  followText: {
    color: "blue",
    marginLeft: "auto",
    fontWeight: "bold",
    fontSize: width * 0.035,
  },

  postBox: {
    width: "90%",
    alignSelf: "center",
    padding: width * 0.03,
    backgroundColor: "#dcdcdc",
    borderRadius: width * 0.03,
  },

  postImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1, // Maintains proper aspect ratio
    borderRadius: width * 0.03,
    marginTop: width * 0.015,
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: width * 0.03,
    backgroundColor: "#aa708b",
    borderTopLeftRadius: width * 0.04,
    borderTopRightRadius: width * 0.04,
    alignItems: "center",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },

  navIcon: {
    width: width * 0.07,
    height: width * 0.07,
  },

  homeIcon: {
    width: width * 0.1,
    height: width * 0.1,
    position: "absolute",
    top: -width * 0.04,
    backgroundColor: "#c28e9e",
    padding: width * 0.015,
    borderRadius: width * 0.05, // Half for circle
    justifyContent: "center",
    alignItems: "center",
  },
});

export default homeStyles;
