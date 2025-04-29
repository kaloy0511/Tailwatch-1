import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fef6e4",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#2e4057",
    paddingHorizontal: 15, // Increased padding for better spacing
    paddingVertical: 15,
  },
  logo: {
    width: 50,
    height: 50,
  },
  navLinks: {
    flexDirection: "row",
    alignItems: "center",
  },
  navText: {
    color: "#fff",
    fontSize: 14,
    marginHorizontal: 10,
  },
  settingsIcon: {
    width: 35, // Increased width
    height: 35, // Increased height
    resizeMode: "contain", // Ensures the icon fits within the dimensions
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 20,
    paddingHorizontal: 15,
    elevation: 3,
  },
  searchBar: {
    flex: 1,
    height: 40,
    fontSize: 14,
    color: "#000",
  },
  searchIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  postContainer: {
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
    padding: 15,
    elevation: 2,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2e4057",
  },
  userResidence: {
    fontSize: 12,
    color: "#666",
  },
  followText: {
    marginLeft: "auto",
    color: "#2e4057",
    fontSize: 12,
    fontWeight: "bold",
  },
  postBox: {
    marginTop: 10,
  },
  postText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 10,
  },
  postImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#2e4057",
    paddingVertical: 10,
  },
  navIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});

export default styles;